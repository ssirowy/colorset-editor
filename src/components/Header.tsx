import * as React from 'react'

import { Box } from 'looker-lens'

import { CopyButton } from '../containers/CopyButton'
import { LoadButton } from '../containers/LoadButton'
import { ToggleDashboardButton } from '../containers/ToggleDashboardButton'
import { SeriesCountInput } from './SeriesCountInput'

interface HeaderProps {
  showSeries : boolean
}

export const Header: React.SFC<HeaderProps> = ({ showSeries }) => (
  <header>
    <div>
      <ToggleDashboardButton>
      {
        showSeries ? 'Back to editor' : 'View in dashboard'
      }
      </ToggleDashboardButton>
      {
        showSeries &&  <SeriesCountInput />
      }
      <Box>
        <CopyButton />
        <LoadButton />
      </Box>
    </div>
  </header>
)
