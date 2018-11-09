import * as React from 'react'

import './PaletteListItem.css'

import {
  Box
} from 'looker-lens';
import {
  ContinuousPaletteType,
  DiscretePaletteType,
} from '../models/types'

import { ContinuousPalette } from './ContinuousPalette'
import { DiscretePalette } from './DiscretePalette'

interface PaletteListItemProps {
  palette: ContinuousPaletteType | DiscretePaletteType
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

    const { palette } = this.props
    const { expanded } = this.state

    const isContinuous = (palette as any).stops !== undefined
    return (
        <li className="palette-list-item" onClick={this.toggleExpanded}>
        <div className="item-content">
        {
          isContinuous ? <ContinuousPalette palette={palette as ContinuousPaletteType} /> : <DiscretePalette palette={palette as DiscretePaletteType} />
        }
        <div className="label">
          {palette.label}
      </div>
        </div>
        {
          expanded && <Box>Expanded state</Box>
        }
        </li>
    )
  }
}
