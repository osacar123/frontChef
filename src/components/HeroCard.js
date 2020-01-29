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
});

 class HeroCards extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      status:''
    }
    
  }
  _handlerLike = () => {
    const status = this.state.status;
    status != 'like' ? this.setState({status:'like'}): this.setState({status:''})
  }
  _handlerDislike = () => {
    const status = this.state.status;
    status != 'dislike' ? this.setState({status:'dislike'}): this.setState({status:''})
  }
  viewDetail = () =>{
    //this.props.history.push("/otro/");
    
  }
  render(){
  const { classes } = this.props;
  
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
      <CardActions disableSpacing>
        <IconButton onClick={this._handlerLike}  aria-label="add to favorites">
          <ThumbUpIcon style={{color:this.state.status==='like'?'#0f0':''}} />
        </IconButton>
        <IconButton onClick={this._handlerDislike} aria-label="share">
          <ThumbDownIcon style={{color:this.state.status==='dislike'?'#f00':''}} />
        </IconButton>
        
      </CardActions>
      
    </Card>
  );
      }
}

export default withStyles(useStyles)(HeroCards);