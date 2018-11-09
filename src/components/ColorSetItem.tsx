import * as React from 'react'

import './ColorSetItem.css'

import { ColorCollectionType } from '../models/types'

// Todo list interface
interface ColorSetItemProps {
  collection: ColorCollectionType
  collectionClicked: any
  selected: string
}

export const ColorSetItem: React.SFC<ColorSetItemProps> = ({ collection, selected, collectionClicked }) => {

  const onClick = () => collectionClicked(collection.id)
  const selectedClass = collection.id === selected ? 'selected' : ''
  const listClass = `ColorSetItem ${selectedClass}`

  return (
    <li className={listClass} onClick={onClick}>
      <div className='label'>{collection.label}</div>
    </li>
  )
}
