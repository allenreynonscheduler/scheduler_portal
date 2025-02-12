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
import ViewIcon from 'components/icons/view';

const CategoriesPage = () => {
    const rows = [
      {
        team: 'Mightdrunks',
        number_of_games_scheduled: '10',
        number_of_home_games: '5',
        number_of_away_games: '5',
        home_ice: '4/5',
        last_match_up: 'Jan. 20, 2025',
      },
    ];
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ mt: 1 }}>
           <Card sx={{ py: { xs: 2, sm: 3 }, px: { xs: 2, sm: 3 }, bgcolor: 'common.white' ,height:'75vh'}}>
              <p className="!mb-4" style={{fontSize: '18px', fontWeight: 'bold', display: 'flex',gap: '10px'}}>Team Stats</p>
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
                              <TableCell sx={{fontSize: '16px'}}>Team</TableCell>
                              <TableCell sx={{fontSize: '16px'}}># of Games Scheduled</TableCell>
                              <TableCell sx={{fontSize: '16px'}}># of Home Games</TableCell>
                              <TableCell sx={{fontSize: '16px'}}># of Away Games</TableCell>
                              <TableCell sx={{fontSize: '16px'}}>Home Ice</TableCell>
                              <TableCell sx={{fontSize: '16px'}}>Last Match-up</TableCell>
                              <TableCell sx={{fontSize: '16px'}}>View Survey Data</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {rows.map((row, index) => (
                              <TableRow key={index}>
                                <TableCell sx={{fontSize: '14px'}}>{row.team}</TableCell>
                                <TableCell sx={{fontSize: '14px'}}>{row.number_of_games_scheduled}</TableCell>
                                <TableCell sx={{fontSize: '14px'}}>{row.number_of_home_games}</TableCell>
                                <TableCell sx={{fontSize: '14px'}}>{row.number_of_away_games}</TableCell>
                                <TableCell sx={{fontSize: '14px'}}>{row.home_ice}</TableCell>
                                <TableCell sx={{fontSize: '14px'}}>{row.last_match_up}</TableCell>
                                <TableCell sx={{fontSize: '14px', width: '15%'}}>
                                  <Button size="small" variant="text">
                                    <ViewIcon sx={{width: '18px',height: '18px'}} />
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
    </Grid>
  );
};

export default CategoriesPage;
