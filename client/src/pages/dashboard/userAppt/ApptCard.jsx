import React from 'react'
import Card from '@mui/joy/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const ApptCard = ({ appt }) => {
  const { date, time, status, service } = appt
  return (
    <Card>
      <CardContent>
        <Box>
          <Typography gutterBottom variant="h5" component="div">
            {service.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {service.description}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <Typography>
            Rate: ${service.price}
          </Typography>
          <Typography>
            {service.location}
          </Typography>
          <Typography>
            {date}
          </Typography>
          <Typography>
            {time}
          </Typography>
          <Typography>
            {status}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small">Cancel</Button>
      </CardActions>
    </Card>
  )
}

export default ApptCard
