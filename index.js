import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstComponent } from './src/components/firstComponent';

const root = ReactDOM.createRoot(document.querySelector('#my_main_div'));

root.render(<FirstComponent />);
