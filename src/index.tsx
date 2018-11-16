import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { App } from './components/App';
import { configureStore } from './configureStore'
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// Default data for color collections.
import FIXTURES from './data/color_collections.json'

// Lens components
import {
  theme,
  ThemeProvider,
} from 'looker-lens'

const collections = FIXTURES.colorCollections

const defaultState = {
  collections,
  selectedCollection: collections[0].id,
  showDashboard: false,
  numSeries: 6,
  copiedToClipboard: false,
  selectedPalette: collections[0].categoricalPalettes[0].id,
  showLoadUx: false
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
