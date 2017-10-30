import testReducer from './TestReducer';
import fetchReducer from './FetchReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
        test: testReducer,
	fetch: fetchReducer,
});

export default rootReducer;

