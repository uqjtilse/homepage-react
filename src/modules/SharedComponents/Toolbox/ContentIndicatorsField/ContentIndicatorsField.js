import React from 'react';
import PropTypes from 'prop-types';
import { GenericSelectField } from 'modules/SharedComponents/GenericSelectField';
import {
    CONTENT_INDICATORS,
    CONTENT_INDICATORS_DOCTYPE_BLACKLIST,
    CONTENT_INDICATORS_COLLECTIONS_BLACKLIST,
} from 'config/general';

export const getSelected = props => {
    let selectedValues = !!props.input && props.input.value || [];
    if (selectedValues.toJS) {
        selectedValues = selectedValues.toJS();
    }
    return selectedValues;
};

export const showContentIndicatorsField = (record) => {
    const isBlacklistedType = CONTENT_INDICATORS_DOCTYPE_BLACKLIST.includes(
        record.rek_display_type
    );
    const recordCollectionPids = record.fez_record_search_key_ismemberof &&
        record.fez_record_search_key_ismemberof.map(
            item => item.rek_ismemberof
        ) || []
    ;
    const inBlacklistedCollection = CONTENT_INDICATORS_COLLECTIONS_BLACKLIST.some(
        collectionPid => recordCollectionPids.includes(collectionPid)
    );
    return !isBlacklistedType && !inBlacklistedCollection;
};

export const getContentIndicators = props => CONTENT_INDICATORS.map(
    item => ({
        ...item,
        disabled: (
            !!props.meta &&
            !!props.meta.initial &&
            !!props.meta.initial.toJS &&
            props.meta.initial.toJS().includes(item.value)
        )
    })
);

export const ContentIndicatorsField = props => {
    return (
        <GenericSelectField
            itemsList={getContentIndicators(props)}
            hideLabel={false}
            locale={{ label: props.label }}
            selectedValue={getSelected(props)}
            onChange={!!props.input && props.input.onChange || undefined}
            errorText={!!props.meta && props.meta.error || ''}
            error={!!props.meta && !!props.meta.error || false}
            {...props}
        />
    );
};

ContentIndicatorsField.propTypes = {
    input: PropTypes.object,
    meta: PropTypes.object,
    label: PropTypes.string,
};

export default ContentIndicatorsField;
