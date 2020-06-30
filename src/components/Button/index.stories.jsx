import React from 'react';
import Button, { ButtonComponent, BUTTON_TYPE } from './index';

export default {
    component: ButtonComponent,
    title: 'Button'
};

export const Primary = () => {
    return <Button type={BUTTON_TYPE.PRIMARY}>Primary</Button>;
};

export const Secondary = () => {
    return <Button type={BUTTON_TYPE.SECONDARY}>Secondary</Button>;
};

export const OutlinedPrimary = () => {
    return (
        <Button type={BUTTON_TYPE.PRIMARY} variant="outlined">
            Outlined Primary
        </Button>
    );
};

export const OutlinedSecondary = () => {
    return (
        <Button type={BUTTON_TYPE.SECONDARY} variant="outlined">
            Outlined Secondary
        </Button>
    );
};

export const Disabled = () => {
    return (
        <Button disabled type={BUTTON_TYPE.PRIMARY}>
            Disabled
        </Button>
    );
};

export const Big = () => {
    return (
        <Button big type={BUTTON_TYPE.PRIMARY}>
            Big Button
        </Button>
    );
};

Primary.story = {
    name: 'Primary'
};

Secondary.story = {
    name: 'Secondary'
};

OutlinedPrimary.story = {
    name: 'Outlined Primary'
};

OutlinedSecondary.story = {
    name: 'Outlined Secondary'
};

Disabled.story = {
    name: 'Disabled'
};

Big.story = {
    name: 'Big'
};
