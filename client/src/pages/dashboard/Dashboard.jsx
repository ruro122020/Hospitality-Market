import React from 'react'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DashboardNav from '../../components/DashboardNav';
import { Outlet } from 'react-router-dom';
const Dashboard = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <DashboardNav />
      <Outlet />
      {/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography paragraph>
          list of Appointments
        </Typography>
      </Box> */}

    </Box>
  )
}

export default Dashboard
