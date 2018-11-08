import { createStore, Store } from 'redux';

// Import the state interface and our combined reducers.
import { ApplicationState, reducers } from './store';

export const configureStore = (initialState: ApplicationState): Store<ApplicationState> =>
  createStore<ApplicationState, any, any, any>(
  reducers,
  initialState,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)
