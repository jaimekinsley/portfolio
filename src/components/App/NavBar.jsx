import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="title" color="inherit">
            <Link to="/projects" >Projects</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </>

  );
};

export default NavBar;
