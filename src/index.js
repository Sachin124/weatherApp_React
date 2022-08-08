import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import './style/App.css'

class App extends React.Component{
    state = {lat: null, errorMessage:null};

    componentDidMount(){

        this.state = {lat: null, errorMessage: null};

        window.navigator.geolocation.getCurrentPosition(
            (position)=> this.setState({lat: position.coords.latitude}),
            (err)=> this.setState({errorMessage: err.message})
        )
    }

    renderContent = ()=>{
        if (!this.state.lat && this.state.errorMessage) {
            return(
                <div> <h1>Jay Shree Ganesha!</h1>
                Error:{this.state.errorMessage}</div>
            )
    }

    if (this.state.lat && !this.state.errorMessage) {
        return(
            <div> <h1>Jay Shree Ganesha!</h1>
            <SeasonDisplay lat={this.state.lat} />
            </div>
        )
    }

  //  if (!this.state.lat && !this.state.errorMessage) {
        return(
            <div> <h1>Jay Shree Ganesha!</h1>
            <Spinner message="Please accept location request" /> </div>
        )
 //   }
    }
    
   
    render(){
      return <div className='border red'>
        {this.renderContent()}
      </div>
       
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));