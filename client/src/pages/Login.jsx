import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'

const Login = () => {
  const [error, setError] = useState(false)
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
    onSubmit: (values) => {
      //make post to /api/login
      fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })
        .then(res => res.json())
        .then(user => {
          if (user.error === 'Unproccessable Entity') {
            setError(true)
          }
          console.log('login user', user)
        })
        .catch(error => console.log('error', error))
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
