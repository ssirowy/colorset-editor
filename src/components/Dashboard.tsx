import * as React from 'react'
import { ColorCollectionType } from '../models/types'
import { DiscretePaletteLineup } from './DiscretePaletteLineup'

import { Heading } from 'looker-lens'
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
            <Heading>{cPalette.label}</Heading>
            <DiscretePaletteLineup palette={cPalette} numSeries={numSeries} />
          </div>
        ))
      }
      {
        collection.sequentialPalettes.map((sPalette, index) => (
          <div key={index}>
            <Heading>{sPalette.label}</Heading>
            <ContinuousPaletteLineup palette={sPalette} />
          </div>
        ))
      }
      {
        collection.divergingPalettes.map((dPalette, index) => (
          <div key={index}>
            <Heading>{dPalette.label}</Heading>
            <ContinuousPaletteLineup palette={dPalette} />
          </div>
        ))
      }
    </div>
  )
}
