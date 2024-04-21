import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { NavLink, useLocation } from 'react-router-dom';

const pages = [{
  route: '/user',
  page: 'Appointments'
},
{
  route: '/user/services',
  page: 'Services'
}
]
const drawerWidth = 200;

const DashboardNav = () => {
  const location = useLocation()
  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          zIndex: 0,
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }} >
          <List sx={{ paddingTop: '12px' }}>
            {pages.map(({ route, page }) => (
              <ListItem key={page} >
                <ListItemButton selected={location.pathname === route} as={NavLink} to={route}>
                  <ListItemText primary={page} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

    </>
  )
}

export default DashboardNav
