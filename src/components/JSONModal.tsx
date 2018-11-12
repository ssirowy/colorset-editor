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
    transform  : 'translate(-50%, -50%)',
    width: '800px'
  }
}

const textAreaStyle = {
  fontFamily: 'Courier',
  fontSize: '14px',
  height: '600px',
  width: '100%',
}

interface JSONModalProps {
  show: boolean
  loadJSON: any
  closeModal: any
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

  public loadJSONClicked = (event: any) => {
    this.props.loadJSON(this.state.json)
  }

  public render() {

    return (
        <Modal isOpen={this.props.show} style={customStyles} contentLabel="Example Modal">
          <Heading size='3'>Input some JSON in here (from color_collections.json)</Heading>
          <textarea style= {textAreaStyle} value={this.state.json} onChange={this.jsonChanged} />
          <Box mt="medium" display="flex" justifyContent="space-between">
            <Button variant='transparent' onClick={this.props.closeModal}>Cancel</Button>
            <Button onClick={this.loadJSONClicked}>Load JSON</Button>
          </Box>
        </Modal>
    )
  }
}
