import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import { ConvexHull } from './convex-hull';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <ConvexHull />
  </StrictMode>
);
