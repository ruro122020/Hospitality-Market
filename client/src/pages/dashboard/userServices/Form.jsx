import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { Button, TextField } from '@mui/material'
import Grid from '@mui/material/Grid'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import * as yup from 'yup'

const Form = ({ onSubmit, initialValues, onCancel }) => {
  const formSchema = yup.object().shape({
    title: yup.string().required('Must have a title'),
    description: yup.string().required('Must have a description'),
    price: yup.number().typeError('This field can only take numbers').required('Must have a price').positive().integer(),
    location: yup.string().required('Must have a location'),
    category: yup.string().required('Must have a category')
  })
  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: formSchema,
    onSubmit: async (values, { resetForm }) => {
      onSubmit(values)
      resetForm()
    }
  })

  return (
    <Grid container sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }} >
      <h2>Create Service</h2>
      <form onSubmit={formik.handleSubmit} style={{ display: 'flex', textAlign: 'center', justifyContent: 'space-around' }}>
        <div>
          <TextField
            id='title'
            name='title'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.title}
            label='Title'
            variant='standard' />
          {formik.touched.title && formik.errors.title && (
            <div style={{ color: 'red', paddingTop: '7px' }}>{formik.errors.title}</div>
          )}
        </div>
        <div>
          <TextField
            id='description'
            name='description'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.description}
            label='Description'
            variant='standard' />
          {formik.touched.description && formik.errors.description && (
            <div style={{ color: 'red', paddingTop: '7px' }}>{formik.errors.description}</div>
          )}
        </div>
        <div>
          <TextField
            id='price'
            name='price'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.price}
            label='Price'
            variant='standard' />
          {formik.touched.price && formik.errors.price && (
            <div style={{ color: 'red', paddingTop: '7px' }}>{formik.errors.price}</div>
          )}
        </div>
        <div>
          <TextField
            id='location'
            name='location'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.location}
            label='Location'
            variant='standard' />
          {formik.touched.location && formik.errors.location && (
            <div style={{ color: 'red', paddingTop: '7px' }}>{formik.errors.location}</div>
          )}
        </div>
        <FormControl variant="standard" sx={{ minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            name='category'
            value={formik.values.category}
            onChange={formik.handleChange}
            label="Category"
          >
            <MenuItem value='House Cleaning'>Cleaning</MenuItem>
            <MenuItem value='Landscaping'>Landscaping </MenuItem>
          </Select>
          {formik.touched.category && formik.errors.category && (
            <div style={{ color: 'red', paddingTop: '7px' }}>{formik.errors.category}</div>
          )}
          <div style={{ display: 'flex' }}>
            <Button onClick={() => onCancel()}>Cancel</Button>
            <Button type='submit' >Submit</Button>
          </div>
        </FormControl>
      </form>
    </Grid >
  )
}

export default Form
