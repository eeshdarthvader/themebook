/**
 * --------------------------------------------------------------------------
 * button.js
 * --------------------------------------------------------------------------
 */
import React from 'react';
import PropTypes from 'prop-types';
import { PrimaryButton, SecondaryButton } from './styled-component';
import { withTheme } from '../../theme';

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */
export const BUTTON_TYPE = Object.freeze({
    PRIMARY: 'primary',
    SECONDARY: 'secondary'
});

export const ButtonComponent = ({ onClick, type, children, disabled, ...props }) => {
    switch (type) {
        case BUTTON_TYPE.PRIMARY:
            return (
                <PrimaryButton onClick={onClick} disabled={disabled} {...props}>
                    {children}
                </PrimaryButton>
            );
        case BUTTON_TYPE.SECONDARY:
            return (
                <SecondaryButton onClick={onClick} disabled={disabled} {...props}>
                    {children}
                </SecondaryButton>
            );
        default:
            return (
                <PrimaryButton onClick={onClick} disabled={disabled} {...props}>
                    {children}
                </PrimaryButton>
            );
    }
};

/**
 * ------------------------------------------------------------------------
 * Prop Types
 * ------------------------------------------------------------------------
 */
ButtonComponent.defaultProps = {
    type: BUTTON_TYPE.PRIMARY,
    disabled: false,
    variant: null
};

ButtonComponent.propTypes = {
    type: PropTypes.oneOf(Object.keys(BUTTON_TYPE)),
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    variant: PropTypes.string
};

export default withTheme(ButtonComponent);
