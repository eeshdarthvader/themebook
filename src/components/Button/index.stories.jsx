import React from 'react';
import ButtonComponent, { BUTTON_TYPE } from './index';

export default {
    component: ButtonComponent,
    title: 'Button'
};

export const Primary = () => {
    return <ButtonComponent type={BUTTON_TYPE.PRIMARY}>Primary</ButtonComponent>;
};

export const Secondary = () => {
    return <ButtonComponent type={BUTTON_TYPE.SECONDARY}>Secondary</ButtonComponent>;
};

export const OutlinedPrimary = () => {
    return (
        <ButtonComponent type={BUTTON_TYPE.PRIMARY} variant="outlined">
            Outlined Primary
        </ButtonComponent>
    );
};

export const OutlinedSecondary = () => {
    return (
        <ButtonComponent type={BUTTON_TYPE.SECONDARY} variant="outlined">
            Outlined Secondary
        </ButtonComponent>
    );
};

export const Disabled = () => {
    return (
        <ButtonComponent disabled type={BUTTON_TYPE.PRIMARY}>
            Disabled
        </ButtonComponent>
    );
};

export const Big = () => {
    return (
        <ButtonComponent big type={BUTTON_TYPE.PRIMARY}>
            Big Button
        </ButtonComponent>
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
