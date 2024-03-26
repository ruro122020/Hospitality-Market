import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Button, Grid, TextField } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';


/***
 * Form:
 * - consumer name
 * - date
 * - time
 * - send button
 * 
 * backend needs:
 * consumer_id
 * provider_id
 * service_id
 * date
 * time
 * status
 */

const AppointmentForm = () => {
  const formSchema = yup.object().shape({
    name: yup.string().required("Must Enter Name"),
    date: yup.date().required("Must Enter Date")
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
    <form onSubmit={formik.handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
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
      </div>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          label='Select Date and Time'
          slotProps={{ textField: { variant: 'standard' } }}
          value={formik.values.date ? dayjs(formik.values.date) : null}
          onChange={(value) => formik.setFieldValue("date", value, true)}
        />
      </LocalizationProvider>
      <Button>Make Appointment</Button>
    </form>
  )
}

export default AppointmentForm
