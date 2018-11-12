import { connect } from 'react-redux'

import { PaletteEditor } from '../components/PaletteEditor'

import {
  removePalette,
  updatePaletteColors,
  updatePaletteTitle,
} from '../store/actions'

import { ApplicationState } from '../store'

// Dispatch props
const mapDispatchToProps = (dispatch: any) => ({
  removePalette: (id: string) => {
    dispatch(removePalette(id))
  },
  updateTitle: (id: string, title: string) => {
    dispatch(updatePaletteTitle(id, title))
  },
  updateColors: (id: string, colors: string[]) => {
    dispatch(updatePaletteColors(id, colors))
  }
})

const mapStateToProps = (state: ApplicationState, props: any) => ({
  palette: props.palette,
})
​
export const PaletteEditorContainer = connect(mapStateToProps , mapDispatchToProps)(PaletteEditor)
