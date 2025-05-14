import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstComponent } from './src/components/firstComponent';

const root = ReactDOM.createRoot(document.querySelector('#my_main_div'));
console.log(root);
root.render(<FirstComponent />);
