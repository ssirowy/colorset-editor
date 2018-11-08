import * as React from 'react'
import { connect } from 'react-redux'

import {
  Box,
  Heading
} from 'looker-lens'

import { ApplicationState } from '../store'

import {
  ColorCollectionType,
  ContinuousPaletteType,
  DiscretePaletteType
} from '../models/types'

import { ContinuousPalette } from '../components/ContinuousPalette'
import { DiscretePalette } from '../components/DiscretePalette'

interface EditorProps {
  collection: ColorCollectionType
}

const InternalEditor = (props: EditorProps) => {

  const { collection } = props
  const cp = collection.categoricalPalettes
  const sp = collection.sequentialPalettes
  const dp = collection.sequentialPalettes
  const label = collection.label

  return (
      <section>
        <div>
          <Heading level="1">{label}</Heading>
          <Box p="large" display="flex" width="300px" flexWrap="wrap" justifyContent="space-between">
            {
              cp.map((palette: DiscretePaletteType, index: number) =>(
            <DiscretePalette key={index} palette={palette} />
              ))
            }
          </Box>
          <Box p="large" display="flex" width="300px" flexWrap="wrap" justifyContent="space-between">
            {
              sp.map((palette: ContinuousPaletteType, index: number) =>(
            <ContinuousPalette key={index} palette={palette} />
              ))
            }
          </Box>
          <Box p="large" display="flex" width="300px" flexWrap="wrap" justifyContent="space-between">
            {
              dp.map((palette: ContinuousPaletteType, index: number) =>(
              <ContinuousPalette key={index} palette={palette} />
              ))
            }
          </Box>
        </div>
    </section>
  )
}

const mapStateToProps = ( state: ApplicationState ) => ({
  collection: state.collections!.find((collection) => collection.id === state.selectedCollection!)!
})
​
export const Editor = connect(mapStateToProps)(InternalEditor)
