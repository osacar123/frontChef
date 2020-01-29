import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { green } from '@material-ui/core/colors';
import Router from './routes';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './redux/store'

//const store = createStore(reducers,{});
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
      <Provider store={ store }>
        <BrowserRouter>
            <Router />
        </BrowserRouter>
      </Provider>   
    );
  }
}

export default withStyles(useStyles)(App);
