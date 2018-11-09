import { Button } from 'looker-lens'
import { connect } from 'react-redux'
import { showDashboard } from '../store/actions'

// Dispatch props
const mapDispatchToProps = (dispatch: any) => ({
  onClick: () => {
    dispatch(showDashboard(false))
  },
})
​
export const ToggleDashboardButton = connect(null,mapDispatchToProps)(Button)
