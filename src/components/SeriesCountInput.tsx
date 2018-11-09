import * as React from 'react'
import { connect } from 'react-redux'
import { ApplicationState } from 'src/store';
import { setNumSeries } from 'src/store/actions';

import { InputText, Text } from 'looker-lens/dist'

interface SeriesCountInputProps {
  numSeries: number
  onChange: any
}

const SeriesCountInputPresentation: React.SFC<SeriesCountInputProps> = ({ numSeries, onChange }) => {
  const props = {
    max: 12,
    min: 1,
    type: 'number'
  }
  return (
    <div>
      <Text>Series Count</Text>
      <InputText {...props} value={`${numSeries}`} onChange={onChange} />
    </div>
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
