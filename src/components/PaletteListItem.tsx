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

import { PaletteEditorContainer } from '../containers/PaletteEditorContainer'

interface PaletteListItemProps {
  palette: ContinuousPaletteType | DiscretePaletteType
  index: number
}

interface PaletteListItemState {
  expanded: boolean
}

export class PaletteListItem extends React.Component<PaletteListItemProps, PaletteListItemState> {

  constructor (props: PaletteListItemProps) {
    super(props)

    this.state = {
      expanded: false
    }
  }

  public toggleExpanded = () => {
    this.setState({
      expanded: !this.state.expanded
    })
  }

  public render() {
    const { palette, index } = this.props
    const { expanded } = this.state
    const isContinuous = (palette as any).stops !== undefined

    return (
        <Draggable key={palette.id} draggableId={palette.id} index={index}>
        {
          (provided, snapshot) => (
            <li className="palette-list-item"
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}>

        <div className="item-content" onClick={this.toggleExpanded}>
          {
            isContinuous ? <ContinuousPalette palette={palette as ContinuousPaletteType} /> : <DiscretePalette palette={palette as DiscretePaletteType} />
          }
          <div className="label">
            {palette.label}
          </div>
        </div>
        {
          expanded && <PaletteEditorContainer palette={palette} />
        }



            </li>
        )
      }
        </Draggable>
    )
  }
}
