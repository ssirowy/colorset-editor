import * as React from 'react'

import { ToggleDashboardButton } from '../containers/ToggleDashboardButton'

import {
  Button,
} from 'looker-lens'

export const Header = () => (
  <header>
    <div>
      <ToggleDashboardButton>Toggle dashboard/editor</ToggleDashboardButton>
      <Button>Copy JSON</Button>
    </div>
  </header>
)
