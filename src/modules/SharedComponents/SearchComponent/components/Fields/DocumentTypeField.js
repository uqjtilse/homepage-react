import React, {PureComponent} from 'react';
import {publicationTypes} from 'config';
import MenuItem from 'material-ui/MenuItem';
import {locale} from 'locale';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';

export default class DocumentTypeField extends PureComponent {
    static propTypes = {
        docTypes: PropTypes.array,
        updateDocTypeValues: PropTypes.func,
        className: PropTypes.string,
        disabled: PropTypes.bool
    };

    static defaultProps = {
        value: [],
        disabled: false,
        className: 'displaytype menuitem'
    };

    constructor(props) {
        super(props);
        this.publicationTypes = publicationTypes();
    }

    _handleDocTypeChange = (event, index, value) => {
        this.props.updateDocTypeValues(value);
    };

    render() {
        const txt = locale.components.searchComponent;
        const docTypeItems = [
            ...this.publicationTypes.map((item, index) => {
                return (
                    <MenuItem
                        checked={this.props.docTypes && this.props.docTypes.length > 0 && this.props.docTypes.indexOf(item.id) > -1}
                        value={item.id}
                        primaryText={item.name}
                        key={index + 1}
                    />
                );
            })
        ];

        return (
            <SelectField
                floatingLabelText={txt.advancedSearch.fieldTypes.rek_display_type.title}
                floatingLabelFixed
                hintText={txt.advancedSearch.fieldTypes.rek_display_type.hint}
                value={this.props.docTypes}
                onChange={this._handleDocTypeChange}
                multiple
                fullWidth
                menuItemStyle={{whiteSpace: 'normal', lineHeight: '24px', paddingTop: '4px', paddingBottom: '4px'}}
                disabled={this.props.disabled}
            >
                {docTypeItems}
            </SelectField>
        );
    }
}