import * as React from 'react'
import { DiscretePaletteType } from 'src/models/types';
import { areaChart, columnChart, lineChart, pieChart } from 'src/utils/highcharts_config_generators'
import { HighchartsCard } from './HighchartsCard';

interface LineupProps {
  palette: DiscretePaletteType,
  numSeries: number
}

export const DiscretePaletteLineup: React.SFC<LineupProps> = ({ palette, numSeries }) => {
  const rowStyle = {
    display: 'flex',
    flexWrap: 'nowrap'
  } as any

  const area = areaChart(palette, numSeries)
  const column = columnChart(palette, numSeries)
  const line = lineChart(palette, numSeries)
  const pie = pieChart(palette, numSeries)

  return (
    <div style={rowStyle}>
      <HighchartsCard config={area} />
      <HighchartsCard config={column} />
      <HighchartsCard config={line} />
      <HighchartsCard config={pie} />
    </div>
  )
}
