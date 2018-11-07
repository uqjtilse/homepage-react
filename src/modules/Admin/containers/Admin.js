import {connect} from 'react-redux';
import {reduxForm, getFormValues, getFormSyncErrors} from 'redux-form/immutable';
import Immutable from 'immutable';
import Admin from '../components/Admin';
import {confirmDiscardFormChanges} from 'modules/SharedComponents/ConfirmDiscardFormChanges';
import {reloadReducerFromLocalStorage} from 'modules/SharedComponents/ReloadReducerFromLocalStorage';

const FORM_NAME = 'Prototype';

const onSubmit = (values, dispatch, props) => {
    console.log('Submitted', values, dispatch, props);
};

let PrototypeContainer = reduxForm({
    form: FORM_NAME,
    onSubmit
})(confirmDiscardFormChanges(Admin, FORM_NAME));

const mapStateToProps = (state) => {
    const formErrors = getFormSyncErrors(FORM_NAME)(state) || Immutable.Map({});

    return {
        formValues: getFormValues(FORM_NAME)(state) || Immutable.Map({}),
        formErrors: formErrors,
        disableSubmit: formErrors && !(formErrors instanceof Immutable.Map),
        initialValues: {
            author1affiliation: '75%',
            author2affiliation: '10%',
            author3affiliation: '5%'
        }
    };
};

PrototypeContainer = connect(mapStateToProps)(PrototypeContainer);

export default reloadReducerFromLocalStorage()(PrototypeContainer);