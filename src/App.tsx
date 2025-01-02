import HomePage from "./pages/Home";
import Contact from "./pages/Contact"
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import Projects from "./pages/Projects";
import Footer from "./components/footer";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  
  {path: '/', element: <><HomePage /><Footer/></>, errorElement: <ErrorPage/>},
  { element: <><RootLayout /><Footer/></>,
    children: [
      {path: '/contact', element: <Contact/> , errorElement: <ErrorPage/>},
      {path: '/projects', element:<Projects/>, errorElement: <ErrorPage/>}
    ]
  }

])


const App = () => {


  return (
    
   <RouterProvider router={router}/>
  );
};

export default App;
