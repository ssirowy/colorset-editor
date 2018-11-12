import * as React from 'react'
import './App.css'

import { Header } from '../components/Header'
import { ModalContainer } from '../containers/ModalContainer'
import { Nav } from '../containers/Nav'
import { Section } from '../containers/Section'

export const App =() => (
  <div>
    <Header />
    <main>
      <Nav />
      <Section />
    </main>
    <ModalContainer />
  </div>
)
