import React, { Component } from 'react'
import styled from 'styled-components'
import Nav from '../navigation'
import PropTypes from 'prop-types'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`


export class PageLayout extends Component {

	render() {
		return (
			<div>
			
				<Nav  />
			</div>
		)
	}
}

export default PageLayout
