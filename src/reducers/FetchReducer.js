import * as actionType from '../actions/ActionType';

const initialState = {
                test_value: 'test',
		name: 'cass william',
        };

const fetchReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
       case 'ITEMS_HAS_ERRORED':
            return action.hasErrored;
        case 'ITEMS_IS_LOADING':
            return action.isLoading;
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return action.items;
    default:
      return state
  }
}

export default fetchReducer;
