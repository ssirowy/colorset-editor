import * as React from 'react'

import {
  Box,
  Button,
  Card,
  CardContent,
  Heading,
  List,
  Text
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
    {
      !palettes.length && <CardContent><Text>No palettes defined</Text></CardContent>
    }
      </List>
    </Card>
    <Box display="flex" justifyContent="flex-end">
    <Button variant="transparent">Add palette</Button>
    </Box>
  </Box>
  )
