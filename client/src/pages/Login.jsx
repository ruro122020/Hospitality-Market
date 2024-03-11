import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../components/contexts/AuthContext'
import { apiLogin } from '../api'
const Login = () => {
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
      console.log('success in login', success)
      if (success) {
        login()
        navigate('/services')
      }
    }
  })


  return (
    <>
      <h1>Login</h1>
      <form onSubmit={formik.handleSubmit}>
        {error && <div>Invalid Username or Password</div>}
        <div>
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            name='username'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          {formik.touched.username && formik.errors.username && (
            <div>{formik.errors.username}</div>
          )}
        </div>
        <div>
          <label htmlFor='Password'>Password</label>
          <input
            id='password'
            name='password'
            type='password'
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <div>{formik.errors.password}</div>
          )}
        </div>
        <button type='submit'>Login</button>
      </form>

    </>
  )
}

export default Login
