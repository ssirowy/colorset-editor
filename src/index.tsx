import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './components/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// Data for color collections.
import FIXTURES from './data/color_collections.json'

// import { ColorCollectionType } from './models/types'

// redux stuff
import { Provider } from 'react-redux'

import {configureStore } from './configureStore'

// Lens components
import {
  theme,
  ThemeProvider,
} from 'looker-lens'

const collections = FIXTURES.colorCollections
const defaultState = {
  collections,
  selectedCollection: collections[0].id,
  json: ''
}

const store = configureStore(defaultState)

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
