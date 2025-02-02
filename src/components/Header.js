import { useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { addToggleGptView, clearMovies } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const gptSearchView = useSelector((store) => store.gpt.showGptToggleView);

  const handleToggleGptSearch = () => {
    dispatch(addToggleGptView());
    dispatch(clearMovies());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user);
        const { uid, email, password, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            password: password,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe;
  }, []);

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black to-transparent z-30 flex flex-col md:flex-row justify-between ">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />

      {user && (
        <div className=" flex justify-end">
          {gptSearchView && (
            <select
              className="md:w-28 w-22 h-10 rounded-lg bg-gray-700 px-4 mx-2 my-5 py-1 text-white md:text-[16px] text-[10px]"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((language) => (
                <option key={language.identifier} value={language.identifier}>
                  {language.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="px-4 mx-2 my-4 h-12  bg-purple-800 text-white font-bold rounded-lg md:text-lg text-[10px]"
            onClick={handleToggleGptSearch}
          >
            {gptSearchView ? (
              <Link to={"/browse"}> Home page</Link>
            ) : (
              <Link to={"/browse"}>Gpt Search</Link>
            )}
          </button>
          <img
            className="md:w-12 md:h-12 w-10 h-10 md:mt-4 mt-5 mx-1 md:mx-0 "
            alt="userIcon"
            src={user?.photoURL}
          />
          <button
            className="font-bold md:text-xl text-[10px] text-white md:p-2"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
