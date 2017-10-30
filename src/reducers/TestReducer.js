import * as actionType from '../actions/ActionType';

const initialState = {
                test_value: 'test',
		name: 'cass william',
        };

const testReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case actionType.TEST:
        return {
                ...state,
		test_value: 'test changed',
		name: 'cass william'
        }

    default:
      return state
  }
}

export default testReducer;
