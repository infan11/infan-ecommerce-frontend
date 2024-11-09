import { useState } from "react";
import { FcBusinessman } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { imageUpload } from "../Hooks/imageHooks";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const MyProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [profileImage, setProfileImage] = useState(user?.photoURL || "");
  const [previewImage, setPreviewImage] = useState(""); // To hold the preview of the selected image
  const navigate = useNavigate();

  // Handle file change (image selection)
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file); // Create a URL for the selected file
      setPreviewImage(objectUrl); // Show preview
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.files[0];

    // Upload the image and get the URL
    const imageData = await imageUpload(photo);
    const imageUrl = imageData?.url || ''; // Ensure imageUrl is a string

    console.log("Uploaded Image URL:", imageUrl);

    // Update the user profile with the name and photoURL
    handleUpdateUser(name, imageUrl);
  };

  const handleUpdateUser = (name, photo) => {
    const profile = {
      displayName: name,
      photoURL: photo, // Ensure that photo is a string URL here
    };

    updateUserProfile(profile)
      .then(() => {
        // Update the local state with the new photo URL
        setProfileImage(photo); // This should trigger a re-render with the new image URL
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Account is Updated",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/myProfile'); // Navigate to profile page after update
      })
      .catch((error) => {
        console.error("Update profile error:", error);
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Failed to update profile",
          text: error.message,
          showConfirmButton: true,
        });
      });
  };

  return (
    <div className="w-10/12 border border-cyan-300 rounded-lg mx-auto grid grid-cols-1 gap-20 lg:gap-2 lg:grid-cols-2 my-10 p-10">
      <div className="w-full">
        {/* Show the preview image or the current profile image */}
        <img
          className="w-96 lg:h-96 rounded-full"
          src={previewImage || profileImage || <FcBusinessman style={{ fontSize: "400px" }} />}
          alt="Profile"
          style={{ width: "200px", height: "200px", borderRadius: "50%" }}
        />
      </div>

      <div>
        <form onSubmit={handleUpdate}>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              defaultValue={user?.email}
              readOnly
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>

          {/* Photo Upload */}
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="file"
              accept="image/*"
              name="photo"
              className="file-input file-input-ghost w-full border-4"
              onChange={handleImageChange} // Update preview on file change
            />
          </div>

          {/* Name Input */}
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="name"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              defaultValue={user?.displayName}
              required
            />
            <label
              htmlFor="floating_first_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
          </div>

          <button
            type="submit"
            className="w-full btn bg-green-900 py-2 rounded-lg"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
