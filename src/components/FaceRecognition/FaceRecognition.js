import React, { useState, useRef } from "react";
import axios from "axios";
import { displaySimpleAlert } from "../common/js/Alert/Alert";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, celebrityName, box }) => {
  const [img, imgSet] = useState("");
  const [isValid, setValid] = useState(false);
  const firstUpdate = useRef(true);

  React.useLayoutEffect(() => {
    // donnot run uselayout effect for the frist render
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    } else {
      const checkImage = async () => {
        try {
          const imageValid = await isImageValid(imageUrl);
          if (imageValid) {
            imgSet(imageUrl);
            setValid(imageValid);
          } else {
            displaySimpleAlert(
              "Ooops !",
              "Image not found ... check your URL again",
              "OK",
              "error"
            );
            setDefaultImageSettings();
          }
        } catch (err) {
          displaySimpleAlert(
            "Ooops !",
            "The image URL is invalid",
            "OK",
            "error"
          );
          setDefaultImageSettings();
        }
      };
      if (imageUrl && imageUrl) {
        checkImage();
      } else {
        displaySimpleAlert("Empty Url", "Enter a valid URL", "OK", "error");
      }
    }
  }, [imageUrl, isValid]);

  const setDefaultImageSettings = () => {
    imgSet("");
    setValid(false);
  };
  const isImageValid = async (imgUrl) => {
    let isImageValid = false;

    try {
      const response = await axios.get(imgUrl, {
        headers: {},
      });
      if (response) {
        isImageValid = response && response.data && response.status === 200;
      }
    } catch (error) {
      console.error("Image no found" + error);
      isImageValid = false;
    }
    return isImageValid;
  };

  return (
    <>
      <div className="face-recognition center p-5 mt-5">
        {isValid && img ? (
          <div className="celebrity-image text-center text-white">
            <h1 className="celebrity-name fs-1 mb-5 fw-normal">
              {celebrityName
                ? "My Guess is : " + celebrityName.toString().toUpperCase()
                : "Searching ..."}
            </h1>
            <div className="image-box">
              <img
                src={img}
                alt="celebrity-pic"
                className="mt-5 img-fluid img-celebrity "
                id="celebrity-image"
              />
              {box && (
                <div
                  className="bounding-box"
                  style={{
                    top: box.topRow,
                    right: box.rightColumn,
                    bottom: box.bottomRow,
                    left: box.leftColumn,
                  }}
                />
              )}
            </div>
          </div>
        ) : (
          <div className="error-box p-3 m-3">
            <h1 className="fs-2 text-off-white__1 fw-normal error-message">
              {img ? "Ooops! Image not found" : ""}
            </h1>
          </div>
        )}
      </div>
    </>
  );
};

export default FaceRecognition;
