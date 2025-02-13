import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CartIcon from 'components/icons/menu-icons/CartIcon';
import { Grid } from '@mui/material';
import { color } from 'echarts';
import DashboardDivisionIcon from 'components/icons/dashboardDivision';
import DashboardTeamIcon from 'components/icons/dashboardTeams';
import DashboardGamesIcon from 'components/icons/dashboardGames';
import DashboardGamesRemainingIcon from 'components/icons/dashboardGamesRemaining';
const cards = [
  {
    id: 1,
    title: '10',
    bgColor: '!bg-blue-100',
    color: 'text-blue-600',
    icon: <DashboardDivisionIcon sx={{width: '40px',height: '40px'}} />,
    description: 'Total Divisions',
  },
  {
    id: 2,
    title: '240',
    bgColor: '!bg-orange-100',
    color: 'text-orange-400',
    icon: <DashboardTeamIcon sx={{width: '40px',height: '40px'}} />,
    description: 'Total Teams',
  },
  {
    id: 3,
    title: '240',
    bgColor: '!bg-red-100',
    color: 'text-red-600',
    icon: <DashboardGamesIcon sx={{width: '40px',height: '40px'}} />,
    description: 'Total Games',
  },
  {
    id: 3,
    title: '6',
    bgColor: '!bg-purple-100',
    color: 'text-purple-600',
    icon: <DashboardGamesRemainingIcon sx={{width: '40px',height: '40px'}} />,
    description: 'Games Remaining',
  },
];

const StatisticsCards = () => {
  const [selectedCard, setSelectedCard] = useState(0);
  return (
   
    <Box
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: 2,
      }}
    >
      {cards.map((card, index) => (
        
         <Card className={card.bgColor}>
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ? '' : undefined}
            sx={{
              height: '100%',
              '&[data-active]': {
                '&:hover': {
                  backgroundColor: 'action.selectedHover',
                },
              },
            }}
          >
            <CardContent className='flex flex-col gap-2 text-center' sx={{ height: '100%' }}>
              <span className={card.color}>
                {card.icon}
              </span>
              <Typography variant="h5" component="div" className={card.color}>
                <span className="text-4xl">{card.title}</span>
              </Typography>
              <Typography className={`text-base !font-semibold ${card.color}`}>
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>

  );
};

export default StatisticsCards;
