import { Box, Card, Grid, Stack,Container } from '@mui/material';
import LoginForm from 'components/sections/authentication/LoginForm';
import logobg from '../../../assets/bglogin.png';
import logo from '../../../assets/loginlogo.png';
const LoginPage = () => {
  return (
    <Grid container sx={{ height: '99vh',width:'100%',padding:0,margin:0, overflow: "hidden" }} spacing={0}>
      <Grid item xs={12} md={4}>
          <Grid container style={{height:'99vh'}}>
            <Grid item xs={10} md={8} style={{margin:'auto'}}>
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
                <h3 className="text-2xl font-bold" style={{marginTop:'30px'}}>Eizen Group <br></br> Game Scheduler</h3>
              </div>
              <div style={{margin:'auto',paddingTop:'30px'}}>
                <LoginForm />
              </div>
            </Grid>
          </Grid>
      </Grid>
      <Grid item xs={12} md={8}>
        <img
          className="hidden md:block h-full md:h-screen"
          src={logobg} // Replace with your image URL
          alt="Placeholder"
          style={{
            width: '100%',
            height: '100vh',
            objectFit: 'cover',
            objectPosition: 'bottom'
          }}
        />
      </Grid>

    </Grid>
    // </Container>
  );
};

export default LoginPage;
