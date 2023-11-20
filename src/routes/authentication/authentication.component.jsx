import SignInForm from "../../components/sign-in-form/sign-in-form.component.jsx";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component.jsx";
import './authentication.component.scss';
const Authentication = () => {
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
  //   const logGoogleRedirectUser = async () => {
  //     const { user } = await signInWithGoogleRedirect();
  //     console.log(user);
  //   };
  return (
    <div className="authentication-container">
      {/* <button onClick={signInWithGoogleRedirect}>
    Sign In With Google Redirect
  </button> */}
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
