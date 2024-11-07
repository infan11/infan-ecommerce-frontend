import { FcBusinessman } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { imageUpload } from "../Hooks/imageHooks";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const MyProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.files[0];

    // Log image upload URL
    const imageData = await imageUpload(photo);
    const imageUrl = imageData?.url || imageData;
    console.log("Uploaded Image URL:", imageUrl);

    handleUpdateUser(name, imageUrl);
  };

  const handleUpdateUser = (name, photo) => {
    const profile = {
      displayName: name,
      photoURL: photo,
    };
    updateUserProfile(profile)
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Account is Updated",
          showConfirmButton: false,
          timer: 1500,
        });
        // Optional: Force update if the image doesn't show
        navigate('/profile'); // or call a context refresh function if needed
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
        {user?.photoURL ? (
          <img
            className="w-96 lg:h-96 rounded-full"
            src={user.photoURL}
            alt="Profile"
            style={{ width: "200px", height: "200px", borderRadius: "50%" }}
          />
        ) : (
          <FcBusinessman style={{ fontSize: "400px" }} />
        )}
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

          {/* Address Input */}
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="address"
              id="address"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="address"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Address
            </label>
          </div>

          {/* Photo Upload */}
          <div className="relative z-0 w-full mb-6 group">
            <input type="file" accept="image/*" name="photo" className="file-input file-input-ghost w-full border-4" />
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
            className="w-full btn bg-green-900  py-2 rounded-lg"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
