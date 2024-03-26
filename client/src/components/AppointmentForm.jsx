import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import DatePicker from 'react-datepicker'
import { Button, Grid, TextField } from '@mui/material'
import "react-datepicker/dist/react-datepicker.css"
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
  const [startDate, setStartDate] = useState(new Date());

  const formSchema = {}

  const formik = useFormik({
    initialValues: {
      name: '',
      date: Date.now(),
      time: ''
    },
    // validationSchema: formSchema,
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
          variant='standard' />
      </div>
      <div>
        <label>Date</label>
        <DatePicker
          id="date"
          name="date"
          selected={formik.values.date}
          onChange={(value) => {
            formik.setFieldValue('date', Date.parse(value))
          }}
          renderInput={(params) => <TextField {...params} />} />
      </div>
      {/* <Button>Make Appointment</Button> */}
    </form>
  )
}

export default AppointmentForm
