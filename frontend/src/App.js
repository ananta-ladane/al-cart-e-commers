
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Detiles from './components/Pages/Detiles';
import Login from './components/auth/Login';
import Addtocard from './components/Pages/Addtocard';
import Buyproduct from './components/Pages/Buyproduct';
import Histry from './components/Pages/Histry';
import Orderdet from './components/Pages/Orderdet';


import Home from './components/Home';
import PortalPage from './components/PortalPage';
import AddCard from './components/Pages/AddCard';
import StoreSig from './components/auth/StoreSignup';
import StoreLogin from './components/auth/StoreLogin';
import StoreHome from './components/StoreHome';
import AddProduct from './components/storepages/AddProduct';
import FindEmail from './components/auth/FindEmail';
import ChangeUserpass from './components/auth/ChnageUserpass';
import PortalBody from './components/mainbody/PortalBody';
import Signup from './components/auth/Signup';
import Allorders from './components/Pages/Allorders.js';
import StoreHomebody from './components/mainbody/StoreHomebody'
import AllProduct from './components/storepages/AllProduct.js';
import Editprodata from './components/storepages/EditProdata.js';
import EditProdata from './components/storepages/EditProdata.js';
import UserProfile from './components/Pages/UserProfile.js';
import SellerProfile from './components/storepages/SellerProfile.js';






const router = createBrowserRouter([


  {
    path: "/",
    element: <Home />
  },

  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/login",
    element: <Login />
  },

  {
    path: "/datafind",
    element: <FindEmail />
  },

  {
    path: "/userpassword/:id",
    element: <ChangeUserpass />
  },
  {
    path: "/poratlpage",
    element: <PortalPage />,
    children: [

      {
        index: true,
        element: <PortalBody />
      },

      {
        path: "portpbody",
        element: <PortalBody />
      },

      {
        path: "userprofile",
        element: <UserProfile />
      },

      {
        path: "Detiles",
        element: <Detiles />
      }
    ]

  },

  {
    path: "/Addtocard/:id",
    element: <Addtocard />
  },
  {
    path: "/Buyproduct/:id",
    element: <Buyproduct />
  },
  {
    path: "/Histry",
    element: <Histry />
  },
  {
    path: "/Orderdet/:id",
    element: <Orderdet />
  },

  {
    path: "/addprocard",
    element: <AddCard />

  },

  {
    path: "/allorders",
    element: <Allorders />
  },

  {
    path: "/storehomepage",
    element: <StoreHome />,
    children: [


      {
        index: true,
        element: <StoreHomebody />
      },

      {
        path: "storehomebody",
        element: <StoreHomebody />
      },

      {
        path: "sellerprofile",
        element: <SellerProfile />
      },

      {
        path: "addproduct",
        element: <AddProduct />
      },

      {
        path: "allstoreproduct",
        element: <AllProduct />,

      },

      {
        path: "editprodata/:id",
        element: <EditProdata />
      }

    ]
  },



], {
  basename: '/al-cart-e-commers'
});

function App() {



  return (
    <div className="App" >

      <RouterProvider router={router} />

    </div >
  );
}

export default App;
