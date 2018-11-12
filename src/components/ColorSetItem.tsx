import * as React from 'react'

import './ColorSetItem.css'

import { ColorCollectionType } from '../models/types'

import {
  Draggable,
} from 'react-beautiful-dnd'

// Todo list interface
interface ColorSetItemProps {
  collection: ColorCollectionType
  collectionClicked: any
  selected: string
  index: number
}

export const ColorSetItem: React.SFC<ColorSetItemProps> = ({ collection, selected, collectionClicked, index }) => {

  const onClick = () => collectionClicked(collection.id)
  const selectedClass = collection.id === selected ? 'selected' : ''
  const listClass = `ColorSetItem ${selectedClass}`

  return (
    <Draggable key={collection.id} draggableId={collection.id} index={index}>
      {
        (provided, snapshot) => (
            <li className={listClass}
                onClick={onClick}
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}>
              <div className='label'>{collection.label}</div>
            </li>
        )
      }
    </Draggable>
  )
}
