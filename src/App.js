import {useEffect, useState} from "react";
import Header from "./components/Header";
import Image from "./components/Image";
import Text from "./components/Text";

export default function App() {
  const [allMemes, setAllMemes] = useState({});
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    url: "https://i.imgflip.com/3lmzyx.jpg"
  });

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemes(data))
  }, []);

  const getNewImage = e => {
    e.preventDefault();
    const memesArray = allMemes.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const randomMeme = memesArray[randomNumber];
    const url = randomMeme.url;

    setMeme(prevMeme => {
      return {
        topText: "",
        bottomText: "",
        url: url
      }
    })
  };

  function handleChange(e) {
    e.preventDefault();
    const {name, value} = e.target;

    setMeme(prevMeme => {
      return {
        ...prevMeme,
        [name]: value
      }
    })
  }

  return(
    <div>
      <Header/>
      <Text getNewImage={getNewImage} topText={meme.topText} bottomText={meme.bottomText} handleChange={handleChange}/>
      <Image url={meme.url} topText={meme.topText} bottomText={meme.bottomText}/>
    </div>
  )
};

// export default function App() {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     passwordConfirm: "",
//     isChecked: false
//   });

//   function handleChange(e) {
//     const {name, value, type, checked} = e.target

//     setFormData(prevForm => {
//       return {
//         ...prevForm,
//         [name]: type === "checkbox" ? checked : value
//       }
//     })
//   }

//   function handleSubmit(e) {
//     e.preventDefault();

//     if(formData.password === formData.passwordConfirm) {
//       console.log("Successfully signed up");
//     }
//     else {
//       console.log("Passwords do not match");
//       return;
//     }

//     if(formData.isChecked === true) {
//       console.log("Thanks for signing up for our newsletter");
//     }
//   }

//   return(
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//         onChange={handleChange}
//         type="email"
//         name="Email"
//         placeholder="Email"
//         value={formData.email}
//         />

//         <input
//         onChange={handleChange}
//         type="password"
//         name="password"
//         placeholder="Password"
//         value={formData.password}
//         />

//         <input
//         onChange={handleChange}
//         type="password"
//         name="passwordConfirm"
//         placeholder="Confirm password"
//         value={formData.passwordConfirm}
//         />

//         <input
//         onChange={handleChange}
//         type="checkbox"
//         id="newsletter"
//         checked={formData.isChecked}
//         name="isChecked"
//         />
//         <label htmlFor="newsletter">Do you want to sign up for our newsletter?</label>

//         <button>Sign up</button>
//       </form>
//     </div>
//   );
// }