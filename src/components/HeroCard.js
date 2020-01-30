import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { withStyles } from '@material-ui/core/styles';
import {  Link } from 'react-router-dom';
import StarIcon from '@material-ui/icons/Star';



const useStyles = theme => ({
  card: {
    maxWidth: 345,
    padding: theme.spacing(2),
    margin: 5,
    alignItems:'stretch', 
    [theme.breakpoints.up('lg')]: {
        width:300,
    },
    [theme.breakpoints.down('md')]: {
        width:500,
    },    
    [theme.breakpoints.down('sm')]: {
        width:300,
    },


  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  Start:{
    height: 38,
    width: 38,
    color:'#ff0'

  },
});

 class HeroCards extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      status:this.props.status
    }
    
  }
  _handlerLike = () => {
    const status = this.state.status;
    var isLike = null
    var disLike = null
    localStorage.getItem('isLike')?isLike=JSON.parse(localStorage.getItem('isLike')):isLike=[];
    localStorage.getItem('disLike')?disLike=JSON.parse(localStorage.getItem('disLike')):disLike=[];
    isLike = new Set(isLike)
    disLike = new Set(disLike)
    
    if (status !=='like'){ 
      this.setState({status:'like'})
      isLike.add(this.props.item.id)
      disLike.delete(this.props.item.id)
      
    }else{ 
      this.setState({status:''})
      isLike.delete(this.props.item.id)
    }
    
    isLike = Array.from(isLike);
    disLike = Array.from(disLike);
    localStorage.setItem('isLike',JSON.stringify(isLike))
    localStorage.setItem('disLike',JSON.stringify(disLike))
  }

  _handlerDislike = () => {
    const status = this.state.status;
    var isLike = null
    var disLike = null
    localStorage.getItem('isLike')?isLike=JSON.parse(localStorage.getItem('isLike')):isLike=[];
    localStorage.getItem('disLike')?disLike=JSON.parse(localStorage.getItem('disLike')):disLike=[];
    isLike = new Set(isLike)
    disLike = new Set(disLike)
    
    if (status !=='dislike'){ 
      this.setState({status:'dislike'})
      disLike.add(this.props.item.id)
      isLike.delete(this.props.item.id)
      
    }else{ 
      this.setState({status:''})
      disLike.delete(this.props.item.id)
    }
    
    isLike = Array.from(isLike);
    disLike = Array.from(disLike);
    localStorage.setItem('isLike',JSON.stringify(isLike))
    localStorage.setItem('disLike',JSON.stringify(disLike))
  }
  status = () => {
    var isLike=JSON.parse(localStorage.getItem('isLike'))
    var disLike=JSON.parse(localStorage.getItem('disLike'))
    var status = '';
    isLike&&isLike.includes(this.props.item.id)? status='like':disLike&&disLike.includes(this.props.item.id)?status='dislike':status='';
    return status;
    
  }
 
  
  render(){
  const { classes } = this.props;
  var status  = this.status();
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            H
          </Avatar>
        }
        action={
          <Link to={{
            pathname: '/detail/',
            params: {
              id: this.props.item.id
            }
          }}>
            <IconButton onClick={this.viewDetail} aria-label="settings">
              <VisibilityIcon />
            </IconButton>
          </Link>
        }
        title={this.props.item.name}
        subheader={this.props.item.publisher}
      />
      <CardMedia
        className={classes.media}
        image={this.props.item.picture}
        title="Paella dish"
      />
      <CardContent>
        
      </CardContent>
      {!this.props.ranking?<CardActions disableSpacing>
        <IconButton onClick={this._handlerLike}  aria-label="add to favorites">
          <ThumbUpIcon style={{color:status==='like'?'#0f0':''}} />
        </IconButton>
        <IconButton onClick={this._handlerDislike} aria-label="share">
          <ThumbDownIcon style={{color:status==='dislike'?'#f00':''}} />
        </IconButton>
        
      </CardActions>:
      <div style={{display:'flex',justifyContent:'center'}}>
        <StarIcon className={classes.Start}/>
        <Typography component="h5" variant="h5">
          {this.props.item.votes}
        </Typography>
      </div>
      }      
    </Card>
  );
      }
}

export default withStyles(useStyles)(HeroCards);