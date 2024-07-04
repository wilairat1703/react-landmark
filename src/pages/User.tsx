import { Avatar, Box, Card, CardMedia, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import landmark from "../assets/landmark.json";
import users from "../assets/user.json";
import { useUserContext } from "../context/UserContext";

function UserPage() {
  const { user } = useUserContext();
  const [name, setName] = useState("");
  const [avartar, setAvartar] = useState("");
  const [country, setCountry] = useState("");
  const [username, setUsername] = useState("");
  const [landShow, setLandShow] = React.useState<any>([]);
  function callCountry(coun : string){
    console.log(coun);
    const matchedLandmark = landmark.filter(land => land.country === coun);
    console.log(matchedLandmark);
    setLandShow(matchedLandmark)
  }
  useEffect(() => {
    if (user) {
      const matchedUser = users.find(u => u.name === user.name);
      if (matchedUser) {
        setName(matchedUser.name);
        setAvartar(matchedUser.Avartar);
        setCountry(matchedUser.country);
        setUsername(matchedUser.username);
        callCountry(matchedUser.country)      
      }
    }
  }, [user]);

  return (
    <>
      <Navbar />
      <Box sx={{ bgcolor: "black", minHeight: "200vh" }}>
        <Container>
          <Grid container sx={{ paddingLeft: 1, paddingRight: 6 }}>
            <Grid container sx={{ mt: 5, mb: 2 }}>
              <Grid
                item
                md={4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src={avartar}
                  sx={{ width: 300, height: 300, border: "3px solid white" }}
                />
              </Grid>
              <Grid item md={8}>
                <Grid container sx={{ ml: 3, mt: 5 }}>
                  <Grid item md={12}>
                    <span
                      style={{
                        color: "white",
                        fontSize: "50px",
                        fontWeight: "bold",
                      }}
                    >
                      {name}
                    </span>
                  </Grid>
                  <Grid item md={12} sx={{ mt: 1 }}>
                    <span style={{ color: "#5F5F5F", fontSize: "40px" }}>
                      Gmail :{" "}
                    </span>
                    <span style={{ color: "#5F5F5F", fontSize: "38px" }}>
                      {username}@gmail.com
                    </span>
                  </Grid>
                  <Grid item md={12} sx={{ mt: 1 }}>
                    <span style={{ color: "#5F5F5F", fontSize: "40px" }}>
                      From :{" "}
                    </span>
                    <span style={{ color: "#5F5F5F", fontSize: "38px" }}>
                      {country}
                    </span>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item md={12}>
              <hr style={{ border: "1px solid white", width: "100%" }} />
            </Grid>
          </Grid>
        </Container>
        <Container>
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "10px",
                mt: 5,
              }}
            >
              {landShow.map((land : any,i: number)=>(
              <Box key={i}>
                <Card
                  sx={{
                    maxWidth: 500,
                    bgcolor: "#212121",
                    transition: "transform 0.5s",
                    "&:hover, &:focus": {
                      transform: "scale3d(1.006, 1.006, 1)",
                      cursor: "pointer",
                      boxShadow: "0 0px 50px #363636",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height={"300"}
                    image={land.image}
                    sx={{ aspectRatio: "2/1" }}
                  />
                </Card>
              </Box>

              ))}
  
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
export default UserPage;
