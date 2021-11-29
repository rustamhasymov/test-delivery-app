import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PackageList from './pages/PackageList';
import CustomerList from './pages/CustomerList';
import Invoices from './pages/Invoices';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


import './App.css';

function App() {
  const [showMenu, setShowMenu] = useState(false);

  

  return (
    <div className="App">
      <Router>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => setShowMenu(true)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Mail Delivery Service
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
        <Drawer anchor={'left'} open={showMenu} onClose={() => setShowMenu(false)}>
          <List style={{ width: '300px' }}>
            <ListItem button>
              <Link to="/packages">
                <ListItemText primary="Packages" />
              </Link>
            </ListItem>
            <ListItem button>
              <Link to="/customers">
                <ListItemText primary="Customers" />
              </Link>
            </ListItem>
            <ListItem button>
              <Link to="/invoices">
                <ListItemText primary="Invoices" />
              </Link>
            </ListItem>
          </List>
        </Drawer>

        <Switch>
          <Route path="/packages">
            <PackageList />
          </Route>
          <Route path="/customers">
            <CustomerList />
          </Route>
          <Route path="/invoices">
            <Invoices />
          </Route>
        </Switch>

        

        

        
      </Router>
    </div>
  );
}

export default App;
