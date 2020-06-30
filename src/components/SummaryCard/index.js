import React, { forwardRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withTheme } from '../../theme';

const TEXT_POSITION = Object.freeze({
    CENTER: 'center',
    LEFT: 'left',
    RIGHT: 'right'
});

const SummaryCard = styled.summary`
    overflow: hidden;
    padding: 32px;
    margin: 48px auto 48px;
    font-size: 24px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
    border-radius: 5px;
    color: ${props => {
        return props.theme.colors.text.primary;
    }};
    text-align: ${props => props.textPosition};
`;

export const Card = forwardRef(({ text, theme, textPosition, className }, ref) => {
    return (
        <SummaryCard theme={theme} textPosition={textPosition} className={className} ref={ref}>
            {text}
        </SummaryCard>
    );
});

Card.defaultProps = {
    text: '',
    textPosition: TEXT_POSITION.CENTER
};

Card.propTypes = {
    /**
        Text for the Card.
    */
    text: PropTypes.string,
    /**
        Text position.
    */
    textPosition: PropTypes.string
};

export default withTheme(Card);
