import React, { useEffect, useState } from 'react'
import Form from './Form'
import { apiCheckSession } from '../../../api'
import { Button, Grid } from '@mui/material'
import ServiceCard from './ServiceCard'
import { post, update } from '../../../api'

const DServices = () => {
  const [showForm, setShowForm] = useState(false)
  const [services, setServices] = useState(null)
  const [editService, setEditService] = useState(null)
  const [isEdit, setIsEdit] = useState(false)

  useEffect(() => {
    const checkIfLoggedIn = async () => {
      const user = await apiCheckSession()
      if (user) {
        setServices(user.services)
      }
    }
    checkIfLoggedIn()
  }, [])
  const handleAddService = async (serviceObj) => {
    if (serviceObj) {
      const newService = await post('/api/services', serviceObj)
      setShowForm(false)
      setServices(prevState => [...prevState, newService])
    }
  }
  const handleDelete = (id) => {
    setServices((prevState) => {
      return prevState.filter(service => service.id !== id)
    })
  }

  const handleEdit = async (serviceObj) => {
    const newService = await update(`/api/services/${serviceObj.id}`, serviceObj)
    const newServiceList = services.map(service => {
      if (service.id === newService.id) {
        return newService
      } else {
        return service
      }
    })
    setServices(newServiceList)
    setEditService({})
    setShowForm(false)
    setIsEdit(false)
  }

  const receiveServiceObj = (serviceObj) => {
    setIsEdit(true)
    setEditService(serviceObj)
    setShowForm(true)
  }

  if (!services) return <div>Loading Services ...</div>
  return (
    <div>
      <h1>Services</h1>
      <Button onClick={() => setShowForm(!showForm)}> {showForm ? '-' : '+'} Service</Button>
      {isEdit ?
        showForm && <Form onSubmit={handleEdit} initialValues={editService} />
        :
        showForm && <Form onSubmit={handleAddService} initialValues={{
          title: '',
          description: '',
          price: '',
          location: '',
          category: ''
        }}
        />}


      <Grid container sx={{ display: 'flex', justifyContent: 'space-evenly', paddingTop: '15px' }}>
        {services.map(service => <ServiceCard
          key={service.id}
          service={service}
          onDelete={handleDelete}
          onEdit={receiveServiceObj} />)}
      </Grid>

    </div>
  )
}

export default DServices
