import React, { useEffect, useState } from 'react'
import { useAuth } from '../../../components/contexts/AuthContext'
import { useUser } from '../../../components/contexts/UserContext'
import ApptCard from './ApptCard'
import { apiCheckSession } from '../../../api'

const Appointments = () => {
  const { isLoggedIn } = useAuth()
  const { setUser, user } = useUser()
  useEffect(() => {
    const getUser = async () => {
      if (isLoggedIn) {
        const user = await apiCheckSession()
        setUser(user)
      }
    }
    getUser()
  }, [])
  return (
    <div>
      <h1>Service Appointment</h1>
      {user && user.consumer_bookings.map(appt => <ApptCard key={appt.id} appt={appt} />)}
    </div>
  )
}

export default Appointments
