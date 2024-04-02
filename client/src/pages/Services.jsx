import React, { useState, useEffect } from 'react'
import { getData } from '../api'
import ServiceCard from '../components/ServiceCard'
import { Grid } from '@mui/material'
import { useUser } from '../components/contexts/UserContext'
import { useAuth } from '../components/contexts/AuthContext'
const Services = () => {
  const [services, setServices] = useState(null)
  const { user } = useUser()
  const { isLoggedIn } = useAuth()
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
    <>
      {isLoggedIn &&
        <div style={{ textAlign: 'center' }}>
          <h1>Welcome, {user.name}</h1>
        </div>}
      <Grid container sx={{ justifyContent: 'space-evenly', paddingTop: '15px' }}>
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </Grid>
    </>
  )
}

export default Services
