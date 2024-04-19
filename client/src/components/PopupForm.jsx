import React, { useState } from 'react'
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
import Alert from '@mui/material/Alert';
import { useAuth } from './contexts/AuthContext'
import { post } from '../api'
import { useNavigate } from 'react-router-dom';
//this is connected to using the toLocaleString method
dayjs.extend(window.dayjs_plugin_customParseFormat);

const PopupForm = ({ setOpen, open, service }) => {
  const { user, updateUser } = useAuth()
  const navigate = useNavigate()
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
    onSubmit: async (values) => {
      const dateTime = values.date.$d
      const appointment = {
        name: values.name,
        date: dateTime.toLocaleString('default', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        }),
        time: dateTime.toLocaleString('default', {
          hour: '2-digit',
          minute: '2-digit',
        }),
        serviceId: service.id,
        //service object has the provider id in the nested user property
        providerId: service.user.id,
        consumerId: user.id,
        status: 'Pending'
      }
      const postedAppt = await post('/api/bookings', appointment)
      if (postedAppt) {
        handleClose()
        updateUser({ ...user, consumer_bookings: [...user.consumer_bookings, postedAppt] })
        navigate('/user')
      }
    }
  })

  return (
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
          <div>
            <TextField
              id='name'
              name='name'
              type='text'
              onChange={formik.handleChange}
              value={formik.values.name}
              label='Full Name'
              variant='standard'
            />
            {formik.touched.name && formik.errors.name && (
              <Alert severity="error">
                {formik.errors.name}
              </Alert>
            )}
          </div>
          <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              {/**DateTimePicker renders the calender with the time */}
              <DateTimePicker
                label='Select Date and Time'
                slotProps={{
                  textField: { variant: 'standard' },
                }}
                value={formik.values.date ? dayjs(formik.values.date) : null}
                onChange={(value) => formik.setFieldValue("date", value, true)}

              />
            </LocalizationProvider>
            {formik.touched.date && formik.errors.date && (
              <Alert severity="error">
                {formik.errors.date}
              </Alert>
            )}
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type='submit'>Request Booking</Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default PopupForm
