import * as React from 'react'
import * as ReactHighcharts from 'react-highcharts'

import { Card } from 'looker-lens/dist'

interface HighchartsCardProps {
  config: any
}

export const HighchartsCard: React.SFC<HighchartsCardProps> = ({ config }) => {
  const cardStyle: React.CSSProperties = {
    flexBasis: 0,
    flexGrow: 1,
    marginRight: '16px',
    marginBottom: '16px'
  }

  return (
    <Card style={cardStyle}>
      <ReactHighcharts config={config} />
    </Card>
  )
}
