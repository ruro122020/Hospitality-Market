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
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { useFormik } from 'formik'
import * as yup from 'yup'


const ServiceCard = ({ service }) => {
  const { title, description, location, price, user, category } = service
  const navigate = useNavigate()
  const [open, setOpen] = React.useState(false);

  // const handleAppointment = () => {
  //   navigate('/user/appointment')

  // }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formSchema = yup.object().shape({
    name: yup.string().required("Must Enter Name"),
    date: yup.date().required("Must Enter Date and Time")
  })

  const formik = useFormik({
    initialValues: {
      name: '',
      date: null
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      console.log('values', values)
    }
  })

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
          <Dialog
            open={open}
            onClose={handleClose}
          >
            <DialogTitle>Book Service</DialogTitle>
            <form onSubmit={formik.handleSubmit}>
              <DialogContent>
                <DialogContentText>
                  To book an appointment please provide your full name, date and time.
                </DialogContentText>
                <TextField
                  id='name'
                  name='name'
                  type='text'
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  label='Full Name'
                  variant='standard'
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    label='Select Date and Time'
                    slotProps={{ textField: { variant: 'standard' } }}
                    value={formik.values.date ? dayjs(formik.values.date) : null}
                    onChange={(value) => formik.setFieldValue("date", value, true)}
                  />
                </LocalizationProvider>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type='submit'>Request Booking</Button>
              </DialogActions>
            </form>
          </Dialog>
        </CardContent>
      </Card>
    </Grid >
  )
}

export default ServiceCard
