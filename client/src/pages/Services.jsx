import React, { useState, useEffect } from 'react'
import { apiServices } from '../api'
import ServiceCard from '../components/ServiceCard'

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
    <div>
      {services.map(service => <ServiceCard key={service.id} service={service} />)}
    </div>
  )
}

export default Services
