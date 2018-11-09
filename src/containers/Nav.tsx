import * as React from 'react'
import { connect } from 'react-redux'
import { ColorSetList } from '../components/ColorSetList'

import {
  Box,
  Button
} from 'looker-lens'

import { ApplicationState } from '../store'
import {
  addColorSet,
  selectColorSet
} from '../store/actions'

const mapStateToProps = ( state: ApplicationState ) => ({
  collections: state.collections,
  selected: state.selectedCollection
})
​
// Dispatch props
const mapDispatchToProps = (dispatch: any) => ({
  addClicked: () => {
    dispatch(addColorSet())
  },
  collectionClicked: (id: string) => {
    dispatch(selectColorSet(id))
  },
})

const InternalNav: React.SFC<any> = ({ addClicked, collections, selected, collectionClicked }) => (
  <Box mb="medium" display="flex" flexDirection="column" justifyContent="space-between">
    <ColorSetList collections={collections} selected={selected} collectionClicked={collectionClicked} />
    <Button variant='transparent' onClick={addClicked}>Add color set</Button>
  </Box>
)
​
// Navigation lists all of our collections
export const Nav = connect(
  mapStateToProps,
  mapDispatchToProps
)(InternalNav)
