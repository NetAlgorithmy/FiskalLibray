import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import Books from './get';
import './index.css';
const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);
root.render(<App tab="home" />);






// Create a root.

// Initial render: Render an element to the root.

