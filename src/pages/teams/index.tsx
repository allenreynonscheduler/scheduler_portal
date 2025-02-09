import * as React from 'react';
import { Box, Card, Grid,Switch , Stack, TextField,InputAdornment,Button,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,InputLabel } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Toolbar from '@mui/material/Toolbar';
import DialogTitle from '@mui/material/DialogTitle';
import AppBar from '@mui/material/AppBar';
import SearchIcon from 'components/icons/search';
import FilterIcon from 'components/icons/filter';
import PlusIcon from 'components/icons/addbutton';
import DownloadIcon from 'components/icons/download';
import PencilIcon from 'components/icons/pencil';
import DeleteIcon from 'components/icons/delete';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';

const CategoriesPage = () => {
    const [league, setleague] = React.useState('');
    const rows = [
    {  team_name: 'North Conference', conference: 'Division 5',  division: 'CCRHL', league: 'A', manager: 'Michael Lopatka', contact:'mlopatka1@gmail.com'  },
  ];
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
      setOpen(true);
    };
    const handleChange = (event: SelectChangeEvent) => {
    setleague(event.target.value);
  };

  const handleClose = () => {
      setOpen(false);
    };
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
           <Card sx={{ py: { xs: 3, sm: 2 }, px: { xs: 5, sm: 3 }, bgcolor: 'common.white' }}>
              <p style={{fontSize: '18px', fontWeight: 'bold', display: 'flex',gap: '10px'}}>Teams</p>
              <p style={{fontWeight: 'normal',fontSize: '14px', display: 'flex',gap: '10px',marginTop:'5px'}}>Dashboard <div style={{color:'#D9D9D9'}}>&#x25CF;</div> Teams</p>
           </Card>
      </Grid>
      
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ mt: 1 }}>
           <Card sx={{ py: { xs: 3, sm: 3 }, px: { xs: 5, sm: 3 }, bgcolor: 'common.white' ,height:'75vh'}}>
               <Grid container spacing={2}>
                <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                     <TextField
                     fullWidth
                      placeholder="Search ..."
                      variant="outlined"
                      type="text"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <SearchIcon />
                          </InputAdornment>
                        ),
                        style: { borderRadius: 10 },
                      }}
                    />
                </Grid>
                <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                    <Button
                    size="large"
                    fullWidth
                    type="submit"
                  >
                    <FilterIcon/>
                  </Button>
                </Grid>
                <Grid item xs={7} sm={7} md={7} lg={7} xl={7} style={{textAlign:'end'}}>
                    <Button
                    style={{backgroundColor:'#213555',color:'white',borderRadius:15,}}
                    variant="contained"
                    size="large"
                    type="submit"
                    onClick={handleClickOpen}
                  >
                   <PlusIcon style={{marginRight: '10px',width: '20px',height: '20px'}} /> Add Team    
                  </Button>
                </Grid>
                <Grid item xs={1} sm={1} md={1} lg={1} xl={1} style={{textAlign:'end'}}>
                    <Button
                    size="large"
                    type="submit"
                    >
                   <DownloadIcon /> 
                  </Button>
                </Grid>
              </Grid>

              <Grid container spacing={2} style={{marginTop:'20px'}}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <TableContainer component={Paper} style={{backgroundColor: 'transparent'}}>
                        <Table >
                          <TableHead>
                            <TableRow>
                              <TableCell sx={{fontSize: '16px'}}>Logo</TableCell>
                              <TableCell sx={{fontSize: '16px'}}>Team Name</TableCell>
                              <TableCell sx={{fontSize: '16px'}}>Conference</TableCell>
                              <TableCell sx={{fontSize: '16px'}}>Division</TableCell>
                              <TableCell sx={{fontSize: '16px'}}>League</TableCell>
                              <TableCell sx={{fontSize: '16px'}}>Manager</TableCell>
                              <TableCell sx={{fontSize: '16px'}}>Contact</TableCell>
                              <TableCell sx={{fontSize: '16px'}}>Actions</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {rows.map((row, index) => (
                              <TableRow key={index}>
                                <TableCell sx={{fontSize: '14px'}}></TableCell>
                                <TableCell sx={{fontSize: '14px'}}>{row.team_name}</TableCell>
                                <TableCell sx={{fontSize: '14px'}}>{row.conference}</TableCell>
                                <TableCell sx={{fontSize: '14px'}}>{row.division}</TableCell>
                                <TableCell sx={{fontSize: '14px'}}>{row.league}</TableCell>
                                <TableCell sx={{fontSize: '14px'}}>{row.manager}</TableCell>
                                <TableCell sx={{fontSize: '14px'}}>{row.contact}</TableCell>
                                <TableCell sx={{fontSize: '14px'}}>
                                  <Button size="small">
                                    <PencilIcon sx={{width: '25px',height: '25px'}} />
                                  </Button>
                                  <Button size="small">
                                    <DeleteIcon sx={{width: '25px',height: '25px'}} />
                                  </Button>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>   
                </Grid>
              </Grid>
           </Card>
      </Grid>

       <Dialog
       fullWidth
        open={open}
        onClose={handleClose}
        maxWidth="lg"
        
      >
         <Toolbar style={{background:'#213555'}}>
            <p style={{fontSize: '18px', fontWeight: 'semibold',color:'white'}}>Add Team</p>
         </Toolbar>
        <DialogContent> 
          <DialogContentText>
              <Grid container spacing={2}>
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                   <h4>General Information</h4>
                   <Divider />
                  </Grid>          
                  <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                    <TextField
                     fullWidth
                      placeholder="Team Name"
                      variant="outlined"
                      type="text"
                      InputProps={{
                        style: { borderRadius: 10 },
                      }}
                    />     
                  </Grid>          
                  <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                    <TextField
                     fullWidth
                      placeholder="Abbreviation"
                      variant="outlined"
                      type="text"
                      InputProps={{
                        style: { borderRadius: 10 },
                      }}
                    />     
                  </Grid>          
                  <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                    <FormControl fullWidth>
                      {/* <InputLabel id="demo-simple-select-label">Facility</InputLabel> */}
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select-label"
                        value={league}
                        label="Select Conference"
                        onChange={handleChange}
                        style={{ borderRadius: 10 }}
                      >
                        <MenuItem value={10}>North Conference</MenuItem>
                        {/* <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem> */}
                      </Select>
                  </FormControl>
                  </Grid>          
                  <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                    <FormControl fullWidth>
                      {/* <InputLabel id="demo-simple-select-label">Facility</InputLabel> */}
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select-label"
                        value={league}
                        label="Select Division"
                        onChange={handleChange}
                        style={{ borderRadius: 10 }}
                      >
                        <MenuItem value={10}>Division 5</MenuItem>
                        {/* <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem> */}
                      </Select>
                  </FormControl>
                  </Grid>
                  <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                    <TextField
                     fullWidth
                      placeholder="Team Manager"
                      variant="outlined"
                      type="text"
                      InputProps={{
                        style: { borderRadius: 10 },
                      }}
                    />     
                  </Grid>          
                  <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                    <TextField
                     fullWidth
                      placeholder="Team Manager's Email"
                      variant="outlined"
                      type="text"
                      InputProps={{
                        style: { borderRadius: 10 },
                      }}
                    />     
                  </Grid>          
                  <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                    <TextField
                     fullWidth
                      placeholder="Alternate Manager's Name"
                      variant="outlined"
                      type="text"
                      InputProps={{
                        style: { borderRadius: 10 },
                      }}
                    />     
                  </Grid>          
                  <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                    <TextField
                     fullWidth
                      placeholder="Alternate Manager's Email"
                      variant="outlined"
                      type="text"
                      InputProps={{
                        style: { borderRadius: 10 },
                      }}
                    />     
                  </Grid>          
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <TextField
                     fullWidth
                      placeholder="Address"
                      variant="outlined"
                      type="text"
                      InputProps={{
                        style: { borderRadius: 10 },
                      }}
                    />     
                  </Grid>          
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <TextField
                     fullWidth
                      placeholder="Description"
                      variant="outlined"
                      type="text"
                      InputProps={{
                        style: { borderRadius: 10 },
                      }}
                    />     
                  </Grid>          
                   <Grid item xl={12} lg={12} md={12} sm={12} xs={12} className='mt-5'>
                   <h4>Players</h4>
                   <Divider />
                  </Grid>    
                  {/* <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <FormControlLabel color="primary" control={<Switch  />} label="Status" sx={{padding: '10px',gap: '10px'}} />     
                  </Grid>           */}
            </Grid>              
          </DialogContentText>
        </DialogContent>

        <DialogActions style={{width:'100%'}}>
          <Grid container spacing={2}>
              <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                  <Button
                    style={{backgroundColor:'#FEA168',color:'white',borderRadius:10,}}
                    variant="contained"
                    size="small"
                    onClick={handleClose}
                  >
                   Cancel
                  </Button>          
              </Grid>
              <Grid item xl={6} lg={6} md={6} sm={6} xs={6} style={{textAlign:'end'}}>
                  <Button
                    style={{backgroundColor:'#213555',color:'white',borderRadius:10}}
                    variant="contained"
                    size="small"
                    onClick={handleClickOpen}
                  >
                   Save
                  </Button>          
              </Grid>
          </Grid>
          {/* <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Subscribe</Button> */}
        </DialogActions>
      </Dialog>

    </Grid>
  );
};

export default CategoriesPage;
