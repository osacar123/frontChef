import React, { Component } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { withStyles } from '@material-ui/core/styles';
import { ranking } from '../../services/api'
import HeroCard from '../../components/HeroCard'


const useStyles = theme => ({
  

});

class Ranking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          data:[],
          windowSize: "",
          thumbWidth: 75,
          slidesPerPage:3
          
        }
        this._handleList();
    }

    _handleList = () => {
        ranking()
        .then( res=> {
            console.log(res.data)
            this.setState({data:res.data})                   
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
            return(<HeroCard ranking={true} item={i} />)
        })
    }


    handleResize = e => {
        const windowSize = window.innerWidth;
        const thumbWidth = (windowSize >= 480 && 100) || 75;
        if (windowSize>1100){
            this.setState({slidesPerPage:4})
        }
        if (windowSize<1100){
            this.setState({slidesPerPage:3})
        }
        if (windowSize<900){
            this.setState({slidesPerPage:2})
        }
        if (windowSize<600){
            this.setState({slidesPerPage:1})
        }
        this.setState(prevState => {
        return {
            windowSize,
            thumbWidth
        };
        });
    };


    componentDidMount() {
        this.handleResize();
        window.addEventListener("resize", this.handleResize);
      }
    
      componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
      }
    
    
    render() {
        return (
            <div>

                <Carousel
                    arrows
                    slidesPerPage={this.state.slidesPerPage}
                    slidesPerScroll={1}
                >
                    {this._renderList()}
                </Carousel>
            </div>
        );
      }
}



export default withStyles(useStyles)(Ranking);