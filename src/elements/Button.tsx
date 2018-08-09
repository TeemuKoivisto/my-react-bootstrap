// import * as React from 'react'
import styled from '../theme/styled'

export const Button = styled.button`
  background-color: ${({ theme }) => theme.color.white };
  border: 1px solid ${({ theme }) => theme.color.secondary };
  border-radius: 5px;
  color: ${({ theme }) => theme.color.primary };
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.medium };
  padding: 20px 10px 20px 10px;
  text-decoration: none;
  &:hover {
    background-color: ${({ theme }) => theme.color.primary};
    box-shadow: 2px 2px #039be569;
    color: ${({ theme }) => theme.color.white };
  }
  transition: 0.1s all;
`
