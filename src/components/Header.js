import { useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { addToggleGptView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const gptSearchView = useSelector((store) => store.gpt.showGptToggleView);

  const handleToggleGptSearch = () => {
    dispatch(addToggleGptView());
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
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black to-transparent z-30 flex justify-between">
      <img className="w-44" src={LOGO} alt="logo" />

      {user && (
        <div className=" flex">
        {gptSearchView && <select
          className="w-28 h-10 rounded-lg bg-gray-700 px-4 mx-3 my-5 py-1 text-white"
          onChange={handleLanguageChange}
        >
          {SUPPORTED_LANGUAGES.map((language) => (
            <option key={language.identifier} value={language.identifier}>
              {language.name}
            </option>
          ))}
        </select>}
          <button
            className="px-4 mx-3 my-4 h-12 bg-purple-800 text-white font-bold rounded-lg text-lg"
            onClick={handleToggleGptSearch}
          >
            {gptSearchView ? "Home page" : "Gpt Search"}
          </button>
          <img className="w-12 h-12 mt-4" alt="userIcon" src={user?.photoURL} />
          <button
            className="font-bold text-xl text-white p-2"
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
