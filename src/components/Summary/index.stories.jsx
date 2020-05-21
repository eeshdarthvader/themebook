import React from 'react';
import Summary from './index';

export default {
    component: Summary,
    title: 'Summary'
};

export const simple = () => {
    return <Summary />;
};

simple.story = {
    name: 'default'
};
