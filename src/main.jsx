import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import NewPost from './routes/NewPost';
import PostDetails, { loader as postDetailsLoader } from './routes/PostDetails';
import Posts from './routes/Posts'
import RootLayout from './routes/RootLayout';
import './index.css';
import ChatProvider from './store/provider';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ChatProvider><RootLayout /></ChatProvider>,
    children: [
      {
        path: '/',
        element: <Posts />,
        children: [
          { path: '/create-post', element: <NewPost />},
          { path: '/:postId', element: <PostDetails />, loader: postDetailsLoader }
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
