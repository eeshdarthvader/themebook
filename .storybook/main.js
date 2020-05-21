module.exports = {
    stories: ['../src/**/*.stories.[tj]sx'],
    addons: [
        '@storybook/addon-knobs/register',
        '@storybook/addon-actions/register',
        '@storybook/addon-links/register',
        '@storybook/addon-viewport/register',
        '@storybook/addon-a11y/register',
        '@storybook/addon-backgrounds/register'
    ],
    webpackFinal: config => {
        // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
        // You can change the configuration based on that.
        // 'PRODUCTION' is used when building the static version of storybook.

        config.module.rules = config.module.rules.map(rule => {
            if (rule.test.toString().includes('svg')) {
                const test = rule.test.toString().replace('svg|', '').replace(/\//g, '');
                return { ...rule, test: new RegExp(test) };
            } else {
                return rule;
            }
        });
        config.resolve.extensions.push('.ts', '.tsx');
        // Make whatever fine-grained changes you need
        config.module.rules.push(
            {
                test: /\.svg$/,
                use: ['@svgr/webpack']
            },
            {
                test: /\.(ts|tsx)$/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            }
        );

        // Return the altered config
        return config;
    }
};
