import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {  Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';



const useStyles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(1),
    justifyContent: 'space-between',
    display: 'flex',
    flexWrap: 'wrap',
    height:'10vh',
    backgroundColor:'#1972D2'
      
  },
  Start:{
    height: 50,
    width: 50,
    color:'#ff0',
    

  },

});

class Header extends React.Component {
    
    render(){
        const { classes } = this.props;
    
        return (
          <AppBar  position="static">
                <Toolbar>
                <Link to={{
                    pathname: '/',
                    
                  }}>
                  <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <HomeIcon />
                  </IconButton>
                  </Link>
                  <Typography component="h5" variant="h5" style={{fontWeight:'900',flexGrow: 1}}>
                    Liste su Heroe
                  </Typography>
                  
                  <Link to={{
                    pathname: '/ranking/',
                    
                  }}>
                    <IconButton  aria-label="settings">
                      <StarIcon className={classes.Start}/>
                    </IconButton>
                  </Link>
                </Toolbar>
            
          </AppBar>
        );
    }
}



export default withStyles(useStyles)(Header);