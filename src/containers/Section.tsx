import * as React from 'react'
import { connect } from 'react-redux'

import { Dashboard } from '../components/Dashboard'
import { Editor } from '../components/Editor'
import { SelectACollection } from '../components/SelectACollection'

import { Header } from '../components/Header'

import { ApplicationState } from '../store'

/* tslint:disable */

import {
  addCategoricalPalette,
  addDivergingPalette,
  addSequentialPalette,
  removeColorSet,
  reorderCategoricalPalettes,
  reorderDivergingsPalettes,
  reorderSequentialPalettes,
  selectPalette,
  updateColorSetTitle,
} from '../store/actions'

import {
  ColorCollectionType
} from '../models/types'

interface SectionProps {
  collection: ColorCollectionType
  selectedPalette: string
  numSeries: number
  removeCollection: any
  collectionTitleChanged: any
  showDashboard: boolean
  addPaletteClicked: any
  reorderPalettes: any
  paletteClicked: any
}

const InternalSection: React.SFC<SectionProps> = ({ showDashboard, collection, numSeries, ...collectionEditingProps }) => (
  <section>
    <Header showSeries={showDashboard}/>

    {
      !showDashboard && collection && <Editor collection={collection} {...collectionEditingProps}/>
    }
    {
      !showDashboard && !collection && <SelectACollection />
    }
    {
      showDashboard && <Dashboard collection={collection} numSeries={numSeries}/>
    }
  </section>
)

const mapDispatchToProps = (dispatch: any) => ({
  addPaletteClicked: (id: string,  name: string) => {

    const paletteType = name.toLowerCase()
    let fn
    switch(paletteType) {
      case 'diverging':
        fn = addDivergingPalette
        break
      case 'sequential':
        fn = addSequentialPalette
        break
      case 'categorical':
      default:
        fn = addCategoricalPalette
    }

    dispatch(fn(id))
  },

  reorderPalettes: (id: string,  name: string, start: number, end: number) => {

    const paletteType = name.toLowerCase()
    let fn
    switch(paletteType) {
      case 'diverging':
        fn = reorderDivergingsPalettes
        break
      case 'sequential':
        fn = reorderSequentialPalettes
        break
      case 'categorical':
      default:
        fn = reorderCategoricalPalettes
    }

    dispatch(fn(id, start, end))
  },

  collectionTitleChanged: (id: string, title: string) => {
    dispatch(updateColorSetTitle(id, title))
  },

  removeCollection: (id: string) => {
    dispatch(removeColorSet(id))
  },

  paletteClicked: (id: string) => {
    dispatch(selectPalette(id))
  }
})

const mapStateToProps = ( state: ApplicationState ) => ({
  collection: state.collections.find((collection: ColorCollectionType) => collection.id === state.selectedCollection),
  showDashboard: state.showDashboard,
  numSeries: state.numSeries,
  selectedPalette: state.selectedPalette,
})

export const Section = connect(mapStateToProps, mapDispatchToProps)(InternalSection)
