import React, { useRef, useState } from "react";
import Header from "./Header";
import { Validate } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);

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
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // console.log(user);
          navigate("/browse");
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
          navigate("/browse");
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
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_large.jpg"
          alt="background_image"
        />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="relative bg-black w-3/12 m-auto p-10 top-64 bg-opacity-80"
      >
        <h1 className="text-white p-4 mx-16 font-bold text-4xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
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
