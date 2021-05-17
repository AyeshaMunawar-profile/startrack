import React, {Component} from "react";
import Navigation from "../components/Navigation/Navigation";
import Logo from "../components/Logo/Logo";
import ImageLinkForm from "../components/ImageLinkForm/ImageLinkForm";
import Rank from "../components/Rank/Rank";
import Particles from "react-particles-js";
import Clarifai from 'clarifai'
import './App.css';

const API_KEY = "e92c295461a84c32b581166305a711f3";

const faceRecognitionApp = new Clarifai.App({
    apiKey: API_KEY
});
const particlesOptions = {
    "particles": {
        "number": {
            "value": 150,
            "density": {
                "enable": true,
                "value_area": 1500
            }
        },
        "color": {
            "value": "#ffe25d",
        },
        "line_linked": {
            "enable": true,
            "opacity": 0.05
        },
        "move": {
            "direction": "random",
            "speed": 0.8
        },
        "size": {
            "value": 3
        },
        "opacity": {
            "anim": {
                "enable": true,
                "speed": 3,
                "opacity_min": 0.05
            }
        },

    },
    "interactivity": {
        "events": {
            "onclick": {
                "enable": true,
                "mode": "push"
            }
        },
        "modes": {
            "push": {
                "particles_nb": 1
            }
        }
    },
    "retina_detect": true,

}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            input: '',
            celebrityName: {},
            showCelebrityName: false
        }
    }

    onSearchChange = (event) => {
        this.setState({
            input: event.target.value
        });
        console.log(event.target.value);
    }
    onURLSubmit = (event) => {
        console.log(event.target.value);
        // this.setState({
        //     url:
        // })
        faceRecognitionApp.models.predict(Clarifai.CELEBRITY_MODEL, 'https://upload.wikimedia.org/wikipedia/commons/8/82/Damon_cropped.jpg')
            .then(response => console.log(response.outputs[0].data.regions[0].data.concepts[0].name))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <>
                <div className="App">
                    <Particles className='particles'
                               params={particlesOptions}/>
                    <Navigation/>
                    <Logo/>
                    <Rank/>
                    <ImageLinkForm
                        onSearchChange={this.onSearchChange}
                        onURLSubmit={this.onURLSubmit}/>
                    {/*<FaceRecognition />*/}
                </div>
            </>
        );
    }
}

export default App;