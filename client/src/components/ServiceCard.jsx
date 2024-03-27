import React from 'react'
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import PopupForm from './PopupForm';


const ServiceCard = ({ service }) => {
  const { title, description, location, price, user, category } = service
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <Grid sx={{ display: 'flex', paddingBottom: '30px' }} >
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
        <Typography level="title-lg">{title}</Typography>
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
          <Button variant="outlined" onClick={handleClickOpen}>
            Book Appointment
          </Button>
          <PopupForm setOpen={setOpen} open={open} service={service} />
        </CardContent>
      </Card>
    </Grid >
  )
}

export default ServiceCard
