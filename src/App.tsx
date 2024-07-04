import { useEffect } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import users from "../src/assets/user.json";
import "./App.css";
import { LOCAL_USER } from "./constant/EndpointConstant";
import { useAuthContext } from "./context/AuthContext";
import { useUserContext } from "./context/UserContext";
import AdminPage from "./pages/Admin";
import LoginPage from "./pages/Login";
import UserPage from "./pages/User";
import { decodeBase64 } from "./pages/hash";


function App() {
  // const [open, setOpen] = React.useState<boolean>(false);
  const {user, setUser} = useUserContext();
  const { auth, setAuth } = useAuthContext();
  
  useEffect(() => {
    return () => {
      const localStorageData = localStorage.getItem(LOCAL_USER);
      if (localStorageData !== null) {
        console.log(localStorageData);
        const decodedData =JSON.parse(decodeBase64(localStorageData)) 
        console.log(decodedData);
        const userWithMatchingStatus = users.find(user => user.status === decodedData.status);
        setUser(userWithMatchingStatus)
        setAuth(true);
      } else {
        setAuth(false);
      }
    };
  }, []);

  return (
    <>
      {auth ? (
        <Router>
          {user.status == 1 ?(
            <Routes>
            <Route path="/" element={<UserPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          ):(
          <Routes>
            <Route path="/" element={<AdminPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          )}
        </Router>
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
