import { connect } from 'react-redux'

import { JSONModal } from '../components/JSONModal'

import { loadJSON } from '../store/actions'

import { ApplicationState } from '../store'

const mapDispatchToProps = (dispatch: any) => ({
  loadJSON: (json: string) => {
    dispatch(loadJSON(json))
  }
})

const mapStateToProps = ( state: ApplicationState ) => ({
  show: state.showLoadUx
})

export const ModalContainer = connect(mapStateToProps, mapDispatchToProps)(JSONModal)
