import { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CartIcon from 'components/icons/menu-icons/CartIcon';

const cards = [
  {
    id: 1,
    value: '10',
    icon: <CartIcon />,
    title: 'Total Divisions',
    bgcolor: '#dde8f6',
    color: '#0084ff',
  },
  {
    id: 2,
    value: '240',
    icon: <CartIcon />,
    title: 'Total Teams',
    bgcolor: '#f6eadd',
    color: '#ff8000',
  },
  {
    id: 3,
    value: '240',
    icon: <CartIcon />,
    title: 'Total Games',
    bgcolor: '#f6dddd',
    color: '#ff0000',
  },
  {
    id: 4,
    value: '6',
    icon: <CartIcon />,
    title: 'Games Remaining',
    bgcolor: '#f0e9f1',
    color: '#aa36b5',
  },
];

const StatisticsCards = () => {
  const [selectedCard, setSelectedCard] = useState(0);
  return (
    <Box
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
        gap: 2,
      }}
    >
      {cards.map((card, index) => (
        <Paper key={card.id} elevation={6} sx={{ borderRadius: 2, overflow: 'hidden' }}>
          <Card
            sx={{
              color: card.color,
              backgroundColor: card.bgcolor,
              height: '100%',
            }}
          >
            <CardActionArea
              onClick={() => setSelectedCard(index)}
              data-active={selectedCard === index ? '' : undefined}
              sx={{ height: '100%' }}
            >
              <CardContent className="text-center" sx={{ height: '100%' }}>
                {card.icon}
                <Typography variant="h5" component="div">
                  {card.value}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ color: card.color }}>
                  {card.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Paper>
      ))}
    </Box>
  );
};

export default StatisticsCards;
