import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { App } from './components/app';
import { rootSaga } from './store/sagas';
import { createStore } from '../shared/store';

const container = document.createElement('div');

document.body.appendChild(
    container
);

const store = createStore(rootSaga);
const root = createRoot(
    container,
);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
