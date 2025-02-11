import * as React from 'react';
import { Box, Card, Grid,Switch , Stack, TextField,InputAdornment,Button,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
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
import { useAxios } from 'utils/axiosContext';

interface League {
  _id: string;
  name: string;
  abbreviation: string;
  description: string;
  status: number;
  date_start: Date;
  date_end: Date;
  createdAt: string;
  updatedAt: string;
}

interface PaginatedResponse {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  data: League[];
}

const Page = () => {
  const axios = useAxios();
  const rows = [
    { name: 'Winter 2025', league: 'CCRHL', start: 'Mar. 01 , 2025',  end: 'May  30 , 2025' ,  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' , status:'Active' },
  ];
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  const [form, setForm] = React.useState({
    _id: '',
    name: '',
    abbreviation: '',
    description: '',
    date_start: '',
    date_end: '',
  });
  const [indexData, setIndexData] = React.useState<PaginatedResponse | null>(null);
  
  const index = async () => {
    try {
      const response = await axios.get(`/seasons`);
      setIndexData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching teams:', error);
    }
  };

  const store = async () => {
    try {
      const response = await axios.post(`/seasons`, { ...form });
      index();
    } catch (error) {
      console.error('Error fetching teams:', error);
    }
  };

  const show = async (id: string | null = null) => {
    try {
      const response = await axios.get(`/seasons/${id}`);
      console.log(response.data);
      setForm(response.data)
      setOpen(true);
    } catch (error) {
      console.error('Error fetching teams:', error);
    }
  };

  const update = async () => {
    try {
      const response = await axios.put(`/seasons/${form._id}`, { ...form });
      index();
      setOpen(false);
    } catch (error) {
      console.error('Error fetching teams:', error);
    }
  };

  const destroy = async (id: string | null = null) => {
    try {
      const response = await axios.delete(`/seasons/${id}`);
      index();
      // setOpen(false);
    } catch (error) {
      console.error('Error fetching teams:', error);
    }
  };

  React.useEffect(() => {
    index();
  }, []);
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
           <Card sx={{ py: { xs: 3, sm: 2 }, px: { xs: 5, sm: 3 }, bgcolor: 'common.white' }}>
              <p style={{fontSize: '18px', fontWeight: 'bold', display: 'flex',gap: '10px'}}>Seasons</p>
              <p style={{fontWeight: 'normal',fontSize: '14px', display: 'flex',gap: '10px',marginTop:'5px'}}>Dashboard <span style={{color:'#D9D9D9'}}>&#x25CF;</span> Seasons</p>
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
                   <PlusIcon style={{marginRight: '10px',width: '20px',height: '20px'}} /> Add Season
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
                              <TableCell sx={{fontSize: '16px'}}>Season Name</TableCell>
                              <TableCell sx={{fontSize: '16px'}}>League</TableCell>
                              <TableCell sx={{fontSize: '16px'}}>Start</TableCell>
                              <TableCell sx={{fontSize: '16px'}}>End</TableCell>
                              <TableCell sx={{fontSize: '16px'}}>Description</TableCell>
                              <TableCell sx={{fontSize: '16px'}}>Status</TableCell>
                              <TableCell sx={{fontSize: '16px'}}>Actions</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                          {indexData?.data?.length ? ( indexData.data.map((row) => (
                              <TableRow key={row._id}>
                                <TableCell sx={{fontSize: '14px'}}>{row.name}</TableCell>
                                <TableCell sx={{fontSize: '14px'}}>{row.abbreviation}</TableCell>
                                <TableCell sx={{fontSize: '14px'}}>{row.description}</TableCell>
                                <TableCell sx={{fontSize: '14px'}}>{null}</TableCell>
                                <TableCell sx={{fontSize: '14px'}}>{(row.status == 1) ? 'Active':'Inactive'}</TableCell>
                                <TableCell sx={{fontSize: '14px'}}>
                                  <Button size="small" onClick={() => show(row._id)}>
                                    <PencilIcon sx={{width: '25px',height: '25px'}} />
                                  </Button>
                                  <Button size="small" onClick={() => destroy(row._id)}>
                                    <DeleteIcon sx={{width: '25px',height: '25px'}} />
                                  </Button>
                                </TableCell>
                              </TableRow>
                             ))
                            ) : (
                              <TableRow>
                                <TableCell colSpan={5} align="center">
                                  No data available
                                </TableCell>
                              </TableRow>
                            )}
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
        
      >
         <Toolbar style={{background:'#213555'}}>
            <p style={{fontSize: '18px', fontWeight: 'semibold',color:'white'}}>Add Season</p>
         </Toolbar>
        <DialogContent> 
          <DialogContentText>
              <Grid container spacing={2}>
                  <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                    <TextField
                     fullWidth
                      placeholder="Name"
                      variant="outlined"
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
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
                      value={form.abbreviation}
                      onChange={(e) => setForm({ ...form, abbreviation: e.target.value })}
                      InputProps={{
                        style: { borderRadius: 10 },
                      }}
                    />     
                  </Grid>          
                  <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                    <TextField
                      fullWidth
                      label="Date Start"
                      placeholder="Date Start"
                      variant="outlined"
                      type="date"
                      value={form.date_start}
                      onChange={(e) => setForm({ ...form, date_start: e.target.value })}
                      rows={3}
                      InputProps={{
                        style: { borderRadius: 10 },
                      }}
                    />     
                  </Grid>          
                  <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                    <TextField
                      fullWidth
                      label="Date End"
                      placeholder="Date Start"
                      variant="outlined"
                      type="date"
                      value={form.date_end}
                      onChange={(e) => setForm({ ...form, date_end: e.target.value })}
                      rows={3}
                      InputProps={{
                        style: { borderRadius: 10 },
                      }}
                    />     
                  </Grid>          
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <TextField
                      fullWidth
                      placeholder="Desription"
                      variant="outlined"
                      type="text"
                      value={form.description}
                      onChange={(e) => setForm({ ...form, description: e.target.value })}
                      rows={3}
                      InputProps={{
                        style: { borderRadius: 10 },
                      }}
                    />     
                  </Grid>          
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <FormControlLabel color="primary" control={<Switch  />} label="Status" sx={{padding: '10px',gap: '10px'}} />     
                  </Grid>          
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
                    onClick={(form._id) ? update : store}
                  >
                  {(form._id) ? 'Update' : 'Save'}
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

export default Page;
