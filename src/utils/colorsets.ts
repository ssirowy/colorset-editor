import { v4 as uuid } from 'uuid'

import { ColorCollectionType } from '../models/types'

export const defaultColorSet = () => ({
  id: uuid(),
  label: 'New color set',
  categoricalPalettes: [ defaultCategoricalPalette() ],
  sequentialPalettes: [ defaultSequentialPalette() ],
  divergingPalettes: [ defaultDivergingPalette() ],
})

export const defaultCategoricalPalette = () => ({
  id: uuid(),
  label: 'Categorical',
  colors: ['#ff0000', '#ffffff', '#0000ff']
})

export const defaultSequentialPalette = () => ({
  id: uuid(),
  label: 'Sequential',
  stops: [
    {
      offset: 0,
      color: '#ffffff'
    },
    {
      offset: 100,
      color: '#ff0000'
    }
  ]
})

export const defaultDivergingPalette = () => ({
  id: uuid(),
  label: 'Diverging',
  stops: [
    {
      offset: 0,
      color: '#ff0000'
    },
    {
      offset: 50,
      color: '#ffffff'
    },
    {
      offset: 100,
      color: '#0000ff'
    }
  ]
})

export const paletteInCollection = (collection: ColorCollectionType,  paletteId: string) =>
  [...collection.categoricalPalettes, ...collection.sequentialPalettes, ...collection.divergingPalettes]
  .find((palette) => palette.id === paletteId)
