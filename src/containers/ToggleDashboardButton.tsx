import { Button } from 'looker-lens'
import { connect } from 'react-redux'
import { showDashboard } from '../store/actions'

import { ApplicationState } from '../store'

const mapDispatchToProps = (dispatch: any) => ({
  onClick: () => {
    dispatch(showDashboard(false))
  },
})

const mapStateToProps = (state: ApplicationState) => ({
  disabled: state.selectedCollection.length === 0
})
​
export const ToggleDashboardButton = connect(mapStateToProps , mapDispatchToProps)(Button)
