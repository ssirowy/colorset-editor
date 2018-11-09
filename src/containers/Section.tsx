import * as React from 'react'
import { connect } from 'react-redux'
import { Dashboard } from '../components/Dashboard'
import { Editor } from '../components/Editor'
import { ApplicationState } from '../store'

import {
  ColorCollectionType
} from '../models/types'

interface SectionProps {
  showDashboard: boolean
  collection: ColorCollectionType
  numSeries: number
}
​
const InternalSection: React.SFC<SectionProps> = ({ showDashboard, collection, numSeries }) => (
  <section>
    {
      !showDashboard && <Editor collection={collection} />
    }
    {
      showDashboard && <Dashboard collection={collection} numSeries={numSeries} />
    }
  </section>
)

const mapStateToProps = ( state: ApplicationState ) => ({
  showDashboard: state.showDashboard,
  collection: state.collections.find((collection: ColorCollectionType) => collection.id === state.selectedCollection),
  numSeries: state.numSeries
})

export const Section = connect(mapStateToProps)(InternalSection)
