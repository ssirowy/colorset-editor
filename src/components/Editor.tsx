import * as React from 'react'

import {
  Box,
  Heading
} from 'looker-lens'

import {
  ColorCollectionType,
  ContinuousPaletteType,
  DiscretePaletteType,
} from '../models/types'

import { ContinuousPalette } from '../components/ContinuousPalette'
import { DiscretePalette } from '../components/DiscretePalette'

interface EditorProps {
  collection: ColorCollectionType
}

export const Editor: React.SFC<EditorProps> = ({ collection }) => {

  const cp = collection.categoricalPalettes
  const sp = collection.sequentialPalettes
  const dp = collection.sequentialPalettes
  const label = collection.label

  return (
    <div>
      <Heading level="1">{label}</Heading>
      <Box p="large" display="flex" width="300px" flexWrap="wrap" justifyContent="space-between">
        {
          cp.map((palette: DiscretePaletteType, index: number) =>(
        <DiscretePalette key={index} palette={palette} />
          ))
        }
      </Box>
      <Box p="large" display="flex" width="300px" flexWrap="wrap" justifyContent="space-between">
        {
          sp.map((palette: ContinuousPaletteType, index: number) =>(
        <ContinuousPalette key={index} palette={palette} />
          ))
        }
      </Box>
      <Box p="large" display="flex" width="300px" flexWrap="wrap" justifyContent="space-between">
        {
          dp.map((palette: ContinuousPaletteType, index: number) =>(
        <ContinuousPalette key={index} palette={palette} />
          ))
        }
      </Box>
    </div>
  )
}
