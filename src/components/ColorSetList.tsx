import * as React from 'react'

import {
  DragDropContext,
  Droppable,
} from 'react-beautiful-dnd'

import {
  Box,
} from 'looker-lens'

import { ColorSetItem } from './ColorSetItem'

import { ColorCollectionType } from '../models/types'

// Todo list interface
interface ColorSetListProps {
  collections: ColorCollectionType[]
  selected: string
  collectionClicked: any
  reorderCollection: any
}

const listStyle = {
  paddingLeft: '0',
  marginTop: '0',
}


export class ColorSetList extends React.Component<ColorSetListProps, {}> {

  public onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }

    this.props.reorderCollection(result.source.index, result.destination.index)
  }

  public render() {

    const { collections } = this.props

    return (
        <Box>
          <DragDropContext onDragEnd={this.onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                  <ul style={listStyle} ref={provided.innerRef}>
                  {
                    collections.map((collection: ColorCollectionType, index:number) => (
                        <ColorSetItem collection={collection} {...this.props} key={index} index={index}/>
                    ))}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
        </Box>
    )
  }
}
