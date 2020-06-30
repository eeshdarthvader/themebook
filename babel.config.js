module.exports = api => {
    api.cache(true);
    return {
        presets: ['@babel/env', '@babel/preset-react'],
        plugins: ['transform-class-properties', '@babel/plugin-transform-runtime', 'react-docgen']
    };
};
