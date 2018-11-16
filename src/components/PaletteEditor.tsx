import * as React from 'react'

import './PaletteListItem.css'

/* tslint:disable */

import {
  Box,
  Button,
  Card,
  CardContent,
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

import {
  DragDropContext,
  Draggable,
  Droppable,
} from 'react-beautiful-dnd'

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


const swatchSize = 35

const swatchStyle = {
  border: '1px solid #dedede',
  height: `${swatchSize}px`,
  width: `${swatchSize}px`,
}

const listStyle = {
  display: 'flex',
  paddingLeft: '0',
  listStyleType: 'none',
  width: '100%'
} as any

const colorsForPalette = (palette: ContinuousPaletteType | DiscretePaletteType) => {
  const isContinuous = (palette as any).stops !== undefined
  let colors
  if (isContinuous) {
    const cp: ContinuousPaletteType = palette as ContinuousPaletteType
    colors = cp.stops.map((stop: ColorStop) => stop.color)
  }
  else {
    const dp: DiscretePaletteType = palette as DiscretePaletteType
    colors = dp.colors
  }
  return colors
}

const reorderedList = (list: any[], start: number, end: number) => {
  const newList = [...list]
  const [ removed ] = newList.splice(start, 1)
  newList.splice(end, 0, removed)
  return newList
}

const headerInputStyle = {
  width: '600px',
  height: '32px',
  fontSize: '24px',
  marginBottom: '16px',
}

export class PaletteEditor extends React.Component<PaletteEditorProps, PalettEditorState> {

  constructor(props: PaletteEditorProps) {
    super(props)

    this.state = {
      hexCodes: colorsForPalette(props.palette).join(','),
      errorMessage: ''
    }
  }

  public componentWillReceiveProps = (nextProps: PaletteEditorProps) => {
    this.setState({
      hexCodes: colorsForPalette(nextProps.palette).join(','),
      errorMessage: ''
    })
  }

  public onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }

    const { palette } = this.props
    const colors = colorsForPalette(palette)
    this.props.updateColors(palette.id, reorderedList(colors, result.source.index, result.destination.index))
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
    const colors = colorsForPalette(palette)

    const hexCodeValidation = errorMessage ? {
      type: "error",
      message: errorMessage
    } as ValidationMessageProps : undefined

    return (
        <Box className="palette-editor">
        <input style={headerInputStyle} value={palette.label} onChange={this.titleChange}/>
      <Card>
        <CardContent>
          <Box p="small" display="flex" flexDirection="column">
            <Box display="flex" justifyContent="center">
              <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="scott-editor" direction="horizontal">
                  {(provided, snapshot) => (
                    <ul ref={provided.innerRef} style={...listStyle}>
                      {
                        colors.map((color: string, index: number) =>
                      <Draggable key={index} draggableId={color} index={index}>
                        {
                          (provided, snapshot) => (
                            <li
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}>
                              <div style={{...swatchStyle,  backgroundColor: color}} />
                            </li>
                          )
                        }
                      </Draggable>
                                  )
                      }

                      {provided.placeholder}
                    </ul>
                  )}
                </Droppable>
              </DragDropContext>

            </Box>

            <Box width="400px" mb="small">
              <FieldText label="Palette hex codes (separated by commas)" value={hexCodes} onChange={this.hexCodesChange} validationMessage={hexCodeValidation} />
            </Box>
            <Box display="flex" justifyContent="flex-end">
              <Button variant='transparent' color='danger' onClick={this.removePalette}>Remove palette</Button>
            </Box>
          </Box>
        </CardContent>
        </Card>
        </Box>
    )
  }
}
