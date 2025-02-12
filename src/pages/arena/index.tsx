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

import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';

const CategoriesPage = () => {
    const [league, setleague] = React.useState('');
    const rows = [
    { arena: 'Callingwood A', arena_code: 'CAA', shortform: 'CW',  facility: 'Callingwood', rink: 'A', region: 'South West',  },
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
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ mt: 1 }}>
           <Card sx={{ py: { xs: 3, sm: 3 }, px: { xs: 5, sm: 3 }, bgcolor: 'common.white' ,height:'75vh'}}>
              <p className="!mb-4" style={{fontSize: '18px', fontWeight: 'bold', display: 'flex',gap: '10px'}}>Arena / Facilities</p>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} lg={6}>
                   <Grid container>
                      <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
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
                      <Grid item xs={2} sm={2} md={2} lg={1} xl={1}>
                          <Button
                            fullWidth
                            type="submit"
                          >
                            <FilterIcon/>
                          </Button>
                      </Grid>
                   </Grid>
                </Grid>
                <Grid item xs={12} sm={12} lg={6}>
                    <Grid container justifyContent="flex-end" spacing={1}>
                      <Grid item xs={10} sx={{ textAlign: 'end' }}>
                        <Button
                          sx={{
                            bgcolor: '#213555',
                            color: 'white',
                            fontSize: 14,
                            borderRadius: 2,
                            '&:hover': { bgcolor: '#1a2c44' }, // Optional: Add hover effect
                          }}
                          variant="contained"
                          size="large"
                          onClick={handleClickOpen}
                        >
                          <PlusIcon sx={{ mr: 1, width: 18, height: 18 }} /> Add Arena
                        </Button>
                      </Grid>
                      <Grid item xs={2} sm={2} md={2} lg={1} xl={1} sx={{ textAlign: 'end' }}>
                        <Button fullWidth>
                          <DownloadIcon />
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
              </Grid>

              <Grid container spacing={2} style={{marginTop:'20px'}}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <TableContainer component={Paper} elevation={0} style={{backgroundColor: 'transparent'}}>
                        <Table >
                          <TableHead>
                            <TableRow>
                              <TableCell sx={{fontSize: '16px'}}>Arena</TableCell>
                              <TableCell sx={{fontSize: '16px'}}>Arena Code</TableCell>
                              <TableCell sx={{fontSize: '16px'}}>Shortform</TableCell>
                              <TableCell sx={{fontSize: '16px'}}>Facility Name</TableCell>
                              <TableCell sx={{fontSize: '16px'}}>Rink</TableCell>
                              <TableCell sx={{fontSize: '16px'}}>Region</TableCell>
                              <TableCell sx={{fontSize: '16px', width: '15%'}}>Actions</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {rows.map((row, index) => (
                              <TableRow key={index}>
                                <TableCell sx={{fontSize: '14px'}}>{row.arena}</TableCell>
                                <TableCell sx={{fontSize: '14px'}}>{row.arena_code}</TableCell>
                                <TableCell sx={{fontSize: '14px'}}>{row.shortform}</TableCell>
                                <TableCell sx={{fontSize: '14px'}}>{row.facility}</TableCell>
                                <TableCell sx={{fontSize: '14px'}}>{row.rink}</TableCell>
                                <TableCell sx={{fontSize: '14px'}}>{row.region}</TableCell>
                                <TableCell sx={{fontSize: '14px'}}>
                                  <Button size="small" variant="text">
                                    <PencilIcon sx={{width: '18px',height: '18px'}} />
                                  </Button>
                                  <Button size="small" variant="text">
                                    <DeleteIcon sx={{width: '18px',height: '18px'}} />
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
        maxWidth="md"
        sx={{ "& .MuiPaper-root": { borderRadius: 2 } }}
      >
         <Toolbar style={{background:'#213555'}}>
            <p style={{fontSize: '18px', fontWeight: 'semibold',color:'white'}}>Add Arena</p>
         </Toolbar>
        <DialogContent> 
          <DialogContentText>
              <Grid container spacing={2}>
                  <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                    <TextField
                     fullWidth
                      placeholder="Arena"
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
                      placeholder="Arena Code"
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
                      placeholder="Shortform"
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
                        label="Select League"
                        onChange={handleChange}
                        style={{ borderRadius: 10 }}
                      >
                        <MenuItem value={10}>Capital City Recreational Hockey League</MenuItem>
                        {/* <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem> */}
                      </Select>
                  </FormControl>
                  </Grid>
                  <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                    <TextField
                     fullWidth
                      placeholder="Rink"
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
                        label="Select Region"
                        onChange={handleChange}
                        style={{ borderRadius: 10 }}
                      >
                        <MenuItem value={10}>Capital City Recreational Hockey League</MenuItem>
                        {/* <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem> */}
                      </Select>
                  </FormControl>
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
            </Grid>              
          </DialogContentText>
        </DialogContent>

        <DialogActions className="!p-4" style={{width:'100%'}}>
          <Grid container spacing={2}>
              <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                  <Button
                    style={{backgroundColor:'#FEA168',color:'white',borderRadius:7, fontSize: 14}}
                    variant="contained"
                    size="large"
                    onClick={handleClose}
                  >
                   Cancel
                  </Button>          
              </Grid>
              <Grid item xl={6} lg={6} md={6} sm={6} xs={6} style={{textAlign:'end'}}>
                  <Button
                    style={{backgroundColor:'#213555',color:'white',borderRadius:7, fontSize: 14}}
                    variant="contained"
                    size="large"
                    onClick={handleClickOpen}
                  >
                   Save
                  </Button>          
              </Grid>
          </Grid>
        </DialogActions>
      </Dialog>

    </Grid>
  );
};

export default CategoriesPage;
