import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Field} from 'redux-form/immutable';

import {TextField, StandardCard, PartialDateField} from 'uqlibrary-react-toolbox';
import {ContributorsEditorField} from 'modules/SharedComponents/ContributorsEditor';
import {validation, locale} from 'config';

export default class ImageDocumentForm extends Component {
    static propTypes = {
        submitting: PropTypes.bool
    };

    constructor(props) {
        super(props);
    }

    render() {
        // path to the locale data for each of the sections
        const txt = locale.forms.publicationForm.imageDocument;

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
                    <div className="columns">
                        <div className="column">
                            <Field
                                component={TextField}
                                disabled={this.props.submitting}
                                name="rek_description"
                                type="text"
                                fullWidth
                                rows={3}
                                multiLine
                                {...txt.information.fieldLabels.abstract}
                            />
                        </div>
                    </div>
                </StandardCard>

                <StandardCard title={txt.creator.title} help={txt.creator.help}>
                    <div>{txt.creator.description}</div>
                    <Field
                        component={ContributorsEditorField}
                        showContributorAssignment
                        className="requiredField"
                        name="authors"
                        locale={txt.creator.field}
                        disabled={this.props.submitting}
                        validate={[validation.authorRequired]}
                    />
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
                                name="rek_link"
                                type="text"
                                disabled={this.props.submitting}
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