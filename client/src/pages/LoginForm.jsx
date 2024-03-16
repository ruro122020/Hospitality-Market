import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../components/contexts/AuthContext'
import { apiLogin } from '../api'
import { NavLink } from 'react-router-dom'
import { Grid, TextField, FormControl, Button } from '@mui/material'

const LoginForm = () => {

  const [error, setError] = useState(false)
  const { login } = useAuth()
  let navigate = useNavigate()

  const formSchema = yup.object().shape({
    username: yup.string().required('Must enter username'),
    password: yup.string().required('Must enter password')
  })
  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: formSchema,
    onSubmit: async (values) => {
      const success = await apiLogin(values)
      if (success) {
        login()
        navigate('/services')
      }
    }
  })

  return (
    <Grid container sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
      <h1>Login</h1>
      <FormControl onSubmit={formik.handleSubmit}>
        {error && <div>Invalid Username or Password</div>}
        <div>
          <TextField
            id='username'
            name='username'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.username}
            label='Username'
            variant='standard'
          />
          {formik.touched.username && formik.errors.username && (
            <div>{formik.errors.username}</div>
          )}
        </div>
        <div>
          <TextField
            id='password'
            name='password'
            type='password'
            onChange={formik.handleChange}
            value={formik.values.password}
            label='Password'
            variant='standard'
          />
          {formik.touched.password && formik.errors.password && (
            <div>{formik.errors.password}</div>
          )}
        </div>
        <div style={{ paddingTop: '12px' }}>
          <Button variant='outlined' type='submit' >Login</Button>
        </div>
      </FormControl>
      <p>
        Don't have an account? &nbsp;
        <Button sx={{ textDecoration: 'none' }} as={NavLink} to='/signup' onClick={() => setShowLogin(false)}> Sign Up</Button>
      </p>
    </Grid>
  )
}

export default LoginForm
