import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {applyPolyfills, defineCustomElements} from 'h8k-components/loader';


const rootElement=document.getElementById('root');

const root=createRoot(rootElement);

root.render(<React.StrictMode>
<App  />
</React.StrictMode> );

registerServiceWorker();

applyPolyfills().then(() => {
    defineCustomElements(window);
})
