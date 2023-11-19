// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component.jsx";
import {
  //   auth,
  signInWithGooglePopup,
  //   signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils.js";
const SignIn = () => {
  // For redirect login
  //   useEffect(() => {
  //     async function getRedirect() {
  //         const response = await getRedirectResult(auth);
  //         console.log(response);
  //         if(response) {
  //             const userDocRef = await createUserDocumentFromAuth(response.user);
  //         }
  //     }
  //     getRedirect();
  //   }, []);
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };
  //   const logGoogleRedirectUser = async () => {
  //     const { user } = await signInWithGoogleRedirect();
  //     console.log(user);
  //   };
  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign In With Google Popup</button>
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign In With Google Redirect
  </button> */}
      <SignUpForm />
    </div>
  );
};

export default SignIn;
