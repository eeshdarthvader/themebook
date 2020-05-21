import React from 'react';
import styled from 'styled-components';

const SummaryCard = styled.summary`
    overflow: hidden;
    padding: 32px;
    margin: 48px auto 48px;
    font-size: 24px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
    border-radius: 5px;
    color: 'black';
`;

const Summary = ({ name }) => {
    return <SummaryCard>Hi, My name is {name}</SummaryCard>;
};

export default Summary;
