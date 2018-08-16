import * as React from 'react'
import { inject } from 'mobx-react'
import styled from '../theme/styled'
import { StyledComponentClass } from 'styled-components'

import { IStores } from '../stores'
import { ITheme } from '../interfaces/theme'

import { Spinner } from '../elements/Spinner'

interface IErrorOrSpinnerProps {
  children: React.ReactNode
  loading: boolean
}

interface IErrorOrSpinnerInjectedProps extends IErrorOrSpinnerProps {
  errorMsg: string
}

export class ErrorOrSpinnerClass extends React.PureComponent<IErrorOrSpinnerProps> {

  private get injected() {
    return this.props as IErrorOrSpinnerInjectedProps
  }

  public render() {
    const { children, loading } = this.props
    const { errorMsg } = this.injected
    const windowHeight = window.innerHeight
    const topMargin = windowHeight / 2 - 100 + 'px'
    if (errorMsg || loading) {
      return (
        <ErrorOrSpinnerContainer marginTop={topMargin}>
          { errorMsg ? errorMsg : loading ? <Spinner size="large" color="textDark"/> : null }
        </ErrorOrSpinnerContainer>
      )
    }
    return children
  }
}

interface IErrorOrSpinnerContainerProps {
  marginTop: string
}

export const ErrorOrSpinnerContainer: StyledComponentClass<IErrorOrSpinnerContainerProps, ITheme> =
  styled<IErrorOrSpinnerContainerProps, 'div'>('div')`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: ${({ marginTop }) => marginTop};
  text-align: center;
`

export const ErrorOrSpinner = inject((stores: IStores) => ({
  errorMsg: stores.errorStore.errorMsg,
}))(ErrorOrSpinnerClass)
