import React, { useEffect, useState } from 'react'
import { useAuth } from '../../../components/contexts/AuthContext'
import ApptCard from './ApptCard'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const Appointments = () => {
  const { isLoggedIn, user, updateUser } = useAuth()
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDelete = async (apptObj, type) => {
    if (type === 'consumer') {
      const newConsumerList = user.consumer_bookings.filter(appt => appt.id !== apptObj.id)
      updateUser({ ...user, consumer_bookings: newConsumerList })
    }
    if (type === 'provider') {
      const newProviderList = user.provider.filter(appt => appt.id !== apptObj.id)
      setProvider(newProviderList)
    }
  }
  console.log('user', user)
  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Services Appointments" value="1" />
            <Tab label="Providers Appointments" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          {user.consumer_bookings.map(appt => <ApptCard key={appt.id} appt={appt} onDelete={() => handleDelete(appt, 'consumer')} isProvider={false} />)}
        </TabPanel>
        <TabPanel value="2">
          {user.provider_bookings.map(appt => <ApptCard key={appt.id} appt={appt} onDelete={() => handleDelete(appt, 'provider')} isProvider={true} />)}

        </TabPanel>
      </TabContext>
    </Box>
  )
}

export default Appointments
