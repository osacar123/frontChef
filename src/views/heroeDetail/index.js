import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { detail, updateVote } from '../../services/api';
import StarIcon from '@material-ui/icons/Star';





const useStyles = theme => ({
    card: {
        display: 'flex',
        height:500,
        maxWidth:800
        
      },
      details: {
        display: 'flex',
        flexDirection: 'column',
        height:'100%',
        //
        
               
      },
      content: {
        flex: '1 0 auto',
        justifyContent:'space-between'
      },
      cover: {
        width: 600,
        margin:10
      },
      controls: {
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
      },
      playIcon: {
        height: 38,
        width: 38,
        color:'#ff0'
      },

});

class HeroeDetail extends React.Component {
    constructor(props){
        super(props);
        this.state={
            data:{
                name:null
            }
        }
        this._handleDetailHero();
    }
    _handleDetailHero = () => {
        detail(this.props.location.params.id)
        //detail(1)
        .then( res=> {
            console.log(res.data)
            this.setState({data:res.data[0]})           
        })
        .catch((error)=> {
            console.log(error.response)
            this.setState({error_msj:'hay un error'})
            this.setState({error:true})
        })
    }

    _handleUpScore = () => {
        var data = this.state.data
        data.votes++;
        updateVote(this.props.location.params.id,data.votes)
        //detail(1)
        .then( res=> {
            console.log(res.data)
            this.setState({data:data})           
        })
        .catch((error)=> {
            console.log(error.response)
            this.setState({error_msj:'hay un error'})
            this.setState({error:true})
        })
    }
    
    render(){
        console.log(this.state)
        const { classes } = this.props;
    
        return (
            <div style={{ display:'flex',marginTop:25, justifyContent:'center', alignItems:'center'}}>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.cover}
                        image={this.state.data.picture}
                        title={this.state.data.name}
                    />
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                                {this.state.data.name}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {this.state.data.publisher}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {this.state.data.info}
                            </Typography>
                        </CardContent>
                        <div className={classes.controls}>                        
                            <IconButton onClick={this._handleUpScore} aria-label="play/pause">
                                <StarIcon className={classes.playIcon} />
                            </IconButton>

                            <Typography component="h5" variant="h5">
                                {this.state.data.votes}
                            </Typography>
                        </div>
                    </div>
                    
                </Card>
            </div>
        );
    }
}



export default withStyles(useStyles)(HeroeDetail);