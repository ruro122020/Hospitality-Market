import React from 'react'
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import { Grid } from '@mui/material';
import { getData, deleteData } from '../../../api'

const ServiceCard = ({ service, handleDelete }) => {
  const { id, title, category, description, location, price, user_id } = service

  const deleteService = async () => {
    const service = await deleteData(`/api/services/${id}`)
    handleDelete(id)
  }
  const handleEdit = () => { }

  return (
    <Grid sx={{ display: 'flex', paddingBottom: '30px', paddingRight: '15px' }} >
      <Card sx={{ width: 320 }}>
        <div>
          <Typography level="title-lg">{title}</Typography>
          <Typography level="body-sm">{location}</Typography>
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
          <div>
            <Button
              variant="solid"
              size="md"
              color="primary"
              onClick={handleEdit}
              sx={{ mt: 'auto', alignSelf: 'center', fontWeight: 600, backgroundColor: 'Orange' }}
            >
              Edit
            </Button>
            <Button
              variant="solid"
              size="md"
              color="primary"
              onClick={deleteService}
              sx={{ mt: 'auto', alignSelf: 'center', fontWeight: 600, backgroundColor: 'red' }}
            >
              Delete
            </Button>
          </div>
        </CardContent>
      </Card>
    </Grid >
  )
}

export default ServiceCard
