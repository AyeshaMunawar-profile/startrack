import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import SignInForm from "../components/SignInForm/SignInForm";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import {
  HOME_ROUTE,
  SIGN_IN_ROUTE,
  SIGN_UP_ROUTE,
  PRIVACY_POLICY_ROUTE,
  TERMS_OF_USE_ROUTE,
  CHANGE_PASSWORD_ROUTE,
} from "../components/common/js/Constants";
import "./App.css";
import NoMatchPage from "./NoMatchPage/NoMatchPage";
import HomePage from "./HomePage/HomePage";
import LandingPage from "./LandingPage/LandingPage";
import PrivacyPolicy from "./Privacy Policy/PrivacyPolicy";
import TermsOfUse from "./Terms of Use/TermsOfUse";
import ChangePassword from "../components/ChangePassword/ChangePassword";
import ParticlesBackground from "../components/Particles/Particles";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: null,
    };
  }

  componentDidMount() {
    this.setState({ isSignedIn: false, route: SIGN_IN_ROUTE });
  }

  onRouteChange(route) {
    if (route === SIGN_IN_ROUTE || route === SIGN_UP_ROUTE) {
      this.setState({ isSignedIn: false });
    } else if (route === HOME_ROUTE) {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  }

  render() {
    const { isSignedIn } = this.state;
    return (
      <>
        <div className="App">
          <Navigation isSignedIn={isSignedIn} />

          {/*/ -> Landing page with navbar and particles*/}
          {/*/home -> Home page with image recognition form */}
          {/*/sign-in -> Sign in form */}
          {/*/sign-up -> Sign up form */}
          {/*/resetpassword for rest Password */}
          {/*/myprofile -> for user profile */}
          {/** for all other invalid url show there is nothing here*/}
          <Routes>
            <Route path={"/"} element={<LandingPage />} />
            <Route path={"/" + HOME_ROUTE} element={<HomePage />} />
            <Route path={"/" + SIGN_IN_ROUTE} element={<SignInForm />} />
            <Route path={"/" + SIGN_UP_ROUTE} element={<RegistrationForm />} />
            <Route
              path={"/" + PRIVACY_POLICY_ROUTE}
              element={<PrivacyPolicy />}
            />
            <Route path={"/" + TERMS_OF_USE_ROUTE} element={<TermsOfUse />} />
            <Route
              path={"/" + CHANGE_PASSWORD_ROUTE}
              element={<ChangePassword />}
            />
            <Route path={"*"} element={<NoMatchPage />} />
          </Routes>
          <ParticlesBackground />
        </div>
      </>
    );
  }
}

export default App;
