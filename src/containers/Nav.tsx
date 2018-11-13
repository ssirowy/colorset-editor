import * as React from 'react'
import { connect } from 'react-redux'
import { ColorSetList } from '../components/ColorSetList'

import {
  Box,
  Button,
} from 'looker-lens'

import { ApplicationState } from '../store'
import {
  addColorSet,
  reorderColorSet,
  selectColorSet,
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
  reorderCollection: (start: number, end: number) => {
    dispatch(reorderColorSet(start, end))
  }
})

const navStyle = {
  backgroundColor: '#E8E5FF',
  borderRight: '2px solid #e4e5e6',
}

const InternalNav: React.SFC<any> = ({ addClicked, ...listProps }) => (
  <Box style={navStyle} display="flex" flexDirection="column" justifyContent="space-between">
    <Box>
      <Box display="flex" justifyContent="center">
        <h3>Looker color sets</h3>
      </Box>
      <ColorSetList {...listProps}/>
    </Box>
    <Box mb="small" display="flex" justifyContent="center">
      <Button variant='transparent' onClick={addClicked}>Add color set</Button>
    </Box>
  </Box>
)
​
// Navigation lists all of our collections
export const Nav = connect(
  mapStateToProps,
  mapDispatchToProps
)(InternalNav)
