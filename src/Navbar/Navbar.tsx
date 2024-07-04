import { AppBar, Button, Container, Grid } from "@mui/material";
import { useAuthContext } from "../context/AuthContext";

function NavbarPage() {
  const { setAuth } = useAuthContext();

  const clicklogout =() =>{
    // navigate('/Login');
    setAuth(false);
  }

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#000000" }}>
        <Container>
            <Grid container>
            <Grid item md={10.75}></Grid>
            <Grid item md={1.25}>
                <Button
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontWeight: "bold",
                    border: "2px solid white",
                    borderRadius: "16px",
                    textTransform: "none",
                    fontSize: "15px",
                  }}
                  onClick={() => clicklogout()}
                >
                  Logout
                </Button>
              </Grid>
            </Grid>
        </Container>
      </AppBar>
    </>
  );
}
export default NavbarPage;
