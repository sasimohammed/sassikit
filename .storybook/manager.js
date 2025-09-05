import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';
import './manager.css';

const myTheme = create({
    base: 'dark',             // يبقى داكن كقاعدة
    brandTitle: 'Sassi Kit',
    brandUrl: 'https://yourwebsite.com',



});

addons.setConfig({
    theme: myTheme,
});
