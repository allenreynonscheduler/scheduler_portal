import { Box, Grid } from '@mui/material';
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

      <Grid container spacing={1} justifyContent="center" alignItems="center">
        <Grid item xs={12} lg={12}>
          <BoxCards />
        </Grid>
      </Grid>
  );
};

export default Dashboard;
