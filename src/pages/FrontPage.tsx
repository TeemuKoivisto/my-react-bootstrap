import * as React from 'react'
import { inject } from 'mobx-react'
import styled from '../theme/styled'

import { IStores } from '../stores'

// import { Button } from '../elements/Button'

// interface IFrontPageInjectedProps {
// }

interface IFrontPageState {
}

class FrontPageClass extends React.Component<{}, IFrontPageState> {
  public render() {
    return (
      <FrontPageContainer>
        <header>
          <h1>Hi there</h1>
        </header>
        <p>
          This is my example React bootstrap.
        </p>
      </FrontPageContainer>
    )
  }
}

const FrontPageContainer = styled.div`
`

export const FrontPage = inject((stores: IStores) => ({
}))(FrontPageClass)
