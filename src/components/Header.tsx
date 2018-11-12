import * as React from 'react'

import { Box } from 'looker-lens'

import { CopyButton } from '../containers/CopyButton'
import { LoadButton } from '../containers/LoadButton'
import { ToggleDashboardButton } from '../containers/ToggleDashboardButton'
import { SeriesCountInput } from './SeriesCountInput'

export const Header = () => (
  <header>
    <div>
      <ToggleDashboardButton>Toggle dashboard/editor</ToggleDashboardButton>
      <SeriesCountInput />
      <Box>
        <CopyButton />
        <LoadButton />
      </Box>
    </div>
  </header>
)
