import React, { useState, useEffect } from 'react'
import { apiServices } from '../api'
import ServiceCard from '../components/ServiceCard'
import { Grid } from '@mui/material'

const Services = () => {
  const [services, setServices] = useState(null)
  useEffect(() => {
    const getServices = async () => {
      const services = await apiServices()
      if (!services) {
        console.log('services', services)
      }
      setServices(services)
    }
    getServices()
  }, [])

  if (!services) return <p>Server Not Responding</p>

  return (
    <Grid container >
      {services.map(service => (
        <Grid xs={3}>
          <ServiceCard key={service.id} service={service} />
        </Grid>
      ))}
    </Grid>
  )
}

export default Services
