import { Box, Card, Grid, Stack,Container } from '@mui/material';
import LoginForm from 'components/sections/authentication/LoginForm';
import logobg from '../../../assets/bglogin.png';
import logo from '../../../assets/loginlogo.png';
const LoginPage = () => {
  return (
    // <Container
    //   sx={{
    //     padding: 0,
    //     margin: 0,
    //   }}
    // >
    <Grid container sx={{ height: '99vh',width:'100%',padding:0,margin:0 }} spacing={0}>
      <Grid
        item
        xs={12}
        md={5}
        
      >
          <Grid container style={{height:'99vh'}}>
            <Grid item xs={6} md={6} style={{margin:'auto'}}>
              <div style={{margin:'auto',textAlign:'center'}}>
                <img
                  src={logo} // Replace with your image URL
                  alt="Placeholder"
                  style={{
                    width: '100px',
                    height: '100px',
                    margin: 'auto',
                    alignSelf: 'center',
                  }}
                />
                <h3 style={{marginTop:'30px'}}>Eizen Group <br></br> Game Scheduler</h3>
              </div>
              <div style={{margin:'auto',paddingTop:'30px'}}>
                <LoginForm />
              </div>
            </Grid>

          </Grid>
      </Grid>
      <Grid item xs={12} md={7}>
        <img
          src={logobg} // Replace with your image URL
          alt="Placeholder"
          style={{
            width: '100%',
            height: '99vh',
            objectFit: 'cover',
          }}
        />
      </Grid>

    </Grid>
    // </Container>
  );
};

export default LoginPage;
