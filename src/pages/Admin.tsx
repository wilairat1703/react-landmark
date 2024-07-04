import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import landmark from "../assets/landmark.json";
import user from "../assets/user.json";

function AdminPage() {
  const [showMenu, setShowMenu] = React.useState<boolean>(false);
  function clickMenu(showMenu: boolean) {
    if (showMenu == false) {
      // console.log('landmark');
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  }

  useEffect(() => {
    setShowMenu(false);
  }, []);

  return (
    <>
      <Navbar />
      <Box sx={{ bgcolor: "black", minHeight: "180vh" }}>
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
                  src="https://media.komchadluek.net/uploads/images/contents/w1024/2023/07/wqq86hk32rVHF8jQNEL5.webp?x-image-process=style/lg-webp"
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
                      Admin
                    </span>
                  </Grid>
                  <Grid item md={12} sx={{ mt: 1 }}>
                    <span style={{ color: "#5F5F5F", fontSize: "40px" }}>
                      Gmail :{" "}
                    </span>
                    <span style={{ color: "#5F5F5F", fontSize: "38px" }}>
                      admin01@gmail.com
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
            {showMenu ? (
              <>
                <Box>
                  <Button
                    sx={{
                      color: "white",
                      bgcolor: "black",
                      width: "300px",
                      height: "60px",
                      borderRadius: "30px",
                      border: "2px solid white",
                      "&:hover": { bgcolor: "#F74141", border: "none" },
                    }}
                    onClick={() => {
                      clickMenu(false);
                    }}
                  >
                    <span
                      style={{
                        color: "white",
                        fontSize: "25px",
                        fontWeight: "bold",
                      }}
                    >
                      All Landmarks
                    </span>
                  </Button>
                </Box>
                <Box>
                  <Button
                    sx={{
                      color: "white",
                      bgcolor: "#7041F7",
                      width: "200px",
                      height: "60px",
                      borderRadius: "30px",
                      "&:hover": { bgcolor: "#7041F7" },
                    }}
                    onClick={() => {
                      clickMenu(true);
                    }}
                  >
                    <span
                      style={{
                        color: "white",
                        fontSize: "25px",
                        fontWeight: "bold",
                      }}
                    >
                      All Users
                    </span>
                  </Button>
                </Box>
              </>
            ) : (
              <>
                <Box>
                  <Button
                    sx={{
                      color: "white",
                      bgcolor: "#7041F7",
                      width: "300px",
                      height: "60px",
                      borderRadius: "30px",
                      "&:hover": { bgcolor: "#7041F7" },
                    }}
                    onClick={() => {
                      clickMenu(false);
                    }}
                  >
                    <span
                      style={{
                        color: "white",
                        fontSize: "25px",
                        fontWeight: "bold",
                      }}
                    >
                      All Landmarks
                    </span>
                  </Button>
                </Box>
                <Box>
                  <Button
                    sx={{
                      color: "white",
                      bgcolor: "black",
                      width: "200px",
                      height: "60px",
                      borderRadius: "30px",
                      border: "2px solid white",
                      "&:hover": { bgcolor: "#F74141", border: "none" },
                    }}
                    onClick={() => {
                      clickMenu(true);
                    }}
                  >
                    <span
                      style={{
                        color: "white",
                        fontSize: "25px",
                        fontWeight: "bold",
                      }}
                    >
                      All Users
                    </span>
                  </Button>
                </Box>
              </>
            )}
          </Box>
        </Container>
        <Container>
          {showMenu ? (
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "10px",
                  mt: 3
                }}
              >
                {user
                  .filter((person) => person.status !== 0)
                  .map((person, i) => (
                    <Box
                      key={i}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        gap: "20px",
                        mb:5
                      }}
                    >
                      <Card
                        sx={{
                          mt: 2,
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
                          sx={{
                            height: "300px", // Fixed height
                            width: "100%", // Make width fill the container
                            aspectRatio: "1/1",
                          }}
                          image={person.Avartar}
                        />
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <CardContent>
                            <Typography
                              sx={{
                                justifyContent: "center",
                                alignItems: "center",
                                fontSize: "30px",
                                fontWeight: "bold",
                                display: "flex",
                                textAlign: "center",
                              }}
                            >
                              {person.name}
                            </Typography>
                            <Typography
                              sx={{
                                justifyContent: "center",
                                alignItems: "center",
                                fontSize: "20px",
                                display: "flex",
                                textAlign: "center",
                              }}
                            >
                              {person.country}
                            </Typography>
                          </CardContent>
                        </Box>
                      </Card>
                    </Box>
                  ))}
              </Box>
            </Box>
          ) : (
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "10px",
                  mt: 3,
                }}
              >
                {landmark.map((land, i) => {
                  return (
                    // Explicitly return the JSX
                    <Box key={i}>
                      <Card
                        sx={{
                          maxWidth: 350,
                          bgcolor: "white",
                          transition: "transform 0.5s",
                          "&:hover, &:focus": {
                            transform: "scale3d(1.006, 1.006, 1)",
                            cursor: "pointer",
                            boxShadow: "0 0px 50px #363636",
                          },
                        }}
                      >
                        <CardHeader
                          title={land.name}
                          subheader={land.country}
                        />{" "}
                        <CardMedia
                          component="img"
                          height="140" // Ensure this is a valid value, not `land.image` unless it's a height value
                          image={land.image} // Correctly passing image URL
                          sx={{ aspectRatio: "2/1", pl: 1, pr: 1, pb: 1 }}
                        />
                      </Card>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          )}
        </Container>
      </Box>
    </>
  );
}
export default AdminPage;
