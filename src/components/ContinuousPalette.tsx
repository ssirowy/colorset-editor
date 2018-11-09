import * as React from 'react';

import { ColorStop, ContinuousPaletteType } from '../models/types'

import { swatchSize } from './Swatch'

import { Box } from 'looker-lens'

export interface  ContinuousPaletteProps {
  palette: ContinuousPaletteType
}


const cssGradientForColors  = (colors: string[], direction: string, quantize = false, reverse = false) => {
  const colorsCopy = [...colors]
  let gradientColors: string[] = []

  if (quantize) {
    for (let i = 0; i < colors.length; i++) {
      gradientColors.push(`${colorsCopy[i]} ${i * (1 / colorsCopy.length) * 100}%`)
      gradientColors.push(`${colorsCopy[i]} ${(i + 1) * (1 / colorsCopy.length) * 100}%`)
    }
  } else {
    gradientColors = colorsCopy
  }

  if (reverse) {
    gradientColors.reverse()
  }

  const standard = `background:linear-gradient(to ${direction}, ${gradientColors.join(',')})`

  /* tslint:disable */

  // PhantomJS doesn't support the w3c gradients
  // So here's the stupid old legacy webkit syntax
  const stops = gradientColors.map((c, i) => {
    let [color, percent] = c.split(' ')
    if (!percent) {
      percent = `${i * (1 / (gradientColors.length - 1)) * 100}%`
    }
    return `color-stop(${percent}, ${color})`
  }).join(', ')
  let cssDir = ''
  if (direction === 'right') {
    cssDir = 'left top, right top'
  } else if (direction === 'left') {
    cssDir = 'right top, left top'
  } else if (direction === 'top') {
    cssDir = 'center bottom, center top'
  } else if (direction === 'bottom') {
    cssDir = 'center top, center bottom'
  }
  const legacy = `background:-webkit-gradient(linear, ${cssDir}, ${stops})`

  return `${legacy};${standard};`
}

export const ContinuousPalette: React.SFC<ContinuousPaletteProps> = ({ palette }) => {

  const numPerRow = 6
  const width = `${numPerRow*swatchSize}px`
  const height = `${swatchSize*2}px`

  const cssString = cssGradientForColors(palette.stops.map((stop: ColorStop) => stop.color), 'right')

  const gradientStyle = {
    background: cssString.split(';')[1].split(':')[1]
  }

  return (
      <Box style={gradientStyle} height={height} width={width} bg="red" />
  )
}
