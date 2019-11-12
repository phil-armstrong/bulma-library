import {addDecorator, configure} from '@storybook/react';
import {checkA11y} from '@storybook/addon-a11y';
import {withKnobs} from '@storybook/addon-knobs';

const req = require.context('../stories', true, /.stories.tsx$/);

function loadStories() {
    req.keys().forEach(req);
}

configure(loadStories, module);

addDecorator(checkA11y);
addDecorator(withKnobs);
