import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { App } from './components/app';
import { store } from './store';

const container = document.createElement('div');

document.body.appendChild(
    container
);

const root = createRoot(
    container,
);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
