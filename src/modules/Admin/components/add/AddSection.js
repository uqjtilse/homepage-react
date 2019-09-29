import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';

import { validation, publicationTypes } from 'config';
import locale from 'locale/pages';

import { StandardPage } from 'modules/SharedComponents/Toolbox/StandardPage';
import { StandardCard } from 'modules/SharedComponents/Toolbox/StandardCard';
import { SelectField } from 'modules/SharedComponents/Toolbox/SelectField';
import { CollectionField } from 'modules/SharedComponents/LookupFields';
import Hidden from '@material-ui/core/Hidden';

/* istanbul ignore next */
export const AddSection = ({
    hasDefaultDocTypeSubType,
    publicationSubtypeItems,
    selectedPublicationType,
    publicationSubtype,
    hasSubtypes,
    disabled = false,
    onCreate,
    disableSubmit,
}) => {
    const allPublicationTypes = Object.values(publicationTypes());
    const publicationTypeItems = [
        ...allPublicationTypes.map((item, index) => {
            return (
                <MenuItem value={item.id} key={index}>
                    {item.name}
                </MenuItem>
            );
        }),
    ];
    return (
        <form>
            <StandardPage title={locale.pages.adminAdd.title}>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <StandardCard title={locale.pages.adminAdd.step1} help={locale.pages.adminAdd.help}>
                            <Grid container spacing={24}>
                                <Grid item xs={12}>
                                    <Field
                                        component={CollectionField}
                                        disabled={disabled}
                                        name="additionalInformationSection.collections"
                                        id="additionalInformationSectioncollections"
                                        floatingLabelText={
                                            locale.pages.adminAdd.formLabels.ismemberof.floatingLabelText
                                        }
                                        hintText={locale.pages.adminAdd.formLabels.ismemberof.hintText}
                                        required
                                        validate={[validation.requiredList]}
                                        fullwidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        component={SelectField}
                                        disabled={disabled}
                                        name="rek_display_type"
                                        value={selectedPublicationType}
                                        label={locale.pages.adminAdd.formLabels.rek_display_type.inputLabelText}
                                        required
                                        validate={[validation.required]}
                                        placeholder={locale.pages.adminAdd.formLabels.rek_display_type.hintText}
                                        SelectDisplayProps={{
                                            id: 'rek-display-type',
                                        }}
                                    >
                                        {publicationTypeItems}
                                    </Field>
                                </Grid>
                                <Grid item xs={12}>
                                    {(hasSubtypes || hasDefaultDocTypeSubType) && (
                                        <Grid item xs={12}>
                                            <Field
                                                component={SelectField}
                                                disabled={disabled}
                                                id="rek-subtype"
                                                name="additionalInformationSection.rek_subtype"
                                                value={publicationSubtype}
                                                label={locale.pages.adminAdd.formLabels.rek_subtype.inputLabelText}
                                                required
                                                validate={[validation.required]}
                                                placeholder={locale.pages.adminAdd.formLabels.rek_subtype.hintText}
                                                SelectDisplayProps={{
                                                    id: 'rek-subtype',
                                                }}
                                            >
                                                {publicationSubtypeItems}
                                            </Field>
                                        </Grid>
                                    )}
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container spacing={8}>
                                        <Hidden xsDown>
                                            <Grid item xs />
                                        </Hidden>
                                        <Grid item xs={12} sm={'auto'}>
                                            <Button
                                                id="cancel-work"
                                                variant="contained"
                                                color="secondary"
                                                fullWidth
                                                children={locale.pages.adminAdd.cancelLabel}
                                                onClick={null}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={'auto'}>
                                            <Button
                                                id="submit-work"
                                                variant="contained"
                                                color="primary"
                                                fullWidth
                                                children={locale.pages.adminAdd.buttonLabel}
                                                onClick={onCreate}
                                                disabled={disabled || disableSubmit}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </StandardCard>
                    </Grid>
                </Grid>
            </StandardPage>
        </form>
    );
};

AddSection.propTypes = {
    disabled: PropTypes.bool,
    disableSubmit: PropTypes.bool,
    hasDefaultDocTypeSubType: PropTypes.bool,
    publicationSubtypeItems: PropTypes.array,
    selectedPublicationType: PropTypes.object,
    publicationSubtype: PropTypes.string,
    hasSubtypes: PropTypes.bool,
    formValues: PropTypes.any,
    location: PropTypes.object,
    history: PropTypes.object,
    actions: PropTypes.object,
    onCreate: PropTypes.func,
};

export default React.memo(AddSection);