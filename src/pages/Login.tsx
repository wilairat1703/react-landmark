import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { useRef } from "react";
import bgLand from "../assets/bg_LandMark.jpg";
import users from "../assets/user.json";
import { LOCAL_USER } from "../constant/EndpointConstant";
import { useAuthContext } from "../context/AuthContext";
import { useUserContext } from "../context/UserContext";
import "./Login.css";

const CssTextField = styled(TextField)({
  "& label": {
    color: "black",
  },
  "& label.Mui-focused": {
    color: "black",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "black",
    border: "1.5px solid",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "black",
    },
    "&:hover fieldset": {
      borderColor: "black",
    },
    "&.Mui-focused fieldset": {
      borderColor: "black",
    },
  },
});

function LoginPage() {
  const { setAuth } = useAuthContext();
  const {setUser} = useUserContext();
  const usernameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  // const navigate = useNavigate();

  function encodeBase64(data: string): string {
    return btoa(data);
  }

  const handleLogin = () => {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    console.log(username);
    console.log(password);
    if (username && password) {
      const user = findUserByUsername(username);
      if (user) {
        console.log("พบผู้ใช้งาน:", user);
        const data = {
          id: user.id,
          name: user.name,
          username: user.username,
          status: user.status,
        };
        const re =encodeBase64(JSON.stringify(data));
        localStorage.setItem(LOCAL_USER,re)
        console.log(re);
        setUser(data)
        
        setAuth(true)
        // const userWithMatchingStatus = users.find(user => user.status === de.status);
        // if(userWithMatchingStatus){
        //   setAuth(true)
        //   setUser(true)
        // }
      } else {
        console.log("ไม่พบผู้ใช้งาน");
      }
    }
  };

  function findUserByUsername(username: string) {
    return users.find((user) => user.username === username);
  }

  return (
    <>
      <section className="hero" style={{ backgroundImage: `url(${bgLand})` }}>
        <div className="content">
          <Card
            sx={{
              maxWidth: 400,
              display: "flex",
              justifyContent: "center",
              width: 400,
              backgroundColor: "rgba(255, 255, 255, 255)",
              borderRadius: "30px",
              mt: 2,
            }}
          >
            <CardContent>
              <Typography display={"flex"} justifyContent={"center"}>
                <span style={{ color: "black", fontSize: "30px" }}>Login</span>
              </Typography>
              <Typography variant="body1" color="text.secondary" marginTop={2}>
                <span style={{ color: "black", fontSize: "18px" }}>
                  Username
                </span>
              </Typography>
              <CssTextField
                id="outlined-basic"
                placeholder="Username"
                inputRef={usernameRef}
                InputProps={{
                  sx: {
                    borderRadius: 50,
                    width: 350,
                    height: 40,

                    color: "black",
                  },
                }}
              />
              <Typography color="text.secondary" mt={3}>
                <span style={{ color: "black", fontSize: "18px" }}>
                  Password
                </span>
              </Typography>
              <CssTextField
                id="outlined-password-input"
                placeholder="Password"
                type="password"
                inputRef={passwordRef}
                autoComplete="current-password"
                InputProps={{
                  sx: {
                    borderRadius: 50,
                    width: 350,
                    height: 40,
                    color: "black",
                  },
                }}
              />
              <Typography mt={3} display={"flex"} justifyContent={"center"}>
                <Button
                  type="submit"
                  onClick={handleLogin}
                  sx={{
                    boxShadow: "none",
                    backgroundColor: "black",
                    color: "white",
                    fontSize: "15px",
                    borderRadius: "50px",
                    width: "100%",
                    "&:hover": { color: "white", backgroundColor: "black" },
                  }}
                >
                  Login
                </Button>
              </Typography>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
export default LoginPage;
