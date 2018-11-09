import * as React from 'react'

import {
  Box,
  List,
} from 'looker-lens'

import { ColorSetItem } from './ColorSetItem'

import { ColorCollectionType } from '../models/types'

// Todo list interface
interface ColorSetListProps {
  collections: ColorCollectionType[]
  selected: string
  collectionClicked: any
}

export const ColorSetList: React.SFC<ColorSetListProps> = ({ collections, ...props }) => (
  <Box mt='medium'>
    <List>
      {
        collections.map((collection: ColorCollectionType, index: number) => (
            <ColorSetItem key={index} collection={collection} {...props} />
        ))
      }
    </List>
  </Box>
)
