import Login from "./pages/login/login";
import Register from "./pages/register/register";
import { Navigate, Outlet } from "react-router-dom";
import{
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Leftbar from "./components/leftbar/leftbar";
import Rightbar from "./components/rightbar/rightbar";
import Home from "./pages/home/home";
import Userprofile from "./pages/userprofile/userprofile";


function App() {
  const currentuser=true;
  //Homepage
  const Layout=()=>{
    return(
      <div>
        <Navbar/>
        <div style={{display:"flex"}}>
          <Leftbar/>
          <div style={{flex:3}}>
          <Outlet/>
          </div>
          <Rightbar/>
        </div>
      </div>
    );
  };

  const ProtectedRoute=({children})=>{
    if(!currentuser){
      return <Navigate to="/login"/>;
    }
    return children; 
  };

  //Login and register page
  const router=createBrowserRouter([
    {
      path:"/",
      element:(
      <ProtectedRoute>
        <Layout/>
      </ProtectedRoute> 
      ),
      children:[
        {
          path:'/',
          element:<Home/>,
        },
        {
          path:'/profile/:id',
          element:<Userprofile/>,
        },
      ]
    },
    {
      path:"/login",
      element: <Login/>,
    },
    {
      path:"/register",
      element: <Register />,
    },
  ]);

  return (
    <div class="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
