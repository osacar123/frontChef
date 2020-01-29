import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { green } from '@material-ui/core/colors';
import Router from './routes';
import { BrowserRouter } from 'react-router-dom';


const useStyles = theme => ({
  root: {
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      backgroundColor: '#f0f',
    },
    [theme.breakpoints.up('lg')]: {
      backgroundColor: theme.palette.primary.main,
    },
    [theme.breakpoints.up('xl')]: {
      backgroundColor: green[500],
    },
  },
});

class App extends React.Component {  
  render(){
    const { classes } = this.props;
    return (      
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    );
  }
}

export default withStyles(useStyles)(App);
