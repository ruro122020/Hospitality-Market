import React from 'react'
import { useFormik, userFormik } from 'formik'

const Form = () => {

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      price: '',
      location: '',
      category: ''
    },
    // validationSchema: formSchema,
    onSubmit: async (values) => {
      console.log('values in onSubmit', values)
    }
  })

  return (
    <Grid>
      <h1>Service Form</h1>
      <form>

      </form>
    </Grid>
  )
}

export default Form
