import * as React from 'react'

import { Button } from '../elements/Button'

export class FrontPage extends React.Component<{}, {}> {

  public render() {
    return (
      <div>
        <header>
          <h1>Hi there</h1>
        </header>
        <p>
          This is my example React bootstrap.
        </p>
        <Button>Button yey</Button>
      </div>
    )
  }
}
