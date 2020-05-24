import styled from 'styled-components';

/**
 * ------------------------------------------------------------------------
 * Primary Styled Component
 * ------------------------------------------------------------------------
 */
export const PrimaryButton = styled.button`
    cursor: pointer;
    background: ${props => {
        if (props.variant === 'outlined') return 'none';
        return props.theme.colors.primary.main;
    }};
    font-size: ${props => {
        if (props.big) return '20px';
        return '16px';
    }};
    outline: none;
    border-radius: 4px;
    color: ${props => {
        if (props.variant === 'outlined') return props.theme.colors.primary.main;
        return props.theme.colors.common.white;
    }};
    border: ${props => `1px solid ${props.theme.colors.primary.main}`};
    padding: ${props => {
        if (props.big) return '0.6em 1.1em';
        return '0.4em 0.75em';
    }};
    opacity: ${props => (props.disabled ? 0.65 : 1)};
    transition: 0.5s all ease-out;
    &:hover {
        color: ${props => {
            if (props.variant === 'outlined') return props.theme.colors.primary.dark;
            return props.theme.colors.common.white;
        }};
        background-color: ${props =>
            props.disabled || props.variant === 'outlined'
                ? 'none'
                : props.theme.colors.primary.dark};
    }
`;

/**
 * ------------------------------------------------------------------------
 * Secondary Styled Component
 * ------------------------------------------------------------------------
 */
export const SecondaryButton = styled.button`
    cursor: pointer;
    background: ${props => {
        if (props.variant === 'outlined') return 'none';
        return props.theme.colors.secondary.main;
    }};
    font-size: ${props => {
        if (props.big) return '20px';
        return '16px';
    }};
    outline: none;
    border-radius: 4px;
    color: ${props => {
        if (props.variant === 'outlined') return props.theme.colors.secondary.main;
        return props.theme.colors.common.white;
    }};
    border: ${props => `1px solid ${props.theme.colors.secondary.main}`};
    padding: ${props => {
        if (props.big) return '0.5em 1em';
        return '0.4em 0.75em';
    }};
    opacity: ${props => (props.disabled ? 0.65 : 1)};
    transition: 0.5s all ease-out;
    &:hover {
        color: ${props => {
            if (props.variant === 'outlined') return props.theme.colors.secondary.dark;
            return props.theme.colors.common.white;
        }};
        background-color: ${props =>
            props.disabled || props.variant === 'outlined'
                ? 'none'
                : props.theme.colors.secondary.dark};
    }
`;
