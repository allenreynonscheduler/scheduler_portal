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
        "day": "Wed",
        "date": "Sep. 04, 2025",
        "start": "7:30 PM",
        "arena": "North Park Arena",
        "gs": "0789"
      },
      {
        "day": "Fri",
        "date": "Sep. 06, 2025",
        "start": "6:45 PM",
        "arena": "Eastwood Stadium",
        "gs": "0321"
      },
      {
        "day": "Sat",
        "date": "Sep. 07, 2025",
        "start": "9:00 PM",
        "arena": "South Side Arena",
        "gs": "0912"
      },
      {
        "day": "Sun",
        "date": "Sep. 08, 2025",
        "start": "5:00 PM",
        "arena": "Downtown Sports Hall",
        "gs": "0654"
      },
      {
        "day": "Tue",
        "date": "Sep. 10, 2025",
        "start": "8:00 PM",
        "arena": "Westend Coliseum",
        "gs": "0478"
      },
      {
        "day": "Thu",
        "date": "Sep. 12, 2025",
        "start": "7:15 PM",
        "arena": "Central Stadium",
        "gs": "0823"
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
              <p className="!mb-4" style={{fontSize: '18px', fontWeight: 'bold', display: 'flex',gap: '10px'}}>Ice Slot</p>
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
                            <PlusIcon sx={{ mr: 1, width: 18, height: 18 }} /> Add Slot
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
                                <TableCell sx={{fontSize: '16px', width: '10%'}}>Day</TableCell>
                                <TableCell sx={{fontSize: '16px'}}>Date</TableCell>
                                <TableCell sx={{fontSize: '16px'}}>Start</TableCell>
                                <TableCell sx={{fontSize: '16px'}}>Arena</TableCell>
                                <TableCell sx={{fontSize: '16px'}}>GS</TableCell>
                                <TableCell sx={{fontSize: '16px', width: '15%'}}>Actions</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {rows.map((row, index) => (
                                <TableRow key={index}>
                                  <TableCell
                                    sx={{
                                      fontSize: "14px",
                                      background: 
                                        row.day === "Wed" ? "orange" :
                                        row.day === "Thu" ? "cyan" :
                                        row.day === "Fri" ? "lightgreen" :
                                        row.day === "Sat" ? "purple" :
                                        row.day === "Sun" ? "blue" :
                                        row.day === "Mon" ? "pink" :
                                        row.day === "Tue" ? "red" :
                                        "gray" // Default color
                                    }}
                                  >
                                    {row.day}
                                  </TableCell>
                                  <TableCell sx={{fontSize: '14px'}}>{row.date}</TableCell>
                                  <TableCell sx={{fontSize: '14px'}}>{row.start}</TableCell>
                                  <TableCell sx={{fontSize: '14px'}}>{row.arena}</TableCell>
                                  <TableCell sx={{fontSize: '14px'}}>{row.gs}</TableCell>
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
            <p style={{fontSize: '18px', fontWeight: 'semibold',color:'white'}}>Add Slot</p>
         </Toolbar>
        <DialogContent> 
          <DialogContentText>
              <Grid container spacing={2}>
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Select Arena</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          value={league}
                          label="Select Arena"
                          onChange={handleChange}
                          style={{ borderRadius: 10 }}
                        >
                          <MenuItem value={1}>Arena A</MenuItem>
                          <MenuItem value={2}>Arena B</MenuItem>
                          <MenuItem value={3}>Arena C</MenuItem>
                        </Select>
                    </FormControl>
                  </Grid>          
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <TextField
                      fullWidth
                      label="Date"
                      variant="outlined"
                      type="date"
                      InputProps={{
                        style: { borderRadius: 10, paddingRight: 8 },
                      }}
                    />     
                  </Grid>          
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <InputLabel>Start</InputLabel>
                    <TextField
                      fullWidth
                      placeholder="Start"
                      variant="outlined"
                      type="text"
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
