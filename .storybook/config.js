import {addDecorator, configure} from '@storybook/react';
import {checkA11y} from '@storybook/addon-a11y';

const req = require.context('../stories', true, /.stories.tsx$/);

function loadStories() {
    req.keys().forEach(req);
}

configure(loadStories, module);

addDecorator(checkA11y);
