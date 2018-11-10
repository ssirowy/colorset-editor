import * as React from 'react'
import { connect } from 'react-redux'

import { Dashboard } from '../components/Dashboard'
import { Editor } from '../components/Editor'
import { SelectACollection } from '../components/SelectACollection'

import { ApplicationState } from '../store'

import {
  removeColorSet,
} from '../store/actions'

import {
  ColorCollectionType
} from '../models/types'

interface SectionProps {
  collection: ColorCollectionType
  numSeries: number
  removeCollection: any
  showDashboard: boolean
}
​
const InternalSection: React.SFC<SectionProps> = ({ showDashboard, collection, numSeries, removeCollection }) => (
  <section>
    {
      !showDashboard && collection && <Editor collection={collection} removeCollection={removeCollection}/>
    }
    {
      !showDashboard && !collection && <SelectACollection />
    }
    {
      showDashboard && <Dashboard collection={collection} numSeries={numSeries} />
    }
  </section>
)

const mapDispatchToProps = (dispatch: any) => ({
  removeCollection: (id: string) => {
    dispatch(removeColorSet(id))
  }
})

const mapStateToProps = ( state: ApplicationState ) => ({
  showDashboard: state.showDashboard,
  collection: state.collections.find((collection: ColorCollectionType) => collection.id === state.selectedCollection),
  numSeries: state.numSeries
})

export const Section = connect(mapStateToProps, mapDispatchToProps)(InternalSection)
