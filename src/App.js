import './App.css';
import PageRouter from './Routes/PageRouter';
import UserRouter from './Routes/UserRouter';
import AdminRouter from './Routes/AdminRouter'
import { useCookies } from 'react-cookie';
function App() {
  const [cookies, setCookie, removeCookie] = useCookies();
  return (
    <div className="App" >
      {
        cookies.identity==="admin"?<AdminRouter></AdminRouter>:(
          cookies.identity==="student"?<UserRouter></UserRouter>:<PageRouter></PageRouter>
        )
        //if user is not login yet, go to page router. If user then user router
        //if admin then admin router
      }
    </div>
  );
}

export default App;
