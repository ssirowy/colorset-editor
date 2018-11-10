import * as React from 'react'
import { CopyButton } from '../containers/CopyButton'
import { ToggleDashboardButton } from '../containers/ToggleDashboardButton'
import { SeriesCountInput } from './SeriesCountInput'


export const Header = () => (
  <header>
    <div>
      <ToggleDashboardButton>Toggle dashboard/editor</ToggleDashboardButton>
      <SeriesCountInput />
      <CopyButton />
    </div>
  </header>
)
