import React, {useState} from "react";

const FaceRecognition = ({imageUrl}) => {
    const defaultPath = "errorbackground.jpg";
    const [img, imgSet] = useState(defaultPath);
    const [isValid, setValid] = useState(false);
    const [showImage, setShowImage] = useState(false);

    React.useLayoutEffect(() => {
        const checkImage = async () => {
            try {
                const imageValid = await isImageValid(imageUrl)
                if (imageValid) {
                    imgSet(imageUrl);
                    setValid(true);
                    setShowImage(true);
                } else {
                    setDefaultImageSettings();
                }
            } catch (err) {
                setDefaultImageSettings();
            }
        }
        if (imageUrl && imageUrl) {
            checkImage();
        }
    }, [imageUrl, isValid, showImage])

    const setDefaultImageSettings = () => {
        imgSet(defaultPath);
        setValid(false);
        setShowImage(false);
    }
    const isImageValid = async (imgUrl) => {
        let isValid = false;
        try {
            await fetch(imgUrl && imgUrl).then(response => {
                isValid = response && response.ok && (response.type === "cors")
            }).catch(() => {
                isValid = false;
            })
        } catch {
            isValid = false;
        }
        return isValid;
    }

    return (
        <>
            <div className="face-recognition center pa5 mt5">
                <img src={img}
                     alt="celebrity pic"/>
            </div>
        </>
    );
}

export default FaceRecognition;
