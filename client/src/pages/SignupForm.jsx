import React from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup'

const SignupForm = () => {

  const formSchema = yup.object().shape({
    name: yup.string().required("Must enter a name").max(15),
    username: yup.string().required('Must enter username').max(25),
    email: yup.string().email("Invalid email").required('Must enter name'),
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
      console.log('values', values)
      //make post to api/signup
    }
  })
  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={formik.handleSubmit}>
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
        <label htmlFor='username'>Username</label>
        <input
          id='username'
          name='username'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          name='email'
          type='email'
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <label htmlFor='image_url'>Image</label>
        <input
          id='image_url'
          name='image_url'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.image_url}
        />
        <label htmlFor='Password'>Password</label>
        <input
          id='password'
          name='password'
          type='password'
          onChange={formik.handleChange}
          value={formik.values.password}
        />

        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default SignupForm
