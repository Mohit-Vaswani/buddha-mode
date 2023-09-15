import React, { useState, useEffect } from "react";
import Image from "next/image";

const UserProfile = ({ userName }) => {
  const [imageUrl, setImageUrl] = useState("/assets/smile.jpg");

  useEffect(() => {
    // Check if the image URL is stored in localStorage
    const storedImageUrl = localStorage.getItem("userImageUrl");
    if (storedImageUrl) {
      setImageUrl(storedImageUrl);
    }
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const uploadedImageUrl = e.target.result;
      setImageUrl(uploadedImageUrl);

      // Store the uploaded image URL in localStorage
      localStorage.setItem("userImageUrl", uploadedImageUrl);
    };

    reader.readAsDataURL(file);
  };

  // Conditionally truncate userName if it has more than 15 letters
  const truncatedUserName = userName.length > 20 ? userName.slice(0, 20) + "..." : userName;

  return (
    <div className="user-info flex gap-5 lg:flex-col lg:gap-1">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        style={{ display: "none" }}
        id="imageInput"
      />
      <label htmlFor="imageInput">
        <Image src={imageUrl} alt="user" width={70} height={70} className="rounded-lg cursor-pointer" />
      </label>
      <h3>{truncatedUserName}</h3>
    </div>
  );
};

export default UserProfile;
