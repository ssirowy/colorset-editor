import * as React from 'react'

import {
  Box,
  Button,
  Card,
  CardContent,
  Heading,
  Text
} from 'looker-lens'

/* tslint:disable */

import {
  DragDropContext,
  Droppable,
} from 'react-beautiful-dnd'

import { PaletteListItem } from './PaletteListItem'

interface PaletteListProps {
  palettes: any[]
  name: string
  addPaletteClicked: any
  reorderPalettes: any
}

const listStyle = {
  listStyleType: 'none',
  marginTop: '0',
  marginBottom: '0',
  paddingLeft: '0',
}

export class PaletteList extends React.Component<PaletteListProps, {}> {

  public onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }

    this.props.reorderPalettes(this.props.name, result.source.index, result.destination.index)
  }

  public onClick = () => this.props.addPaletteClicked(this.props.name)

  public render() {

    const { palettes } = this.props

    return (
      <Box mt="small" mb="medium" width="600px">
        <Heading>{name}</Heading>
        <Card>
          <ul style={listStyle}>
            {
              <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="droppable">
                  {(provided, snapshot) => (
                    <ul style={listStyle} ref={provided.innerRef}>
                      {
                        palettes.map((palette, index) => (
                          <PaletteListItem key={index} palette={palette} index={index}/>
                        ))}
                      {provided.placeholder}
                    </ul>
                  )}
                </Droppable>
              </DragDropContext>
            }
            {
              !palettes.length && <CardContent><Text>No palettes defined</Text></CardContent>
            }
          </ul>
        </Card>
        <Box display="flex" justifyContent="flex-end">
          <Button variant="transparent" onClick={this.onClick}>Add palette</Button>
        </Box>
      </Box>
    )
  }
}
