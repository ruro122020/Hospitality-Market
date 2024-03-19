import React, { useEffect, useState } from 'react'
import Form from './Form'
import { getData } from '../../../api'

const DServices = () => {
  const [createService, setCreateService] = useState(false)
  const [services, setServices] = useState(null)

  useEffect(() => {
    const fetchData = async () => {

    }
    fetchData()
  }, [])

  const handleServiceData = (newService) => {
    if (newService) {
      setCreateService(false)
    }
  }
  console.log('services', services)

  return (
    <div>
      <h1>Services</h1>
      <button onClick={() => setCreateService(true)}> + Service</button>
      {createService && <Form getServiceData={handleServiceData} />}

    </div>
  )
}

export default DServices
