import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/contexts/AuthContext';

const SignupForm = () => {
  const [error, setError] = useState(false)
  let navigate = useNavigate()
  const { login } = useAuth()

  const formSchema = yup.object().shape({
    name: yup.string().required("Must enter a name").min(3),
    username: yup.string().required('Must enter username'),
    email: yup.string().email("Invalid email").required('Must enter email'),
    password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required')
  })

  const formik = useFormik({
    initialValues: {
      name: '',
      username: '',
      email: '',
      image_url: '',
      password: ''
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      fetch('/api/signup', {
        method: 'POST',
        mode: 'cors',
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(values)
      })
        .then(res => res.json())
        .then(user => {
          if (user.error === 'Unproccessable Entity') {
            setError(true)
          } else {
            login()
            navigate('/services')
          }
          console.log('user', user)
        })
        .catch(error => console.log('error', error))
    }
  })
  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={formik.handleSubmit}>
        {error && <div>User Already Exist</div>}
        <div>
          <label htmlFor='name'>Full Name</label>
          <input
            id='name'
            name='name'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name && (
            <div>{formik.errors.name}</div>
          )}
        </div>
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
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            name='email'
            type='email'
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div>{formik.errors.email}</div>
          )}
        </div>
        <div>
          <label htmlFor='image_url'>Image</label>
          <input
            id='image_url'
            name='image_url'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.image_url}
          />
          {formik.touched.image_url && formik.errors.image_url && (
            <div>{formik.errors.image_url}</div>
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
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default SignupForm
