import React from "react";
import './ImageLinkForm.css';

const ImageLinkForm = () => {
    return (
        <>
            <div className="image-link-form mt6">
                <p className="f2 f1-l form-title ma5">{'This app will detect faces in your pictures ... Take it at face value '}</p>
                <div className="input-box w-70-l w-60-m w-80-ns center">
                    <div className="pa5-l pa3-m pt4-m pb4-m pa1 pt3 pb3 br3 shadow-5 w-90-l w-90-m w-100">
                        <input type='url' name="url" id='url' className='f4 pa3 w-70 '/>
                        <button className="btn-detect w-30 grow f3 link ph3 pv3 dib white background-red__0">Detect
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ImageLinkForm;
