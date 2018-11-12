import * as React from 'react'

import './PaletteListItem.css'

import {
  Box,
  Button,
  FieldText,
  ValidationMessageProps
} from 'looker-lens';

import {
  isValidColor
} from '../utils/color_utils'

import {
  ColorStop,
  ContinuousPaletteType,
  DiscretePaletteType,
} from '../models/types'

interface PaletteEditorProps {
  palette: ContinuousPaletteType | DiscretePaletteType
  updateTitle: any
  updateColors: any
  removePalette: any
}

interface PalettEditorState {
  errorMessage: string
  hexCodes: string
}

// Utility to return a list of potential colors from a csv string. Returns an array
// of non-zero length strings.
const csvToColors = (str: string) =>
  str
  .split(',')
  .map((s) => s.trim())
  .filter((c) => c.length > 0)


export class PaletteEditor extends React.Component<PaletteEditorProps, PalettEditorState> {

  constructor(props: PaletteEditorProps) {
    super(props)

    const isContinuous = (props.palette as any).stops !== undefined

    let colors
    if (isContinuous) {
      const palette: ContinuousPaletteType = props.palette as ContinuousPaletteType
      colors = palette.stops.map((stop: ColorStop) => stop.color)
    }
    else {
      const palette: DiscretePaletteType = props.palette as DiscretePaletteType
      colors = palette.colors
    }

    this.state = {
      hexCodes: colors.join(','),
      errorMessage: ''
    }
  }

  public hexCodesChange = (event: any) => {

    const hexCodes = String(event.target.value)
    let errorMessage = ''

    const minColors = 1
    const colors = csvToColors(hexCodes.length ? hexCodes : '')

    // Error checking
    if (colors.length < minColors) {
      const colorStr = minColors > 1 ? 'colors' : 'color'
      errorMessage = `Specify at least ${minColors} ${colorStr}`
    }
    else if (colors.some((c) => !isValidColor(c))) {
      // Targeted messsaging for when there is only one invalid color
      const invalidColors = colors.filter((c) => isValidColor(c))

      if (invalidColors.length > 1) {
        errorMessage = `Some colors aren't valid`
      }
      else {
        errorMessage = `'${invalidColors[0]}' is not a valid color`
      }
    }

    this.setState({
      hexCodes,
      errorMessage
    })

    if (errorMessage.length === 0) {
      this.props.updateColors(this.props.palette.id, colors)
    }
  }

  public titleChange = (event: any) => {
    this.props.updateTitle(this.props.palette.id, event.target.value)
  }

  public removePalette = (event: any) => {
    this.props.removePalette(this.props.palette.id)
  }

  public render() {

    const { palette } = this.props
    const { hexCodes, errorMessage } = this.state

    const hexCodeValidation = errorMessage ? {
      type: "error",
      message: errorMessage
    } as ValidationMessageProps : undefined

    return (
        <Box p="small" display="flex" flexDirection="column">
        <Box width="300px" mb="small">
          <FieldText label="Palette name" value={palette.label} onChange={this.titleChange}/>
        </Box>
        <Box width="300px" mb="small">
        <FieldText label="Palette hex codes (separated by commas)" value={hexCodes} onChange={this.hexCodesChange} validationMessage={hexCodeValidation} />
        </Box>
        <Button variant='transparent' color='danger' onClick={this.removePalette}>Remove palette</Button>
        </Box>
    )
  }
}
