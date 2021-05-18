import React from "react";

const FaceRecognition = ({imageUrl}) => {
    return (
        <>
            <div className="face-recognition center pa5 mt5">
                <img src={imageUrl} alt="celebrity pic"/>
            </div>
        </>
    );
}

export default FaceRecognition;
