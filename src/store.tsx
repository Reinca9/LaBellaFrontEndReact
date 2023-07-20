import { createStore, Store } from 'redux';


export interface AppState {
  isConnected: boolean;
  auth: {
    token: string | null;
    errorMessage: string | null;
  };
}

const initialState: AppState = {
  isConnected: false,
  auth: {
    token: null,
    errorMessage: null
  }
};
export interface RootState {
  auth: AppState;
}

enum ActionType {
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGOUT = 'LOGOUT',
}


interface LoginSuccessAction {
  type: ActionType.LOGIN_SUCCESS;
}

interface LogoutAction {
  type: ActionType.LOGOUT;
}


type AppAction = LoginSuccessAction | LogoutAction;


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


const store: Store<RootState, AppAction> = createStore(reducer);

export default store;