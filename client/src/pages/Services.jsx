import React, { useState, useEffect } from 'react'
import { getData } from '../api'
import ServiceCard from '../components/ServiceCard'
import { Grid } from '@mui/material'

const Services = () => {
  const [services, setServices] = useState(null)
  useEffect(() => {
    const getServices = async () => {
      const services = await getData('/api/services')
      if (!services) {
        console.log('services', services)
      }
      setServices(services)
    }
    getServices()
  }, [])

  if (!services) return <p>Server Not Responding</p>

  return (
    <Grid container sx={{ display: 'flex', justifyContent: 'space-evenly', paddingTop: '15px' }}>
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </Grid>
  )
}

export default Services
