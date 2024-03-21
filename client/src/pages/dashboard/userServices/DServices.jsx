import React, { useEffect, useState } from 'react'
import Form from './Form'
import { apiCheckSession } from '../../../api'
import { Button, Grid } from '@mui/material'
import ServiceCard from './ServiceCard'

const DServices = () => {
  const [createService, setCreateService] = useState(false)
  const [services, setServices] = useState(null)
  useEffect(() => {
    const checkIfLoggedIn = async () => {
      const user = await apiCheckSession()
      if (user) {
        setServices(user.services)
      }
    }
    checkIfLoggedIn()
  }, [])

  const handleServiceForm = (newService) => {
    if (newService) {
      setCreateService(false)
      setServices(prevState => [...prevState, newService])
    }
  }

  const deleteService = (id) => {
    setServices((prevState) => {
      return prevState.filter(service => service.id !== id)
    })
  }

  if (!services) return <div>Loading Services ...</div>
  return (
    <div>
      <h1>Services</h1>
      <Button onClick={() => setCreateService(true)}> + Service</Button>
      {createService && <Form getServiceData={handleServiceForm} />}
      <Grid container sx={{ display: 'flex', justifyContent: 'space-evenly', paddingTop: '15px' }}>
        {services.map(service => <ServiceCard key={service.id} service={service} handleDelete={deleteService} />)}
      </Grid>

    </div>
  )
}

export default DServices
