import './App.css';
import PageRouter from './Routes/PageRouter';
import UserRouter from './Routes/UserRouter';
import AdminRouter from './Routes/AdminRouter'

function App() {

  return (
    <div className="App">
      {
        0==1?<PageRouter></PageRouter>:(
          1==1?<UserRouter></UserRouter>:<AdminRouter></AdminRouter>
        )
        //if user is not login yet, go to page router. If user then user router
        //if admin then admin router
      }
    </div>
  );
}

export default App;
