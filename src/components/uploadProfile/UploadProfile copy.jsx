import './uploadProfile.css';
import circle from '../../assets/circle.png';

import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { storage } from "../../firebase";
import { ref, uploadBytes, listAll, getDownloadURL  } from "firebase/storage";
import { v4 } from "uuid";

const UploadProfile = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [userImage, setUserImage] = useState(null);

  useEffect(() => {
    // Retrieve the user image URL from Local Storage
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
      // Get the download URL of the uploaded image
      getDownloadURL(imageRef).then((url) => {
        // Save the download URL to Local Storage
        localStorage.setItem('userImage', url);
        setUserImage(url);
        window.location.reload(false);
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

export default UploadProfile;
