import React, {Component} from "react";
import Navigation from "../components/Navigation/Navigation";
import Logo from "../components/Logo/Logo";
import ImageLinkForm from "../components/ImageLinkForm/ImageLinkForm";
import Rank from "../components/Rank/Rank";
import Particles from "react-particles-js";
import './App.css';

const particlesOptions = {
    "particles": {
        "number": {
            "value": 150,
            "density":{
                "value_area": 800,
                "enable": true
            },
        },
        "size": {
            "value": 5
        },
        "color": {
            "value": "#8cab98",
            "opacity": 0.8
        },
        "line_linked":{
            "color": {
                "value": "#8cab98",
                "opacity": 0.6
            }
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            }
        }
    }
}

class App extends Component {
    render() {
        return (
            <>
                <div className="App">
                    <Particles className='particles'
                               params={particlesOptions}/>
                    <Navigation/>
                    <Logo/>
                    <Rank/>
                    <ImageLinkForm/>
                    {/*<FaceRecognition />*/}
                </div>
            </>
        );
    }
}

export default App;