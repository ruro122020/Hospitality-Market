import React from 'react'
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import { Grid } from '@mui/material';
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  const { title, description, location, price, user, category } = service
  const navigate = useNavigate()
  return (
    <Grid sx={{ display: 'flex', paddingBottom: '30px' }} >
      <Card sx={{ width: 320 }}>
        <div>
          <Typography level="title-lg">{title}</Typography>
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
        <div>
          <Typography level="body-sm" sx={{}}>{description}</Typography>
        </div>
        <CardContent orientation="horizontal"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
          <div style={{ marginTop: 'auto' }}>
            <Typography level="body-xs">Rate:</Typography>
            <Typography fontSize="lg" fontWeight="lg">
              ${price}
            </Typography>
          </div>
          <Button
            variant="solid"
            size="md"
            color="primary"
            onClick={() => navigate('/')}
            sx={{ mt: 'auto', alignSelf: 'center', fontWeight: 600 }}
          >
            Book Appointment
          </Button>
        </CardContent>
      </Card>
    </Grid >
  )
}

export default ServiceCard
