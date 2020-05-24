import React from 'react';
import { ThemeConsumer } from './ThemeContext';

/**
 * HOC that uses ThemeConsumer.
 * @param WrappedComponent - Component that gets theme.
 */
const withTheme = WrappedComponent => props => {
    return <ThemeConsumer>{theme => <WrappedComponent theme={theme} {...props} />}</ThemeConsumer>;
};

export default withTheme;
