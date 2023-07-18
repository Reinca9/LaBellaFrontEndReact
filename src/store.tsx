import { createStore, Store } from 'redux';

// Define your initial state
interface AppState {
  isConnected: boolean;
}

const initialState: AppState = {
  isConnected: false,
};

// Define your action types
enum ActionType {
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGOUT = 'LOGOUT',
}

// Define your action interfaces
interface LoginSuccessAction {
  type: ActionType.LOGIN_SUCCESS;
}

interface LogoutAction {
  type: ActionType.LOGOUT;
}

// Define your union type for all actions
type AppAction = LoginSuccessAction | LogoutAction;

// Define your reducer function
const reducer = (state: AppState = initialState, action: AppAction): AppState => {
  switch (action.type) {
    case ActionType.LOGIN_SUCCESS:
      return {
        ...state,
        isConnected: true,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        isConnected: false,
      };
    default:
      return state;
  }
};

// Create the Redux store
const store: Store<AppState, AppAction> = createStore(reducer);

export default store;
