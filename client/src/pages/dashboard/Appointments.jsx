import React, { useEffect, useState } from 'react'
import { useUser } from '../../components/contexts/UserContext'

const Appointments = () => {
  const { user } = useUser()
  const [providerBookings, setProviderBookings] = useState(null)
  const [consumerBookings, setConsumerBookings] = useState(null)
  useEffect(() => {
    const checkIfLoggedIn = async () => {
      if (user) {
        setProviderBookings(user.provider_bookings)
        setConsumerBookings(user.consumer_bookings)
      }
    }
    checkIfLoggedIn()
  }, [])

  return (
    <div>
      List of Users Appointments
    </div>
  )
}

export default Appointments
