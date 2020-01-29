import React from 'react';
import { withStyles } from '@material-ui/core/styles';



const useStyles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(1),
    justifyContent: 'space-around',
    display: 'flex',
    flexWrap: 'wrap',
    height:200,
    backgroundColor:'#f00'
      
  },

});

class Header extends React.Component {
    
    render(){
        const { classes } = this.props;
    
        return (
            <div style={{}}className={classes.root}>
                
            </div>
        );
    }
}



export default withStyles(useStyles)(Header);