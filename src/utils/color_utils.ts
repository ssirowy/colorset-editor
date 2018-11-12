import { rgb } from 'd3-color'
import { ColorStop } from '../models/types'

export const isValidColor = (color: string): boolean => rgb(color).displayable()

export const linearSpace = (start: number, end: number, numStops: number): number[] => {
  if (numStops < 2) {
    return numStops === 1 ? [start] : []
  }

  const ret = Array(numStops)
  numStops--

  for (let i = numStops; i >= 0; i--) {
    ret[i] = (i * end + (numStops - i) * start) / numStops
  }

  return ret
}

export const stopsForColors  = (colors: string[]): ColorStop[] =>
  linearSpace(0, 100, colors.length)
  .map((percent, index) => ({
    color: colors[index],
    offset: percent
  }))
