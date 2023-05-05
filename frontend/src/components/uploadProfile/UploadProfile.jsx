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
    const storedImageUrl = localStorage.getItem('userImage');
    if (storedImageUrl) {
      setUserImage(storedImageUrl);
    } else {
      setUserImage(circle);
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
        //make the page reload
        window.location.reload(false);
      });
    });
  };
  return (
    <>
      <div className="fileUpload">
        <label for="file-upload" className="custom-file-upload">Edit Picture</label>
        <input type="file" id="file-upload" onChange={(e) => {setImageUpload(e.target.files[0])}}/>
        <button onClick={uploadImage} className='default_button'>Confirm Change</button>
      </div>


    </>
  )
};

export default UploadProfile;
