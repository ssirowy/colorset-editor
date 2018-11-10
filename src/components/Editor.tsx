import * as React from 'react'

import {
  Box,
  Button,
} from 'looker-lens'

import {
  ColorCollectionType,
} from '../models/types'

import { PaletteList } from '../components/PaletteList'

interface EditorProps {
  collection: ColorCollectionType
  removeCollection: any
  collectionTitleChanged: any
}

export const Editor: React.SFC<EditorProps> = ({ collection, removeCollection, collectionTitleChanged }) => {

  const cp = collection.categoricalPalettes
  const sp = collection.sequentialPalettes
  const dp = collection.sequentialPalettes
  const label = collection.label

  const onClick = () => removeCollection(collection.id)

  const headerInputStyle = {
    width: '600px',
    height: '32px',
    fontSize: '24px',
    marginBottom: '16px',
  }

  const onTitleChange = (event: any) => collectionTitleChanged(collection.id, event.target.value)

  return (
    <Box display="flex" alignItems="center" flexDirection="column">
      <input style={headerInputStyle} value={label} onChange={onTitleChange}/>
      <PaletteList palettes={cp} name="Categorical" />
      <PaletteList palettes={sp} name="Sequential" />
      <PaletteList palettes={dp} name="Diverging" />
      <Button variant='transparent' color='danger' onClick={onClick}>Remove color set</Button>
    </Box>
  )
}
