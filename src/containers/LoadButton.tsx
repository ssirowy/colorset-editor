import * as React from 'react'

import {
  Box,
  Button,
} from 'looker-lens'

import { connect } from 'react-redux'
import { showLoadUx } from '../store/actions'

const mapDispatchToProps = (dispatch: any) => ({
  onClick: () => {
    dispatch(showLoadUx(true))
  }
})

interface LoadButtonContainerProps {
  onClick: any
}

const LoadButtonContainer: React.SFC<LoadButtonContainerProps> = ({ onClick }) => {

  return (
      <Box ml="small">
        <Button variant="transparent" onClick={onClick}>Load...</Button>
      </Box>
  )
}

export const LoadButton = connect(null , mapDispatchToProps)(LoadButtonContainer)
