import React from "react";
import './ImageLinkForm.css';

const ImageLinkForm = () => {
    return (
        <>
            <div className="image-link-form mt6">
                <p className="f2 f1-l form-title ma5">{'This app will detect faces in your pictures ... Take it at face value '}</p>
                <div className="input-box w-70-l w-60-m w-80-ns center">
                    <div className="pa5 br3 shadow-5">
                        <input type='url' name="url" id='url' className='f4 pa3 w-70 center'/>
                        <button className="btn-detect w-30 grow f3 link ph3 pv3 dib white background-red__0">Detect
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ImageLinkForm;
