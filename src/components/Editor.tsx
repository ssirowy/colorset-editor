import * as React from 'react'

import {
  Box,
  Heading
} from 'looker-lens'

import {
  ColorCollectionType,
} from '../models/types'

// import { ContinuousPalette } from '../components/ContinuousPalette'
// import { DiscretePalette } from '../components/DiscretePalette'
import { PaletteList } from '../components/PaletteList'

interface EditorProps {
  collection: ColorCollectionType
}

export const Editor: React.SFC<EditorProps> = ({ collection }) => {

  const cp = collection.categoricalPalettes
  const sp = collection.sequentialPalettes
  const dp = collection.sequentialPalettes
  const label = collection.label

  return (
    <Box display="flex" alignItems="center" flexDirection="column">
      <Heading level="1">{label}</Heading>
      <PaletteList palettes={cp} name="Categorical" />
      <PaletteList palettes={sp} name="Sequential" />
      <PaletteList palettes={dp} name="Diverging" />
    </Box>
  )
}
