import React, { useEffect, useState } from 'react'
import { useAuth } from '../../../components/contexts/AuthContext'
import ApptCard from './ApptCard'
import { apiCheckSession } from '../../../api'

const Appointments = () => {
  const { isLoggedIn } = useAuth()
  const [consumer, setConsumer] = useState([])
  const [provider, setProvider] = useState([])
  useEffect(() => {
    const getUser = async () => {
      if (isLoggedIn) {
        const user = await apiCheckSession()
        setConsumer(user.consumer_bookings)
        setProvider(user.provider_bookings)
      }
    }
    getUser()
  }, [])

  const handleDelete = async (apptObj, type) => {
    if (type === 'consumer') {
      const newConsumerList = consumer.filter(appt => appt.id !== apptObj.id)
      setConsumer(newConsumerList)
    }
    if (type === 'provider') {
      const newProviderList = provider.filter(appt => appt.id !== apptObj.id)
      setProvider(newProviderList)
    }
  }
  return (
    <div>
      {!consumer.length && !provider.length && <h1>No Appointments</h1>}

      {consumer.length > 0 && (
        <>
          <h1>Service Appointments</h1>
          {consumer.map(appt => <ApptCard key={appt.id} appt={appt} onDelete={() => handleDelete(appt, 'consumer')} isProvider={false} />)}
        </>
      )}
      {provider.length > 0 && (
        <>
          <h1>Provider Appointments</h1>
          {provider.map(appt => <ApptCard key={appt.id} appt={appt} onDelete={() => handleDelete(appt, 'provider')} isProvider={true} />)}
        </>
      )}
    </div>
  )
}

export default Appointments
