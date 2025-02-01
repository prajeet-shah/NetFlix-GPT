import React, { useRef, useState } from "react";
import { Validate } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUND_IMAGE, USER_ICON } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    // validate the form
    const message = Validate(email.current.value, password.current.value);
    setMessage(message);

    if (message) return;

    if (!isSignInForm) {
      //signup logic

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
        name.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_ICON,
          })
            .then(() => {
              const { uid, email, password, displayName, photoURL } =
                auth.currentUser;
              // console.log(auth);

              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  password: password,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          // console.log(user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    } else {
      // signin logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("sign In success");

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  const handleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      {/*<Header />*/}
      <div className="absolute">
        <img
          className="h-screen object-cover md:h-auto"
          src={BACKGROUND_IMAGE}
          alt="background_image"
        />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="relative bg-black w-full md:w-3/12 m-auto py-5 px-10 top-48 bg-opacity-80"
      >
        <h1 className="text-white p-4 mx-10 font-bold text-3xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 mx-2 my-4 w-full text-xl bg-gray-700 text-white placeholder-black rounded-lg"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-3 mx-2 my-4 w-full text-xl bg-gray-700 text-white placeholder-black rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 mx-2 my-4 w-full text-xl bg-gray-700 text-white placeholder-black rounded-lg"
        />

        {!isSignInForm && (
          <input
            type="password"
            placeholder="Confirm Password"
            className="p-3 mx-2 my-4 w-full text-xl bg-gray-700 text-white placeholder-black rounded-lg"
          />
        )}
        <p className="text-red-600">{message}</p>
        <button
          className="bg-red-600 text-white w-full mx-2 my-4 px-6 py-3 font-bold text-2xl rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="my-6 text-white m-2 text-xl cursor-pointer"
          onClick={handleSignInForm}
        >
          {isSignInForm
            ? "New to NetFlix? Sign Up"
            : "Already registered! Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
