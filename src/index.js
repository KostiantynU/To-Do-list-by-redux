import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { TasksProvider } from 'components/myContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="to-do-list-by-redux">
      <TasksProvider>
        <App />
      </TasksProvider>
    </BrowserRouter>
  </React.StrictMode>
);
