import { DiscretePaletteType } from '../models/types'

export const sampleDiscrete = (palette: DiscretePaletteType, numSamples: number = 12) => {
  if (numSamples <= 0) {
    return []
  }

  const samples = new Array(numSamples)
  for (let i = 0; i < numSamples; i++) {
    samples[i] = palette.colors[i % palette.colors.length]
  }
  return samples
}
