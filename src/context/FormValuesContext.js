import React from 'react';
import Immutable from 'immutable';

const FormValuesContext = React.createContext({
    formValues: Immutable.Map({}),
    onDeleteAttachedFile: () => {},
});

export default FormValuesContext;
