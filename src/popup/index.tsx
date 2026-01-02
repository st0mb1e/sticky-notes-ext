import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { App } from './components/app';
import { store } from './store';
import React from 'react';

const root = createRoot(
    document.getElementById('root')!
);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
