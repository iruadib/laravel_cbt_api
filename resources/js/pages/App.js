import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import Router from './Router';

const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);

root.render(
  <StrictMode>
    <Router />
  </StrictMode>
);