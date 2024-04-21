import React, { useState, useEffect } from 'react'
import { getData } from '../../api'
import ServiceCard from './ServiceCard'
import { Grid } from '@mui/material'
import { useAuth } from '../../components/contexts/AuthContext'

const Services = () => {
  const [services, setServices] = useState(null)
  const { isLoggedIn, user } = useAuth()
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

  if (!services) return <p>Loading ...</p>

  return (
    <Grid container sx={{ justifyContent: 'center' }} >
      {isLoggedIn &&
        <div >
          <h1>Welcome, {user.name}</h1>
        </div>}
      <Grid container sx={{ paddingTop: '12px', width: '100%' }}>
        <Grid container sx={{ paddingLeft: '10%', overflow: 'auto' }}>
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Services
