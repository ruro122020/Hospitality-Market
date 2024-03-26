import React, { useEffect, useState } from 'react'
import { apiCheckSession } from '../../api'

const Appointments = () => {
  const [providerBookings, setProviderBookings] = useState(null)
  const [consumerBookings, setConsumerBookings] = useState(null)
  useEffect(() => {
    const checkIfLoggedIn = async () => {
      const user = await apiCheckSession()
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
