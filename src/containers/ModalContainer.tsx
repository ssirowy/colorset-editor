import { connect } from 'react-redux'

import { JSONModal } from '../components/JSONModal'

import { loadJSON, showLoadUx } from '../store/actions'

import { ApplicationState } from '../store'

const mapDispatchToProps = (dispatch: any) => ({
  loadJSON: (json: string) => {
    dispatch(loadJSON(json))
  },

  closeModal: () => {
    dispatch(showLoadUx(false))
  }
})

const mapStateToProps = ( state: ApplicationState ) => ({
  show: state.showLoadUx
})

export const ModalContainer = connect(mapStateToProps, mapDispatchToProps)(JSONModal)
