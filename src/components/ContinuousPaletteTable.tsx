import { rgb } from 'd3-color'
import { ScaleLinear, scaleLinear } from 'd3-scale'
import * as React from 'react'
import { ContinuousPaletteType } from 'src/models/types'

import { Card } from 'looker-lens/dist'

interface ContinuousPaletteTableProps {
  palette: ContinuousPaletteType
}

interface Cell {
  style?: React.CSSProperties,
  value: number
}

export const ContinuousPaletteTable: React.SFC<ContinuousPaletteTableProps> = ({ palette }) => {
  const cardStyle: React.CSSProperties = {
    flexBasis: 0,
    flexGrow: 1,
    marginRight: '16px',
    marginBottom: '16px',
    padding: '25px'
  }

  const tableWidth = 10
  const tableMin = 0
  const tableMax = 500

  const randInterval = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)
  const scaleForData = (min: number, mid: number, max: number) => scaleLinear().domain([min, mid, max]).range([0, 50, 100])
  const colorForData = (value: number, dataScale: ScaleLinear<number, number>) => {
    const offsets = palette.stops.map((stop) => stop.offset)
    const s = scaleLinear<string>().domain(offsets).range(palette.stops.map((stop) => stop.color))
    return rgb(s(dataScale(value))).hex()
  }

  const data: Cell[][] = Array(tableWidth).fill(0).map(() => {
    return Array(tableWidth).fill(0).map(() => {
      return {
        value: randInterval(tableMin, tableMax)
      }
    })
  })

  const generatedMin: number = data.reduce((min: number, cells: Cell[]) => Math.min(...cells.map((c) => c.value)) < min ? Math.min(...cells.map((c) => c.value)) : min, data[0][0].value)
  const generatedMax: number = data.reduce((max: number, cells: Cell[]) => Math.max(...cells.map((c) => c.value)) > max ? Math.max(...cells.map((c) => c.value)) : max, data[0][0].value)
  const generatedMid = (generatedMin + generatedMax) / 2
  const scale = scaleForData(generatedMin, generatedMid, generatedMax)

  for (const row of data) {
    for (const column of row) {
      const color = colorForData(column.value, scale)
      column.style = {
        backgroundColor: color,
        outline: '1px solid #aaaaaa'
      }
    }
  }

  return (
    <Card style={cardStyle}>
      <table>
        <tbody>
          {
            data.map((row: Cell[], rowIndex: number) => (
              <tr key={rowIndex}>
                {
                  row.map((column: Cell, columnIndex: number) => (
                    <th key={columnIndex} style={column.style}>{column.value}</th>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </Card>
  )
}
