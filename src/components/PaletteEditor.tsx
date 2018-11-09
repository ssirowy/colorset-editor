import * as React from 'react'

import './PaletteListItem.css'

import {
  Box,
  Button,
  InputText,
} from 'looker-lens';

import {
  ContinuousPaletteType,
  DiscretePaletteType,
} from '../models/types'

// import { ContinuousPalette } from './ContinuousPalette'
// import { DiscretePalette } from './DiscretePalette'

interface PaletteEditorProps {
  palette: ContinuousPaletteType | DiscretePaletteType
}

export class PaletteEditor extends React.Component<PaletteEditorProps, {}> {

  public render() {

    const { palette } = this.props
    const hexCodes = '123, 456, 789'
    return (
        <Box p="small" display="flex" flexDirection="column">
        <Box width="300px" mb="small">
          <InputText value={palette.label} />
        </Box>
        <Box width="300px" mb="small">
          <textarea value={hexCodes} />
        </Box>
        <Button variant='transparent' color='danger'>Remove palette</Button>
        </Box>
    )
  }
}
