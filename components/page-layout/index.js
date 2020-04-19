import React, { Component } from 'react';
import styled from 'styled-components';
import Nav from '../navigation';
import PropTypes from 'prop-types';

const GlobalContainer = styled.div`
    width: 1100px;
    margin-left: auto;
    margin-right: auto;
`;

export class PageLayout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { children } = this.props;

        return (
            <GlobalContainer>
                <Nav />
                {children}
            </GlobalContainer>
        );
    }
}

export default PageLayout;
