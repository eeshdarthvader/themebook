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
        return props.theme.color.primary.blue;
    }};
    font-size: ${props => {
        if (props.big) return '20px';
        return '16px';
    }};
    outline: none;
    border-radius: 4px;
    color: ${props => {
        if (props.variant === 'outlined') return props.theme.color.primary.blue;
        return props.theme.color.primary.white;
    }};
    border: ${props => `1px solid ${props.theme.color.primary.blue}`};
    padding: ${props => {
        if (props.big) return '0.6em 1.1em';
        return '0.4em 0.75em';
    }};
    opacity: ${props => (props.disabled ? 0.65 : 1)};
    transition: 0.5s all ease-out;
    &:hover {
        color: ${props => {
            if (props.variant === 'outlined') return props.theme.color.primary.hoverblue;
            return props.theme.color.primary.white;
        }};
        background-color: ${props =>
            props.disabled || props.variant === 'outlined'
                ? 'none'
                : props.theme.color.primary.hoverblue};
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
        return props.theme.color.secondary.grey;
    }};
    font-size: ${props => {
        if (props.big) return '20px';
        return '16px';
    }};
    outline: none;
    border-radius: 4px;
    color: ${props => {
        if (props.variant === 'outlined') return props.theme.color.secondary.grey;
        return props.theme.color.primary.white;
    }};
    border: ${props => `1px solid ${props.theme.color.secondary.grey}`};
    padding: ${props => {
        if (props.big) return '0.5em 1em';
        return '0.4em 0.75em';
    }};
    opacity: ${props => (props.disabled ? 0.65 : 1)};
    transition: 0.5s all ease-out;
    &:hover {
        color: ${props => {
            if (props.variant === 'outlined') return props.theme.color.secondary.hovergrey;
            return props.theme.color.primary.white;
        }};
        background-color: ${props =>
            props.disabled || props.variant === 'outlined'
                ? 'none'
                : props.theme.color.secondary.hovergrey};
    }
`;
