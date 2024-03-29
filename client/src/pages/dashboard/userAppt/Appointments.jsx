import React, { useEffect, useState } from 'react'
import { useAuth } from '../../../components/contexts/AuthContext'
import { useUser } from '../../../components/contexts/UserContext'
import ApptCard from './ApptCard'
import { apiCheckSession } from '../../../api'

const Appointments = () => {
  const { isLoggedIn } = useAuth()
  const [consumer, setConsumer] = useState(null)
  const [provider, setProvider] = useState(null)

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
  const handleDelete = async (apptObj) => {
    const newConsumerList = consumer.filter(appt => appt.id !== apptObj.id)
    setConsumer(newConsumerList)
  }
  return (
    <div>
      <h1>Service Appointment</h1>
      {consumer && consumer.map(appt => <ApptCard key={appt.id} appt={appt} onDelete={handleDelete} />)}
    </div>
  )
}

export default Appointments
