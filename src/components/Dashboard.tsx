import * as React from 'react'
import { ColorCollectionType } from '../models/types'
import { DiscretePaletteLineup } from './DiscretePaletteLineup'

import { Heading } from 'looker-lens'

interface DashboardProps {
  collection: ColorCollectionType
  numSeries: number
}

export const Dashboard: React.SFC<DashboardProps> = ({ collection, numSeries }) => {
  const divStyle = {
    display: 'flex',
    'flex-direction': 'column',
  } as any

  return (
    <div style={divStyle}>
      {
        collection.categoricalPalettes.map((palette) => (
          <div>
            <Heading>{palette.label}</Heading>
            <DiscretePaletteLineup palette={palette} numSeries={numSeries} />
          </div>
        ))
      }
    </div>
  )
}
