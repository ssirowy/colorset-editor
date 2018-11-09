import * as React from 'react'

import {
  Box,
  Card,
  Heading,
  List,
} from 'looker-lens'

import { PaletteListItem } from './PaletteListItem'

// Todo list interface
interface PaletteListProps {
  palettes: any[]
  name: string
}

export const PaletteList: React.SFC<PaletteListProps> = ({ palettes, name }) => (
  <Box mt="small" mb="medium" width="600px">
    <Heading>{name}</Heading>
    <Card>
    <List>
    {
      palettes.map((palette, index) => <PaletteListItem key={index} palette={palette} />)
    }
      </List>
    </Card>
  </Box>
)
