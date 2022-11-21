import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import ErrorRoute from './components/ErrorRoute/ErrorRoute';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';
import Topics from './components/Topics/Topics';
import Main from './layouts/Main';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/topics',
          element: <Topics></Topics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]

    },
    {
      path: '/quiz/:quizId',
      loader: async ({ params }) => {
        return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
      },
      element: <Quiz></Quiz>
    },
    {
      path: '*',
      element: <ErrorRoute></ErrorRoute>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
