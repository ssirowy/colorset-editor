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
  addPaletteClicked: any
  reorderPalettes: any
}

const headerInputStyle = {
  width: '600px',
  height: '32px',
  fontSize: '24px',
  marginBottom: '16px',
}

export const Editor: React.SFC<EditorProps> = ({ collection, removeCollection, collectionTitleChanged, addPaletteClicked, reorderPalettes }) => {

  const cp = collection.categoricalPalettes
  const sp = collection.sequentialPalettes
  const dp = collection.divergingPalettes
  const label = collection.label

  const onClick = () => removeCollection(collection.id)

  const paletteClicked = (name: string) => {
    addPaletteClicked(collection.id, name)
  }

  const initiateReorder = (name: string, start: number, end: number) => {
    reorderPalettes(collection.id, name, start, end)
  }

  const onTitleChange = (event: any) => collectionTitleChanged(collection.id, event.target.value)

  return (
    <Box display="flex" alignItems="center" flexDirection="column">
      <input style={headerInputStyle} value={label} onChange={onTitleChange}/>
      <PaletteList palettes={cp} addPaletteClicked={paletteClicked} reorderPalettes={initiateReorder} name="Categorical" />
      <PaletteList palettes={sp} addPaletteClicked={paletteClicked} reorderPalettes={initiateReorder} name="Sequential" />
      <PaletteList palettes={dp} addPaletteClicked={paletteClicked} reorderPalettes={initiateReorder} name="Diverging" />
      <Button variant='transparent' color='danger' onClick={onClick}>Remove color set</Button>
    </Box>
  )
}
