import * as React from 'react'
import './App.css'

// import copy from 'copy-to-clipboard'

import { Header } from '../components/Header'
import { Nav } from '../containers/Nav'
import { Section } from '../containers/Section'

export const App =() => (
  <div>
    <Header />
    <main>
      <Nav />
      <Section />
    </main>
  </div>
)