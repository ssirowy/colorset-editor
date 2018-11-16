import * as React from 'react'

import {
  Box,
  Button,
  Heading,
  Text
} from 'looker-lens'

import {
  ColorCollectionType,
} from '../models/types'

import { PaletteList } from '../components/PaletteList'

import { PaletteEditorContainer } from '../containers/PaletteEditorContainer'

import { paletteInCollection } from '../utils/colorsets'

interface EditorProps {
  collection: ColorCollectionType
  removeCollection: any
  collectionTitleChanged: any
  addPaletteClicked: any
  reorderPalettes: any
  selectedPalette: string
  paletteClicked: any
}

const headerInputStyle = {
  width: '600px',
  height: '32px',
  fontSize: '24px',
  marginBottom: '16px',
}

export const Editor: React.SFC<EditorProps> = ({ collection, removeCollection, collectionTitleChanged, addPaletteClicked, reorderPalettes, selectedPalette, paletteClicked }) => {

  const cp = collection.categoricalPalettes
  const sp = collection.sequentialPalettes
  const dp = collection.divergingPalettes
  const label = collection.label

  const onClick = () => removeCollection(collection.id)

  const addClicked = (name: string) => {
    addPaletteClicked(collection.id, name)
  }

  const initiateReorder = (name: string, start: number, end: number) => {
    reorderPalettes(collection.id, name, start, end)
  }

  const onTitleChange = (event: any) => collectionTitleChanged(collection.id, event.target.value)

  const currentPalette = paletteInCollection(collection, selectedPalette)

  return (
    <Box display="flex" justifyContent="space-around">
      <Box display="flex" flexDirection="column">
      <Heading level="1">Selected color set</Heading>
      <input style={headerInputStyle} value={label} onChange={onTitleChange}/>
      <PaletteList palettes={cp} addPaletteClicked={addClicked} reorderPalettes={initiateReorder} selected={selectedPalette} paletteClicked={paletteClicked} name="Categorical" />
      <PaletteList palettes={sp} addPaletteClicked={addClicked} reorderPalettes={initiateReorder} selected={selectedPalette} paletteClicked={paletteClicked} name="Sequential" />
      <PaletteList palettes={dp} addPaletteClicked={addClicked} reorderPalettes={initiateReorder} selected={selectedPalette} paletteClicked={paletteClicked} name="Diverging" />
      <Button variant='transparent' color='danger' onClick={onClick}>Remove color set</Button>
    </Box>
    {
      currentPalette && <Box>
        <Heading level="1">Selected palette</Heading>
        <PaletteEditorContainer palette={currentPalette} />
        </Box>
    }
    {
      !currentPalette && <Box display="flex" justifyContent="center" alignItems="center">
        <Text>Select a palette</Text>
        </Box>
    }
    </Box>
  )
}
