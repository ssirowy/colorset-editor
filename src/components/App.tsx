import * as React from 'react';
import './App.css';

import copy from 'copy-to-clipboard'

import { ColorSetList } from './ColorSetList'
import { ContinuousPalette } from './ContinuousPalette'
import { DiscretePalette } from './DiscretePalette'

import {
  ColorCollectionType,
  ContinuousPaletteType,
  DiscretePaletteType
} from '../models/types'

// Lens components
import {
  Box,
  Button,
  Heading,
  theme,
  ThemeProvider,
} from 'looker-lens'

// Data for color collections.
// import FIXTURES from '../data/color_collections.json'

interface AppState {
  collections: ColorCollectionType[]
  current?: ColorCollectionType
  json: string
}

class App extends React.Component<{}, AppState> {

  constructor(props: any) {
    super(props)

    this.state = {
      collections: [],
      current: undefined,
      json: ''
    }
  }

  public collectionClicked = (current: ColorCollectionType) => {
    this.setState({ current })
  }

  public jsonChange = (event: any) => {
    this.setState({
      json: event.target.value
    })
  }

  public loadJSON = () => {
    const fixtures = JSON.parse(this.state.json)
    const collections = fixtures.colorCollections
    this.setState({
      collections,
      current: collections[0],
      json: ''
    })
  }

  public copyJSON = () => {
    const copiedVal = JSON.stringify( { colorCollections: this.state.collections })
    copy(copiedVal)
  }

  public render() {

    const dp = this.state.current ? this.state.current.categoricalPalettes : []
    const cp = this.state.current ?  this.state.current.sequentialPalettes : []
    const label = this.state.current ? this.state.current.label : ''

    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <header>
            <Heading>Colorset editor</Heading>
            <Button onClick={this.copyJSON}>Copy JSON</Button>
          </header>
          <main>
            <ColorSetList collections={this.state.collections} collectionClicked={this.collectionClicked}/>
            <section>
              <div>
                <Heading level="1">{label}</Heading>
                <Box p="large" display="flex" width="300px" flexWrap="wrap" justifyContent="space-between">
                  {
                    dp.map((palette: DiscretePaletteType, index: number) =>(
                      <DiscretePalette key={index} palette={palette} />
                    ))
                  }
                </Box>
                <Box p="large" display="flex" width="300px" flexWrap="wrap" justifyContent="space-between">
                  {
                    cp.map((palette: ContinuousPaletteType, index: number) =>(
                  <ContinuousPalette key={index} palette={palette} />
                    ))
                  }
                </Box>
                <textarea value={this.state.json} onChange={this.jsonChange} />
                <Button onClick={this.loadJSON}>Load collections</Button>
              </div>
            </section>
          </main>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
