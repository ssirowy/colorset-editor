import * as React from 'react';

import { DiscretePaletteType } from '../models/types'

import { Swatch, swatchSize } from './Swatch'

import { Box } from 'looker-lens'

import { sampleDiscrete } from '../utils/palette_sampling'

export interface  DiscretePaletteProps{
  palette: DiscretePaletteType
}

export const DiscretePalette = (props: DiscretePaletteProps ) => {

  const numPerRow = 6
  const width = `${numPerRow*swatchSize}px`
  const colors = sampleDiscrete(props.palette, numPerRow * 2)

  return (
      <Box display="flex" flexWrap="wrap" width={width}>
      {
        colors.map((color, index) => <Swatch key={index} color={color} />)
      }
    </Box>
  )
}
