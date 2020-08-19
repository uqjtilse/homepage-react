import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { locale } from 'locale';

const dompurify = require('dompurify');
const moment = require('moment');
export default class Meta extends PureComponent {
    static propTypes = {
        publication: PropTypes.object,
        routesConfig: PropTypes.array,
        location: PropTypes.object.isRequired,
    };

    sanitiseAndReplaceHtmlChars = (object, key, alternateKey) => {
        const replaceHtmlChars = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
        };
        const sanitisedFormattedText =
            !!object[alternateKey] &&
            dompurify.sanitize(object[alternateKey], { ALLOWED_TAGS: [''] }).replace(/\s/g, '');
        const text =
            (!!object[key] && object[key].length > 0 && object[key]) ||
            (sanitisedFormattedText && object[alternateKey]);
        return (
            text.length > 0 &&
            text.replace(/[&<>]/g, replace => replaceHtmlChars[replace] || /* istanbul ignore next */ replace)
        );
    };

    getMetaTagContent = (object, key, url, dateFormat) => {
        if (!!object) {
            switch (key) {
                case 'rek_pid':
                    return !!object[key] && url(object[key]);
                case 'rek_date':
                    return (
                        !!object[key] &&
                        ((object[key].length === 4 && object[key]) || moment.parseZone(object[key]).format(dateFormat))
                    );
                case 'rek_description':
                    return this.sanitiseAndReplaceHtmlChars(object, key, 'rek_formatted_abstract');
                case 'rek_title':
                    return this.sanitiseAndReplaceHtmlChars(object, key, 'rek_formatted_title');
                case 'rek_issn':
                    return object[key];
                default:
                    return (!!object[`${key}_lookup`] && object[`${key}_lookup`]) || (!!object[key] && object[key]);
            }
        }

        return null;
    };

    getSingleTagForSingleValue = (name, object, key, url, format) => {
        const content = this.getMetaTagContent(object, key, url, format);
        return content && { name, content };
    };

    getMultipleTagsForMultipleValues = (searchKey, subkey, url, tag) => {
        const { name, format } = tag;
        return (
            !!searchKey &&
            searchKey.length > 0 &&
            searchKey.map(object => this.getSingleTagForSingleValue(name, object, subkey, url, format))
        );
    };

    getSingleTagForMultipleValues = (searchKey, subkey, tag) => {
        return [
            {
                name: tag.name,
                content:
                    !!searchKey &&
                    searchKey.length > 0 &&
                    searchKey
                        .reduce((metaTagContent, fieldValue) => {
                            metaTagContent.push(fieldValue[subkey]);
                            return metaTagContent;
                        }, [])
                        .join('; '),
            },
        ];
    };

    getMetaTagsForFezRecordSearchKeys = (searchKey, subkey, url, tag) => {
        const { name, isMultiple, format } = tag;
        if (!!searchKey && searchKey.length > 0) {
            // If multiple tags allowed then get meta tag for each value
            // Otherwise single meta tag for multiple values separated by semicolon
            return isMultiple
                ? this.getMultipleTagsForMultipleValues(searchKey, subkey, url, tag)
                : this.getSingleTagForMultipleValues(searchKey, subkey, tag);
        } else {
            // Return meta tag if single value exists in search key
            return [this.getSingleTagForSingleValue(name, searchKey, subkey, url, format)];
        }
    };

    getMetaTagsForOtherFields = (values, subkey, url, tag) => {
        const { name, isMultiple, format } = tag;
        if (isMultiple) {
            return this.getMultipleTagsForMultipleValues(values, subkey, url, tag);
        } else {
            return [this.getSingleTagForSingleValue(name, this.props.publication, subkey, url, format)];
        }
    };

    render() {
        const { publication, routesConfig } = this.props;
        const metaTags = [];
        const filteredRoutes =
            !publication &&
            routesConfig.filter(route =>
                !!route.regExPath
                    ? new RegExp(route.regExPath, 'i').test(this.props.location.pathname)
                    : route.path === this.props.location.pathname,
            );
        const pageTitle = !!publication
            ? publication.rek_title
            : filteredRoutes.length > 0 && filteredRoutes[0].pageTitle;
        const linkProps = !!publication
            ? {
                  link: [
                      {
                          rel: 'schema.DC',
                          href: 'http://purl.org/DC/elements/1.0/',
                      },
                  ],
              }
            : {};
        const metaTagsProps =
            (metaTags.length > 0 && {
                meta: metaTags.map((tag, index) => ({
                    key: `${tag.name}-${index}`,
                    ...tag,
                    ...(tag.name === 'DC.Identifier' ? { scheme: 'URI' } : {}),
                })),
            }) ||
            {};

        return (
            <Helmet
                title={`${pageTitle ? `${pageTitle} - ` : ''}${locale.global.title}`}
                {...linkProps}
                {...metaTagsProps}
            />
        );
    }
}
