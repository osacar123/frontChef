import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import HeroCard from '../../components/HeroCard'
import { listHeroes } from '../../services/api'

const useStyles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(1),
    justifyContent: 'space-around',
    display: 'flex',
    flexWrap: 'wrap',   
  },

});

class Home extends React.Component {  

  constructor(props) {
    super(props);
    this.state = {
      data:[{
        picture:''
      }]
    }
    this._handleListHeroes();
  }
  _handleListHeroes = () => {
    listHeroes()
    .then( res=> {
        console.log(res.data)
        this.setState({data:res.data.data})           
    })
    .catch((error)=> {
        console.log(error.response)
        this.setState({error_msj:'hay un error'})
        this.setState({error:true})
    })
  }
  _renderList = () => {
    const data = this.state.data;
    return data.map((i,n)=>{
      return(<HeroCard item={i} />)
    })
  }
  render(){
    const { classes } = this.props;
    
    return (
        <div className={classes.root}>
        {this._renderList()}
          
      </div>
    );
  }
}



export default withStyles(useStyles)(Home);