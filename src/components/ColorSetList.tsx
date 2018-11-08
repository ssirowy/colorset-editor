import * as React from 'react'

import {
  Box,
  List,
  ListItem
} from 'looker-lens'

/* tslint:disable */

import { ColorCollectionType } from '../models/types'

// Todo list interface
interface ColorSetListProps {
  collections: ColorCollectionType[]
  collectionClicked: any
}

export const ColorSetList = (props: ColorSetListProps) => (
  <Box mt='medium'>
    <List>
      {
        props.collections.map((collection: ColorCollectionType, index: number) => (
          <ListItem key={index} onClick={() => {props.collectionClicked(collection)}}>
            {collection.label}
          </ListItem>
        ))
      }
    </List>
  </Box>
)
