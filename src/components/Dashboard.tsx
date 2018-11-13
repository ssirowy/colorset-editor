import * as React from 'react'
import { ColorCollectionType } from '../models/types'
import { DiscretePaletteLineup } from './DiscretePaletteLineup'

import { Text } from 'looker-lens'
import { ContinuousPaletteLineup } from './ContinuousPaletteLineup';

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
        collection.categoricalPalettes.map((cPalette, index) => (
          <div key={index}>
            <Text>{cPalette.label}</Text>
            <DiscretePaletteLineup palette={cPalette} numSeries={numSeries} />
          </div>
        ))
      }
      {
        collection.sequentialPalettes.map((sPalette, index) => (
          <div key={index}>
            <Text>{sPalette.label}</Text>
            <ContinuousPaletteLineup palette={sPalette} />
          </div>
        ))
      }
      {
        collection.divergingPalettes.map((dPalette, index) => (
          <div key={index}>
            <Text>{dPalette.label}</Text>
            <ContinuousPaletteLineup palette={dPalette} />
          </div>
        ))
      }
    </div>
  )
}
