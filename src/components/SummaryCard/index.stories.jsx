import React from 'react';
import styled from 'styled-components';
import SummaryCard, { Card } from './index';

export default {
    component: Card,
    title: 'Summary Card'
};

const CustomStyledSummaryCard = styled(SummaryCard)`
    background-color: red;
    color: white;
`;

export const Basic = () => {
    return <SummaryCard text="Hi, i am Frontend dev" />;
};

export const Extended = () => {
    return <CustomStyledSummaryCard text="Hi, i am Frontend dev in red" />;
};

Basic.story = {
    name: 'Basic'
};

Extended.story = {
    name: 'Extended Style'
};
