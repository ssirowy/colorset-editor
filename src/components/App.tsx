import * as React from 'react';
import './App.css';

// import copy from 'copy-to-clipboard'

import { Editor } from '../containers/Editor'
import { Header } from '../containers/Header'
import { Nav } from '../containers/Nav'

export const App =() => (
  <div>
    <Header />
    <main>
      <Nav />
      <Editor />
    </main>
  </div>
)
