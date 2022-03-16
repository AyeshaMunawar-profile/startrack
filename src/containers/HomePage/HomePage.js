import React, { useState } from "react";
import ImageLinkForm from "../../components/ImageLinkForm/ImageLinkForm";
import ErrorBoundary from "../../components/common/components/ErrorBoundary/ErrorBoundary";
import FaceRecognition from "../../components/FaceRecognition/FaceRecognition";
import Clarifai from "clarifai";
import { displaySimpleAlert } from "../../components/common/js/Alert/Alert";
const API_KEY = "e92c295461a84c32b581166305a711f3";
const faceRecognitionApp = new Clarifai.App({
  apiKey: API_KEY,
});

const HomePage = () => {
  const [input, setInput] = useState("");
  const [celebrityName, setCelebrityName] = useState("");
  const [box, setBox] = useState("");

  const onSearchChange = (event) => {
    setInput(event.target.value);
  };

  const predictCelebrity = () => {
    faceRecognitionApp.models
      .predict(Clarifai.CELEBRITY_MODEL, input)
      .then((response) => {
        displayBoundingBox(calculateBoundingBoxDimensions(response));
        const name = response.outputs[0].data.regions[0].data.concepts[0].name;
        if (name) {
          console.log("My guess is ... :", name);
          setCelebrityName(name);
        }
      })
      .catch((err) => {
        displaySimpleAlert(
          "Oops!",
          "Something went wrong ... ",
          "Try again",
          "error"
        );
        console.log("Oops! something went wrong !", err);
      });
    console.log("celebrity predicted successfully !!!");
  };

  const onURLSubmit = () => {
    if (input) {
      predictCelebrity();
    } else {
      displaySimpleAlert("Empty Url", "Enter a valid URL", "OK", "error");
    }
  };

  const calculateBoundingBoxDimensions = (data) => {
    const boundingBox =
      data.outputs[0].data.regions[0].region_info.bounding_box;
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
        rightColumn: width - boundingBox.right_col * width,
        bottomRow: height - boundingBox.bottom_row * height,
      };
    }
  };

  const displayBoundingBox = (box) => {
    console.log(box);
    setBox(box);
  };

  return (
    <>
      <div className={"home-page"}>
        <ImageLinkForm
          onSearchChange={onSearchChange}
          onURLSubmit={onURLSubmit}
        />{" "}
        <ErrorBoundary>
          <FaceRecognition
            imageUrl={input && input}
            celebrityName={celebrityName}
            box={box}
          />{" "}
        </ErrorBoundary>{" "}
      </div>
    </>
  );
};

export default HomePage;
