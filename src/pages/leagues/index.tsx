import * as React from 'react';
import { Box, Card, Grid, Stack, TextField,InputAdornment,Button,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
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
import { useAxios } from 'utils/axiosContext';

interface League {
  _id: string;
  name: string;
  abbreviation: string;
  description: string;
  status: number;
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
    { name: 'Capital City Recreational Hockey League', abbreviation: 'CCRHL', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur, odio ut condimentum rhoncus, lacus lorem pellentesque enim,',  status: 'Winter 2025' },
  ];
  const [open, setOpen] = React.useState(false);
  const [form, setForm] = React.useState({
    _id: '',
    name: '',
    abbreviation: '',
    description: ''
  });
  const [indexData, setIndexData] = React.useState<PaginatedResponse | null>(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

   const handleClose = () => {
    setOpen(false);
  };
  
  const index = async () => {
    try {
      const response = await axios.get(`/leagues`);
      setIndexData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching teams:', error);
    }
  };

  const store = async () => {
    try {
      const response = await axios.post(`/leagues`, { ...form });
    } catch (error) {
      console.error('Error fetching teams:', error);
    }
  };

  const show = async (id: string | null = null) => {
    try {
      const response = await axios.get(`/leagues/${id}`);
      console.log(response.data);
      setForm(response.data)
      setOpen(true);
    } catch (error) {
      console.error('Error fetching teams:', error);
    }
  };

  const update = async () => {
    try {
      const response = await axios.put(`/leagues/${form._id}`, { ...form });
      index();
      setOpen(false);
    } catch (error) {
      console.error('Error fetching teams:', error);
    }
  };

  const destroy = async (id: string | null = null) => {
    try {
      const response = await axios.delete(`/leagues/${id}`);
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
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ mt: 1 }}>
           <Card sx={{ py: { xs: 3, sm: 3 }, px: { xs: 5, sm: 3 }, bgcolor: 'common.white' ,height:'75vh'}}>
               <Grid container spacing={2}>
                <Grid item xs={3} sm={3} md={3} lg={2}>
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
                <Grid item xs={12} lg={1}>
                  <Button
                    variant="contained"
                    size="large"
                    fullWidth
                    type="submit"
                    onClick={index}
                    style={{ backgroundColor: '#213555',color: 'white',borderRadius: '15px' }}
                  >
                  Search
                </Button>
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
                   <PlusIcon style={{marginRight: '10px',width: '20px',height: '20px'}} /> Add League
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
                          <PlusIcon sx={{ mr: 1, width: 18, height: 18 }} /> Add League
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
                              <TableCell sx={{fontSize: '16px'}}>Name</TableCell>
                              <TableCell sx={{fontSize: '16px'}}>Abbreviation</TableCell>
                              <TableCell sx={{fontSize: '16px', width: '30%'}}>Description</TableCell>
                              <TableCell sx={{fontSize: '16px'}}>Active Season</TableCell>
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
        maxWidth="sm"
        sx={{ "& .MuiPaper-root": { borderRadius: 2 } }}
        >
         <Toolbar style={{background:'#213555'}}>
            <p style={{fontSize: '18px', fontWeight: 'semibold',color:'white'}}>Add League</p>
         </Toolbar>
        <DialogContent> 
            <DialogContentText>
              <Grid container spacing={2}>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
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
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
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
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  placeholder="Description"
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
            </Grid>              
            </DialogContentText>
        </DialogContent>

        <DialogActions className="!p-4" style={{width:'100%'}}>
          <Grid container spacing={2}>
              <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                  <Button
                    style={{backgroundColor:'#FEA168', color:'white', borderRadius:7, fontSize: 14}}
                    variant="contained"
                    size="large"
                    onClick={handleClose}
                  >
                   Cancel
                  </Button>          
              </Grid>
              <Grid item xl={6} lg={6} md={6} sm={6} xs={6} style={{textAlign:'end'}}>
                  <Button
                    style={{backgroundColor:'#213555', color:'white', borderRadius:7, fontSize: 14}}
                    variant="contained"
                    size="small"
                    onClick={(form._id) ? update : store}
                  >
                  {(form._id) ? 'Update' : 'Save'}
                  </Button>          
              </Grid>
          </Grid>
        </DialogActions>
      </Dialog>

    </Grid>
  );
};

export default Page;
