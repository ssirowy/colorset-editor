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
    flexDirection: 'column',
  } as any

  return (
    <div style={divStyle}>
      {
        collection.categoricalPalettes.map((palette, index) => (
          <div key={index}>
            <Heading>{palette.label}</Heading>
            <DiscretePaletteLineup palette={palette} numSeries={numSeries} />
          </div>
        ))
      }
    </div>
  )
}
