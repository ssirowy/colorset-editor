import * as React from 'react'

import Modal from 'react-modal'

import {
  Box,
  Button,
  Heading,
} from 'looker-lens'

const customStyles = {
  content : {
    top : '50%',
    left : '50%',
    right : 'auto',
    bottom : 'auto',
    marginRight : '-50%',
    transform  : 'translate(-50%, -50%)'
  }
}

interface JSONModalProps {
  show: boolean
  loadJSON?: any
}

interface JSONModalState {
  json: string
}

export class JSONModal extends React.Component<JSONModalProps, JSONModalState> {
  constructor(props: JSONModalProps) {
    super(props)

    this.state = {
      json: ''
    }
  }

  public jsonChanged = (event: any) => {
    this.setState({
      json: String(event.target.value)
    })
  }

  public render() {
    return (
        <Modal
        isOpen={this.props.show}
          style={customStyles}
          contentLabel="Example Modal"
        >
        <Heading>Input some JSON in here</Heading>
        <textarea value={this.state.json} onChange={this.jsonChanged} />
        <Box>
        <Button>Load JSON</Button>
        </Box>
        </Modal>
    )
  }
}
