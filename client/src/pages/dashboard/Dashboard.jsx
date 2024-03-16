import React from 'react'
import Box from '@mui/material/Box';
import DashboardNav from '../../components/DashboardNav';
import { Outlet } from 'react-router-dom';
import { Toolbar } from '@mui/material';
const Dashboard = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      {/**This is the side bar */}
      <DashboardNav />

      <Outlet />
    </Box>
  )
}

export default Dashboard
