import * as React from 'react'

import {
  Flex,
  FlexItem,
  Text
} from 'looker-lens'

const makeBig = {
  height: '100%',
}

export const SelectACollection: React.SFC<{}> = () => (
    <Flex style={makeBig} justifyContent="center" alignItems="center">
    <FlexItem>
    <Text size="4">Select a collection to the left</Text>
    </FlexItem>
  </Flex>
)
