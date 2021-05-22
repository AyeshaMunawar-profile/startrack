import React, {Component} from "react";
import Navigation from "../components/Navigation/Navigation";
import ImageLinkForm from "../components/ImageLinkForm/ImageLinkForm";
import Rank from "../components/Rank/Rank";
import FaceRecognition from "../components/FaceRecognition/FaceRecognition";
import Particles from "react-particles-js";
import Clarifai from 'clarifai'
import './App.css';
import ErrorBoundary from "../components/Common/ErrorBoundary/ErrorBoundary";
import SignInForm from "../components/SignInForm/SignInForm";

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
            celebrityName: '',
            box: {}
        }
    }

    onSearchChange = (event) => {
        this.setState({
            input: event.target.value
        });
    }

    calculateBoundingBoxDimensions = (data) => {
        const boundingBox = data.outputs[0].data.regions[0].region_info.bounding_box;
        const image = document.getElementById("celebrity-image");
        const width = image.offsetWidth;
        const height = image.offsetHeight;
        if (boundingBox && image) {
            return {
                // the Calarafai API returns the dimensions of the
                // bounding box in the form of percentages
                // we need to convert the percentages into the
                // dimensions relative to the image's width and height
                leftColumn: boundingBox.left_col * width,
                topRow: boundingBox.top_row * height,
                rightColumn: width - (boundingBox.right_col * width),
                bottomRow: height - (boundingBox.bottom_row * height)
            }
        }

    }

    displayBoundingBox = (box) => {
        console.log(box);
        this.setState({box: box});
    }

    predictCelebrity() {
        faceRecognitionApp.models.predict(Clarifai.CELEBRITY_MODEL, this.state.input)
            .then(response => {
                this.displayBoundingBox(this.calculateBoundingBoxDimensions(response));
                const name = response.outputs[0].data.regions[0].data.concepts[0].name;
                if (name) {
                    console.log("My guess is ... :", name)
                    this.setState({celebrityName: name});
                }
            })
            .catch(err => console.log("Ooops! something went wrong !"));
        console.log("celebrity predicted successfully !!!");
    }

    onURLSubmit = (event) => {
        this.setState({url: this.state.input}, this.predictCelebrity);
    }

    render() {
        return (
            <>
                <div className="App">
                    <Particles className='particles'
                               params={particlesOptions}/>
                    <Navigation/>
                    <SignInForm/>
                    <Rank/>
                    <ImageLinkForm
                        onSearchChange={this.onSearchChange}
                        onURLSubmit={this.onURLSubmit}/>

                    <ErrorBoundary>
                        <FaceRecognition
                            imageUrl={this.state.input && this.state.input}
                            celebrityName={this.state.celebrityName}
                            box={this.state.box}
                        />
                    </ErrorBoundary>
                </div>
            </>
        );
    }
}

export default App;