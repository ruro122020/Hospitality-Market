import React, { useState } from 'react'
import Card from '@mui/joy/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { deleteData, update } from '../../../api';

const ApptCard = ({ appt, onDelete, isProvider }) => {
  const { date, time, status, service, id } = appt
  const [onStatus, setOnStatus] = useState(false)
  const [setStatus, setSetStatus] = useState(null)

  const deleteAppointment = async () => {
    const booking = await deleteData(`/api/bookings/${id}`)
    onDelete(appt)
  }
  const handleAcceptClick = async () => {
    const accept = await update(`/api/bookings/${id}`, {
      status: 'Accepted'
    })
    setOnStatus(true)
    setSetStatus(accept.status)
  }
  const handleRejectClick = async () => {
    const reject = await update(`/api/bookings/${id}`, {
      status: 'Declined'
    })
    setOnStatus(true)
    setSetStatus(reject.status)
  }
  console.log('appt', appt)
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
        <Box sx={{ display: 'flex', justifyContent: 'space-around' }} width={450}>
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
            {onStatus ? setStatus : status}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        {isProvider ?
          <>
            <Button onClick={handleRejectClick} size="small">Decline</Button>
            <Button onClick={handleAcceptClick} size="small">Accept</Button>
          </>
          :
          <Button onClick={deleteAppointment} size="small">Delete</Button>

        }
      </CardActions>
    </Card>
  )
}

export default ApptCard
