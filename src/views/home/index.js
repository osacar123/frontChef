import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import HeroCard from '../../components/HeroCard'
import { listHeroes } from '../../services/api'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

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
      data:[],
      page:1,
    }
    this._handleListHeroes(this.state.page);
  }
  _handleListHeroes = (page) => {
    listHeroes(page)
    .then( res=> {
        console.log(res.data)
        this.setState({data:res.data.data}) 
        this.setState({count:res.data.total})
        this.setState({to:res.data.to})         
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
  _next = () => {
    if (this.state.to !== this.state.count){
    const page = this.state.page;
    this._handleListHeroes(this.state.page+1);
    this.setState({page:page+1})
    }
  }
  _preview = () => {
    if (this.state.to !== 9){
    const page = this.state.page;
    this._handleListHeroes(this.state.page-1);
    this.setState({page:page-1})
    }
  }

  render(){
    
    const { classes } = this.props;
    
    return (
      <div>
        <div className={classes.root}>
        {this._renderList()}
      </div>
      <div
       style={{display:'flex',justifyContent:'center',alignItems:'center'}}
      >
        <IconButton onClick={this._preview} aria-label="add to favorites">
          <ArrowBackIosIcon />
        </IconButton>
        <Typography variant="body1" color="textSecondary" component="p">
            {this.state.to-this.state.data.length}-{this.state.to} of {this.state.count}
        </Typography>
        <IconButton  onClick={this._next} aria-label="add to favorites">
          <ArrowForwardIosIcon />
        </IconButton>
      
        </div>
        </div>
    );
  }
}



export default withStyles(useStyles)(Home);