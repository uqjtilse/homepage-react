import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Field} from 'redux-form/immutable';

import {TextField} from 'uqlibrary-react-toolbox/build/TextField';
import {StandardCard} from 'uqlibrary-react-toolbox/build/StandardCard';
import {PartialDateField} from 'uqlibrary-react-toolbox/build/PartialDate';
import {ContributorsEditorField} from 'modules/SharedComponents/ContributorsEditor';

import {validation} from 'config';
import {default as formLocale} from 'config/locale.forms.PublicationForm';

export default class PreprintForm extends Component {
    static propTypes = {
        submitting: PropTypes.bool,
    };

    constructor(props) {
        super(props);
    }

    render() {
        // path to the locale data for each of the sections
        const txt = formLocale.preprint;
        return (
            <div>
                <StandardCard title={txt.information.title} help={txt.information.help}>
                    <div className="columns">
                        <div className="column">
                            <Field
                                component={TextField}
                                disabled={this.props.submitting}
                                autoFocus
                                name="rek_title"
                                type="text"
                                fullWidth
                                multiLine
                                rows={1}
                                {...txt.information.fieldLabels.documentTitle}
                                className="requiredField"
                                validate={[validation.required]}
                            />
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <Field
                                component={PartialDateField}
                                disabled={this.props.submitting}
                                name="rek_date"
                                allowPartial
                                className="requiredHintField"
                                validate={[validation.required]}
                                floatingTitle={txt.information.fieldLabels.date.title}
                                floatingTitleRequired
                            />
                        </div>
                    </div>
                </StandardCard>

                <StandardCard title={txt.authors.title} help={txt.authors.help}>
                    <div>{txt.authors.description}</div>
                    <Field
                        component={ContributorsEditorField}
                        showContributorAssignment
                        className="requiredField"
                        name="authors"
                        locale={txt.authors.field}
                        validate={[validation.authorRequired]}
                        disabled={this.props.submitting} />
                </StandardCard>

                <StandardCard title={txt.optional.title} help={txt.optional.help}>
                    <div className="columns">
                        <div className="column">
                            <Field
                                component={TextField}
                                disabled={this.props.submitting}
                                name="fez_record_search_key_notes.rek_notes"
                                type="text"
                                fullWidth
                                rows={1}
                                multiLine
                                {...txt.optional.fieldLabels.notes}
                            />
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <Field
                                component={TextField}
                                disabled={this.props.submitting}
                                name="rek_link"
                                type="text"
                                fullWidth
                                {...txt.optional.fieldLabels.url}
                                validate={[validation.url]}
                            />
                        </div>
                    </div>
                </StandardCard>
            </div>
        );
    }
}
