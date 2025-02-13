import { Box, Grid} from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PageHeader from 'components/common/PageHeader';
// import TeamMembers from 'components/sections/dashboard/members/TeamMembers';
// import OrdersSection from 'components/sections/dashboard/orders/OrdersSection';
// import ProgressTracker from 'components/sections/dashboard/progressTracker/ProgressTracker';
// import SalesSection from 'components/sections/dashboard/sales/SalesSection';
// import StatisticsCards from 'components/sections/dashboard/statistics/StatisticCards';

// import TodoList from 'components/sections/dashboard/todos/TodoList';
// import TopProductsTable from 'components/sections/dashboard/topProducts/TopProductsTable';
// import TransactionTable from 'components/sections/dashboard/transactions/TransactionTable';
import BoxCards from 'components/sections/dashboard/BoxCards';

const Dashboard = () => {
  return (
      <Grid container spacing={2} justifyContent="center" alignItems="center" className="!pt-2">
        <Grid item xs={12} lg={12}>
          <BoxCards />
        </Grid>
        <Grid item xs={12} lg={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={5}>
              <Card className="h-full">
                <CardContent>
                  <Typography variant="body1" color="initial">Games Today</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} lg={7}>
              <Grid container spacing={2} flexDirection="column">
                <Grid item>
                  <Card className="h-full">
                    <CardContent>
                      <Typography variant="body1" color="initial">Incoming</Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item>
                  <Card className="h-full">
                    <CardContent>
                      <Typography variant="body1" color="initial">Most Games Played</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  );
};

export default Dashboard;
