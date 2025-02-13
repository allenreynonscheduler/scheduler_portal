import * as React from 'react';
import { Box, Card, Grid, Stack, TextField,InputAdornment,Button,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, InputLabel } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Toolbar from '@mui/material/Toolbar';
import DialogTitle from '@mui/material/DialogTitle';
import AppBar from '@mui/material/AppBar';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from 'components/icons/search';
import FilterIcon from 'components/icons/filter';
import PlusIcon from 'components/icons/addbutton';
import DownloadIcon from 'components/icons/download';
import PencilIcon from 'components/icons/pencil';
import DeleteIcon from 'components/icons/delete';
import CheckIcon from 'components/icons/check';
import XIcon from 'components/icons/xmark';

const CategoriesPage = () => {
    const [league, setleague] = React.useState('');
    const rows = [
      {
        slot : "Wed, Mar. 01 , 2025 - 6:30 PM - Callingwood A",
        p1: "Mighthy Drunks",
        p2: "Eagles",
        p3: "Spitfires",
        p4: "Night Terrors",
        gs: "0544",
        scheduled: "yes",
      }
    ];
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
      setOpen(true);
    };

  const handleChange = (event: SelectChangeEvent) => {
    setleague(event.target.value);
  };

  const handleClose = () => {
    // Prevent closing on backdrop click
    setOpen(false);
  };
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ mt: 1 }}>
           <Card sx={{ py: { xs: 2, sm: 3 }, px: { xs: 2, sm: 3 }, bgcolor: 'common.white' ,height:'75vh'}}>
              <p className="!mb-4" style={{fontSize: '18px', fontWeight: 'bold', display: 'flex',gap: '10px'}}>Home Ice</p>
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
                          <PlusIcon sx={{ mr: 1, width: 18, height: 18 }} /> Add Home Ice
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
                    <TableContainer component={Paper} elevation={0} style={{backgroundColor: 'transparent', borderRadius: 0}}>
                        <Table >
                          <TableHead>
                            <TableRow>
                              <TableCell sx={{fontSize: '16px', width: '20%'}}>Slot</TableCell>
                              <TableCell sx={{fontSize: '16px'}}>Priority 1</TableCell>
                              <TableCell sx={{fontSize: '16px'}}>Priority 2</TableCell>
                              <TableCell sx={{fontSize: '16px'}}>Priority 3</TableCell>
                              <TableCell sx={{fontSize: '16px'}}>Priority 4</TableCell>
                              <TableCell sx={{fontSize: '16px'}}>GS</TableCell>
                              <TableCell sx={{fontSize: '16px'}}>Scheduled</TableCell>
                              <TableCell sx={{fontSize: '16px', width: '15%'}}>Actions</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {rows.map((row, index) => (
                              <TableRow key={index}>
                                <TableCell sx={{fontSize: '14px'}}>{row.slot}</TableCell>
                                <TableCell sx={{fontSize: '14px'}}>{row.p1}</TableCell>
                                <TableCell sx={{fontSize: '14px'}}>{row.p2}</TableCell>
                                <TableCell sx={{fontSize: '14px'}}>{row.p3}</TableCell>
                                <TableCell sx={{fontSize: '14px'}}>{row.p4}</TableCell>
                                <TableCell sx={{fontSize: '14px'}}>{row.gs}</TableCell>
                                <TableCell sx={{fontSize: '14px'}}>{row.scheduled === "yes" ? <CheckIcon /> : <XIcon />}</TableCell>
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
        maxWidth="sm"
        sx={{ "& .MuiPaper-root": { borderRadius: 2 } }}
        >
         <Toolbar style={{background:'#213555'}}>
            <p style={{fontSize: '18px', fontWeight: 'semibold',color:'white'}}>Add Home Ice</p>
         </Toolbar>
        <DialogContent> 
          <DialogContentText>
              <Grid container spacing={2}>
                  <Grid item xl={4} lg={4} md={12} sm={12} xs={12}></Grid> 
                  <Grid item xl={8} lg={8} md={12} sm={12} xs={12}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Select Slot</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          value={league}
                          label="Select Team"
                          onChange={handleChange}
                          style={{ borderRadius: 10 }}
                        >
                          <MenuItem value={1}>Team A</MenuItem>
                          <MenuItem value={2}>Team B</MenuItem>
                          <MenuItem value={3}>Team C</MenuItem>
                        </Select>
                    </FormControl>
                  </Grid>          
                  <Grid item xl={4} lg={4} md={12} sm={12} xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span className="!mt-6">Priority 1</span>
                  </Grid>          
                  <Grid item xl={8} lg={8} md={12} sm={12} xs={12}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Select Team</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          value={league}
                          label="Select Team"
                          onChange={handleChange}
                          style={{ borderRadius: 10 }}
                        >
                          <MenuItem value={1}>Team A</MenuItem>
                          <MenuItem value={2}>Team B</MenuItem>
                          <MenuItem value={3}>Team C</MenuItem>
                        </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xl={4} lg={4} md={12} sm={12} xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span className="!mt-6">Priority 2</span>
                  </Grid>          
                  <Grid item xl={8} lg={8} md={12} sm={12} xs={12}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Select Team</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          value={league}
                          label="Select Team"
                          onChange={handleChange}
                          style={{ borderRadius: 10 }}
                        >
                          <MenuItem value={1}>Team A</MenuItem>
                          <MenuItem value={2}>Team B</MenuItem>
                          <MenuItem value={3}>Team C</MenuItem>
                        </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xl={4} lg={4} md={12} sm={12} xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span className="!mt-6">Priority 3</span>
                  </Grid>       
                  <Grid item xl={8} lg={8} md={12} sm={12} xs={12}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Select Team</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          value={league}
                          label="Select Team"
                          onChange={handleChange}
                          style={{ borderRadius: 10 }}
                        >
                          <MenuItem value={1}>Team A</MenuItem>
                          <MenuItem value={2}>Team B</MenuItem>
                          <MenuItem value={3}>Team C</MenuItem>
                        </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xl={4} lg={4} md={12} sm={12} xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span className="!mt-6">Priority 4</span>
                  </Grid>              
                  <Grid item xl={8} lg={8} md={12} sm={12} xs={12}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Select Team</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          value={league}
                          label="Select Team"
                          onChange={handleChange}
                          style={{ borderRadius: 10 }}
                        >
                          <MenuItem value={1}>Team A</MenuItem>
                          <MenuItem value={2}>Team B</MenuItem>
                          <MenuItem value={3}>Team C</MenuItem>
                        </Select>
                    </FormControl>
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
