/** @type { import('@storybook/web-components-vite').Preview } */

import './main.js';
import './manager.js';
import * as test from "node:test";

const preview = {
    parameters: {
        controls: {
            expanded: true,
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        previewTabs: {
            'storybook/docs/panel': { hidden: true },
            canvas: { hidden: false }, // يخلي الـ Canvas موجود
        },

        options: {
            showPanel: false,
            panelPosition: 'right',
        },
    },
};


preview.parameters = {
    ...preview.parameters,
    actions: { disable: true },
    interactions: { disable: true },
    test: { disable: true },

};

export default preview;
