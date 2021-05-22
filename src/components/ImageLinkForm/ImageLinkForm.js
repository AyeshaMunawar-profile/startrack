import React from "react";
import './ImageLinkForm.css';

const ImageLinkForm = ({onSearchChange, onURLSubmit}) => {
    return (
        <>
            <div
                className="image-link-form mt-5 d-flex flex-column flex-nowrap justify-content-center align-items-center">
                <p className="fs-1 f-subheadline-m m5 text-yellow__0 text-center mb-5">{'This app will detect faces in your pictures ... Take it at face value '}</p>
                <div className="input-box w-75 text-center shadow">
                    <div className="p-4">
                        <input type='url' name="url" id='url' className='fs-4 p-3 w-75 input' onChange={onSearchChange}
                               placeholder={"Enter URL"}/>
                        <button className="btn-detect w-25 grow fs-3 link p-3 text-off-white__0 button-color-red__0"
                                type='submit'
                                onClick={onURLSubmit}>Detect
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ImageLinkForm;
