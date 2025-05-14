import React from 'react';
import { createRoot } from 'react-dom/client';
import { FirstComponent } from './src/components/firstComponent';

const domNode = document.getElementById('my_main_div');
const root = createRoot(domNode);

root.render(<FirstComponent />);
