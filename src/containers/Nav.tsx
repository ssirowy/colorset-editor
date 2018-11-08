import { connect } from 'react-redux'
import { ColorSetList } from '../components/ColorSetList'

import { ApplicationState } from '../store'
import { selectColorSet } from '../store/actions'

const mapStateToProps = ( state: ApplicationState ) => ({
  collections: state.collections,
})
​
// Dispatch props
const mapDispatchToProps = (dispatch: any) => ({
  collectionClicked: (id: string) => {
    dispatch(selectColorSet(id))
  },
})
​
// Navigation lists all of our collections
export const Nav = connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorSetList)
