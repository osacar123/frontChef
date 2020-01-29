import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import HeroCard from '../../components/HeroCard'


const useStyles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(1),
    justifyContent: 'space-around',
    display: 'flex',
    flexWrap: 'wrap',   
  },

});

class Header extends React.Component {
    
    render(){
        const { classes } = this.props;
    
        return (
            <div className={classes.root}>
            <HeroCard />
            <HeroCard />
            <HeroCard />
            <HeroCard />
            <HeroCard />
            <HeroCard />
            <HeroCard />
            
        </div>
        );
    }
}



export default withStyles(useStyles)(Header);