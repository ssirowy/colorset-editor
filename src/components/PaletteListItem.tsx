import * as React from 'react'

import './PaletteListItem.css'

import {
  ContinuousPaletteType,
  DiscretePaletteType,
} from '../models/types'

import {
  Draggable,
} from 'react-beautiful-dnd'

import { ContinuousPalette } from './ContinuousPalette'
import { DiscretePalette } from './DiscretePalette'

interface PaletteListItemProps {
  palette: ContinuousPaletteType | DiscretePaletteType
  selected: string
  index: number
  paletteClicked: any
}

export class PaletteListItem extends React.Component<PaletteListItemProps, {}> {

  public render() {
    const { palette, index, selected, paletteClicked } = this.props
    const isContinuous = (palette as any).stops !== undefined

    const selectedClass = (selected === palette.id) ? 'selected' : ''
    const classNames = `palette-list-item ${selectedClass}`

    const onClick = () => paletteClicked(palette.id)

    return (
      <Draggable key={palette.id} draggableId={palette.id} index={index}>
        {
          (provided, snapshot) => (
             <li className={classNames}
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}>

              <div className="item-content" onClick={onClick}>
                {
                  isContinuous ? <ContinuousPalette palette={palette as ContinuousPaletteType} /> : <DiscretePalette palette={palette as DiscretePaletteType} />
                }
                <div className="label">
                  {palette.label}
                </div>
              </div>
            </li>
          )
        }
      </Draggable>
    )
  }
}
