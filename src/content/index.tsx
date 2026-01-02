import { createRoot } from 'react-dom/client';

import { App } from './components/app';
import React from 'react';

const container = document.createElement('div');

document.body.appendChild(
    container
);

const root = createRoot(
    container,
);

root.render(
    <App />
);
