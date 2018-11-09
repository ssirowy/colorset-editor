import * as React from 'react'
import { ColorCollectionType } from '../models/types'

import {
  Card,
  CardContent,
  CardMedia,
  Heading,
} from 'looker-lens'


interface DashboardProps {
  collection: ColorCollectionType
}

export const Dashboard: React.SFC<DashboardProps> = ({ collection }) => {
  const cardStyle = {
    width: '300px',
    marginRight: '16px',
    marginBottom: '16px',
  }

  const divStyle = {
    display: 'flex',
    flexWrap: 'wrap',
  } as any

  const createCard = () => (
      <Card style={cardStyle}>
      <CardMedia image="https://media.licdn.com/dms/image/C4D03AQFjXbiPUWGDVw/profile-displayphoto-shrink_200_200/0?e=1545264000&v=beta&t=lLMeS4uSP3Bhc3NrwPDMRF82hb5Gjppr7aEbkyt5gMc" title="Bill 1" />
      <CardContent>
        <Heading>Dashboarding is my forte</Heading>
      </CardContent>
      </Card>
  )

  const numCards = Array(12).fill(0)

  return (
    <div style={divStyle}>
      {
        numCards.map(() => createCard())
      }
    </div>
  )
}
