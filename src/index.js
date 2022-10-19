import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import 'font-awesome/css/font-awesome.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ViewTodos from './components/shared/viewTodos';
import App from './App';
import AddToDo from './components/shared/addTodo';

const root = ReactDOM.createRoot(document.getElementById('root'));

const routes = createBrowserRouter([
  {
    path: ''
  },
  {
    path: '/app',
    element: <App />,
    children: [
      {
        path: '',
        element: <ViewTodos />
      },
      {
        path: 'add/',
        element: <AddToDo />
      }
    ]
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
