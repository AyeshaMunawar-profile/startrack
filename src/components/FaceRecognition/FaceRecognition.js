import React, {useState} from "react";

const FaceRecognition = ({imageUrl}) => {
    const [img, imgSet] = useState(imageUrl && imageUrl);
    React.useLayoutEffect(() => {
        if (imageUrl) {
            imgSet(imageUrl)
        }
    }, [imageUrl])

    return (
        <>
            <div className="face-recognition center pa5 mt5">
                <img src={img} alt="celebrity pic"/>
            </div>
        </>
    );
}

export default FaceRecognition;
