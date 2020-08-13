import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';
import { history } from 'config/history';

// Load reducers
import { default as helpDrawerReducer } from 'modules/SharedComponents/Toolbox/HelpDrawer/reducer';
import { default as fileUploadReducer } from 'modules/SharedComponents/Toolbox/FileUploader/reducer';

import * as reducers from './reducers';

const rootReducer = combineReducers({
    helpDrawer: helpDrawerReducer,
    fileUpload: fileUploadReducer,
    router: connectRouter(history),
    ...reducers,
});

export default rootReducer;
