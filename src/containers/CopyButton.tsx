import * as React from 'react'

import {
  Box,
  Button,
  Text
} from 'looker-lens'

import { connect } from 'react-redux'
import { saveJSON } from '../store/actions'

import { ApplicationState } from '../store'

import { ColorCollectionType } from '../models/types'

import copy from 'copy-to-clipboard'

const mapDispatchToProps = (dispatch: any) => ({
  copyCollections: (collections: ColorCollectionType[]) => {

    copy(JSON.stringify({ colorCollections: collections }))
    dispatch(saveJSON())

  },
})

const mapStateToProps = (state: ApplicationState) => ({
  collections: state.collections,
  showMessage: state.copiedToClipboard
})

interface CopyButtonContainerProps {
  collections: ColorCollectionType[]
  showMessage: boolean
  copyCollections: any
}

const CopyButtonContainer: React.SFC<CopyButtonContainerProps> = ({ collections, copyCollections, showMessage }) => {

  const onClick = () => copyCollections(collections)

  return (
      <Box>
        { showMessage && <Text size="5">Copied to clipboard</Text> }
        <Button onClick={onClick}>Save</Button>
      </Box>
  )
}

export const CopyButton = connect(mapStateToProps , mapDispatchToProps)(CopyButtonContainer)
