import React, {useState} from "react";

const FaceRecognition = ({imageUrl}) => {
    const [img, imgSet] = useState('');
    const [isValid, setValid] = useState(false);

    React.useLayoutEffect(() => {
        const checkImage = async () => {
            try {
                const imageValid = await isImageValid(imageUrl)
                if (imageValid) {
                    imgSet(imageUrl);
                    setValid(true);
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
    }, [imageUrl, isValid])

    const setDefaultImageSettings = () => {
        imgSet('');
        setValid(false);
    }
    const isImageValid = async (imgUrl) => {
        let isValid = false;
        try {
            await fetch(imgUrl && imgUrl, {credentials:'same-origin'}).then(response => {
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
            <div className="face-recognition center p-5 mt-5">
                {
                    isValid ?
                        <div className="celebrity-image">
                            <img src={img}
                                 alt="celebrity pic" className="img-fluid img-celebrity"/>
                        </div>
                        : <div className="error-box p-3 m-3">
                            <h1 className="fs-1 text-off-white__0">Image not found</h1>
                        </div>
                }
            </div>
        </>
    );
}

export default FaceRecognition;
