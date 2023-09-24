

import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Donation from '../Pages/Donation/Donation';
import Statistics from '../Pages/Statistics/Statistics';
import AllCards from '../components/Cards/AllCards';
import Card from '../Pages/Card/Card';

const myCreatedRoute = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
  
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () =>fetch('/cards.json')
        },
        {
          path: "/donation",
          element: <Donation></Donation>
        },
        {
          path: "/statistics",
          element: <Statistics></Statistics>
        },

        {
            path: "/card/:id",
            element: <Card></Card>,
            loader: () =>fetch('/cards.json')
        }
        
  
      ]
    },
  ]);

export default myCreatedRoute;