import * as React from 'react';
import { Box, Card, Grid, Stack, TextField, Typography, InputAdornment,Button,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, InputLabel } from '@mui/material';
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
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';

const TabPanel: React.FC<{ value: number; index: number; children: React.ReactNode }> = ({ value, index, children }) => {
  return (
    <Box hidden={value !== index} sx={{ p: 0 }}>
      {value === index && <Typography>{children}</Typography>}
    </Box>
  );
};

const CategoriesPage = () => {
  const [league, setleague] = React.useState('');
    const rows = [
      {
        id: '001',
        home: 'Pirates',
        away: 'Butt Pukers',
        division: 'Division 14',
        gs: '0786',
        scheduled: 'no',
      },
      {
        id: '001',
        home: 'Samsquanches',
        away: 'Yetis',
        division: 'Division 10',
        gs: '0544',
        scheduled: 'yes',
      },
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

    const [value, setValue] = React.useState(0);

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ mt: 1 }}>
           <Card sx={{ py: { xs: 2, sm: 3 }, px: { xs: 2, sm: 3 }, bgcolor: 'common.white' ,height:'75vh'}}>
              <p className="!mb-4" style={{fontSize: '18px', fontWeight: 'bold', display: 'flex', gap: '10px'}}>ABC</p>
              <Box sx={{ width: '100%', borderBottom: 1, borderColor: 'divider', marginBottom: 3 }} >
                <Tabs value={value} onChange={(_, newValue) => setValue(newValue)}
                  sx={{
                    "& .MuiTabs-indicator": { backgroundColor: "#213555" }, // Change underline color
                    "& .MuiTab-root": { color: "gray" }, // Default tab color
                    "& .MuiTab-root.Mui-selected": { color: "#213555", fontWeight: "bold"}, // Active tab color
                  }}
                >
                  <Tab label="List" sx={{fontSize: 14}} />
                  <Tab label="Import" sx={{fontSize: 14}} />
                </Tabs>
              </Box>

              <TabPanel value={value} index={0}>
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
                            <PlusIcon sx={{ mr: 1, width: 18, height: 18 }} /> Add ABC
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
                                <TableCell sx={{fontSize: '16px'}}>ABC Id</TableCell>
                                <TableCell sx={{fontSize: '16px'}}>Home</TableCell>
                                <TableCell sx={{fontSize: '16px'}}>Away</TableCell>
                                <TableCell sx={{fontSize: '16px'}}>Division</TableCell>
                                <TableCell sx={{fontSize: '16px'}}>GS</TableCell>
                                <TableCell sx={{fontSize: '16px'}}>Scheduled</TableCell>
                                <TableCell sx={{fontSize: '16px', width: '15%'}}>Actions</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {rows.map((row, index) => (
                                <TableRow key={index}>
                                  <TableCell sx={{fontSize: '14px'}}>{row.id}</TableCell>
                                  <TableCell sx={{fontSize: '14px'}}>{row.home}</TableCell>
                                  <TableCell sx={{fontSize: '14px'}}>{row.away}</TableCell>
                                  <TableCell sx={{fontSize: '14px'}}>{row.division}</TableCell>
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
              </TabPanel>
              <TabPanel value={value} index={1}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <TextareaAutosize
                    className="w-full text-sm leading-normal !p-3 rounded-lg border border-solid border-slate-300 bg-white text-slate-900 focus-visible:outline-0 box-border"
                    aria-label="empty textarea"
                    placeholder="Empty"
                    minRows={6}
                  />
                  <Grid container justifyContent="flex-end" spacing={1}>
                    <Grid item xs={10} sx={{ textAlign: 'end' }}>
                      <Button
                        sx={{
                          bgcolor: '#213555',
                          color: 'white',
                          fontSize: 14,
                          borderRadius: 2,
                          marginTop: 2,
                          '&:hover': { bgcolor: '#1a2c44' }, // Optional: Add hover effect
                        }}
                        variant="contained"
                        size="large"
                      > Import
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </TabPanel>
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
            <p style={{fontSize: '18px', fontWeight: 'semibold',color:'white'}}>Add ABC</p>
         </Toolbar>
        <DialogContent> 
          <DialogContentText>
              <Grid container spacing={2}>
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Select Division</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          value={league}
                          label="Select League"
                          onChange={handleChange}
                          style={{ borderRadius: 10 }}
                        >
                        <MenuItem value={10}>Capital City Recreational Hockey League</MenuItem>
                        </Select>
                    </FormControl>
                  </Grid>          
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Select Home</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          value={league}
                          label="Select League"
                          onChange={handleChange}
                          style={{ borderRadius: 10 }}
                        >
                        <MenuItem value={10}>Capital City Recreational Hockey League</MenuItem>
                        </Select>
                    </FormControl>
                  </Grid>          
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Select Away</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          value={league}
                          label="Select League"
                          onChange={handleChange}
                          style={{ borderRadius: 10 }}
                        >
                        <MenuItem value={10}>Capital City Recreational Hockey League</MenuItem>
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
