import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CartIcon from 'components/icons/menu-icons/CartIcon';
import { Grid } from '@mui/material';
const cards = [
  {
    id: 1,
    title: '10',
    icon: <CartIcon />,
    description: 'Total Divisions',
  },
  {
    id: 2,
    title: '240',
    description: 'Total Teams',
  },
  {
    id: 3,
    title: '240',
    description: 'Total Games',
  },
  {
    id: 3,
    title: '6',
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
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
        gap: 2,
      }}
    >
      {cards.map((card, index) => (
        
         <Card>
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ? '' : undefined}
            sx={{
              height: '100%',
              '&[data-active]': {
                backgroundColor: 'action.selected',
                '&:hover': {
                  backgroundColor: 'action.selectedHover',
                },
              },
            }}
          >
            
       
            
            <CardContent sx={{ height: '100%' }}>
              <Typography variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
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
