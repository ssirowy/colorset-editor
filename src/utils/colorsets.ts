import { v4 as uuid } from 'uuid'

export const defaultColorSet = () => ({
  id: uuid(),
  label: 'New color set',
  categoricalPalettes: [],
  sequentialPalettes: [],
  divergingPalettes: [],
})
