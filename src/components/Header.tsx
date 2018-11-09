import * as React from 'react'
import { ToggleDashboardButton } from '../containers/ToggleDashboardButton'
import { SeriesCountInput } from './SeriesCountInput'

import { Button } from 'looker-lens'

export const Header = () => (
  <header>
    <div>
      <ToggleDashboardButton>Toggle dashboard/editor</ToggleDashboardButton>
      <SeriesCountInput />
      <Button>Copy to clipboard</Button>
    </div>
  </header>
)
