import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const TermsOfUse = () => {
  return (
    <>
      <div
        className="landing-page text-center m-5 d-flex flex-column justify-content-center align-items-center"
        style={{ height: "50vh" }}
      >
        <h1 className="text-yellow__-1 fs-1 mb-5">{"STAR TRACK"}</h1>
        <h1 className="text-yellow__-1 fs-1 mb-5">{"Terms of use"}</h1>
        <h3 className="text-yellow__-1 fs-2 mb-5">
          {
            "An awesome app where you enter a random picture and we detect a celebrity in it and guess their name"
          }
        </h3>
        <Link to={"/"}>
          <Button
            className={
              "button-color-yellow__0 text-off-white__0 px-5 py-3 center fs-3 btn-sign-in"
            }
            value="start"
          >
            Back to the main page
          </Button>
        </Link>
      </div>
    </>
  );
};

export default TermsOfUse;
