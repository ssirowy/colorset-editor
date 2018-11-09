import * as React from 'react'
import { connect } from 'react-redux'
import { ApplicationState } from 'src/store';
import { setNumSeries } from 'src/store/actions';

import { InputText } from 'looker-lens/dist'

interface SeriesCountInputProps {
  numSeries: number
  onChange: any
}

const SeriesCountInputPresentation: React.SFC<SeriesCountInputProps> = ({ numSeries, onChange }) => {
  return (
    <InputText value={`${numSeries}`} onChange={onChange} />
  )
}

const mapStateToProps = (state: ApplicationState) => ({
  numSeries: state.numSeries
})

const mapDispatchToProps = (dispatch: any) => ({
  onChange: (event: any) => {
    const numSeries = Number(event.currentTarget.value)
    dispatch(setNumSeries(numSeries))
  }
})

export const SeriesCountInput = connect(mapStateToProps, mapDispatchToProps)(SeriesCountInputPresentation)
