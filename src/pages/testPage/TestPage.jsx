
import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import './testPage.css';
import { storage } from "../../firebase";
import { ref, uploadBytes, listAll, getDownloadURL  } from "firebase/storage";
import { v4 } from "uuid";

const TestPage = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [userImage, setUserImage] = useState(null);

  useEffect(() => {

    const storedImageUrl = localStorage.getItem('userImage');
    if (storedImageUrl) {
      setUserImage(storedImageUrl);
    }
  }, []);

  const uploadImage = () => {
    if (imageUpload == null) return;

    const imageRef = ref(storage, `profilePics/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then(() => {
      console.log("image uploaded");

      getDownloadURL(imageRef).then((url) => {

        localStorage.setItem('userImage', url);
        setUserImage(url);
      });
    });
  };
  return (
    <>
      <div className="fileUpload">
        <input type="file" onChange={(e) => {setImageUpload(e.target.files[0])}}/>
        <button onClick={uploadImage}>Upload Image</button>
      </div>
      {userImage && (
        <div className="userImageContainer">
          <img src={userImage} alt="User Profile Pic" />
        </div>
      )}


    </>
  )
};

export default TestPage;
