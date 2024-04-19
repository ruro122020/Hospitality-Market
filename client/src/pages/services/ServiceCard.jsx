import React, { useState } from 'react'
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import PopupForm from '../../components/PopupForm';
import { useAuth } from '../../components/contexts/AuthContext'

const ServiceCard = ({ service }) => {
  const { title, description, location, price, user, category } = service
  const [open, setOpen] = React.useState(false)
  const { isLoggedIn } = useAuth()
  const navigate = useNavigate()

  const handleClickOpen = () => {
    if (isLoggedIn) {
      setOpen(true);
    } else {
      navigate('/login')
    }
  };

  return (
    <Grid sx={{
      display: 'flex',
      paddingBottom: '30px',
      paddingRight: '30px',
      textAlign: 'center'
    }} >
      <Card sx={{ width: 320 }}>
        <div>
          <Typography level="title-lg">{user.name}</Typography>
          <Typography level="body-sm">{location}</Typography>
          <IconButton
            aria-label="bookmark Bahamas Islands"
            variant="plain"
            color="neutral"
            size="sm"
            sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
          >
            <BookmarkAdd />
          </IconButton>
        </div>
        <AspectRatio minHeight="120px" maxHeight="200px">
          <img
            src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
            srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <CardContent orientation="horizontal"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
          <Typography level="title-lg">{title}</Typography>
          <div>
            <Typography level="body-sm" >{description}</Typography>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', paddingTop: '12px' }}>
            <div>
              <Typography level="body-xs">Rate:</Typography>
              <Typography fontSize="lg" fontWeight="lg">
                ${price}
              </Typography>
            </div>
            <div>
              <Button variant="outlined" onClick={handleClickOpen}>
                Book Appointment
              </Button>
            </div>
          </div>

          <PopupForm setOpen={setOpen} open={open} service={service} />
        </CardContent>
      </Card>
    </Grid >
  )
}

export default ServiceCard
