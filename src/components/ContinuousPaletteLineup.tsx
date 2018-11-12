import * as React from 'react'
import { ContinuousPaletteType } from 'src/models/types';

import { ContinuousPaletteTable } from './ContinuousPaletteTable';

interface ContinuousLineupProps {
  palette: ContinuousPaletteType
}

export const ContinuousPaletteLineup: React.SFC<ContinuousLineupProps> = ({ palette }) => {
  const rowStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'nowrap'
  }

  return (
    <div style={rowStyle}>
      <ContinuousPaletteTable palette={palette} />
      <ContinuousPaletteTable palette={palette} />
      <ContinuousPaletteTable palette={palette} />
      <ContinuousPaletteTable palette={palette} />
    </div>
  )
}
