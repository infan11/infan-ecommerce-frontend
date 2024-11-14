import { Switch } from "@material-tailwind/react";
import { useEffect, useState } from "react";


const useDarkMode = () => {
    const [isDarkMode , setIsDarkmode] = useState(() => {
      return localStorage.getItem("isDarkMode") === "true"
    })
    const toggleTheme = () => {
       setIsDarkmode(!isDarkMode)
       localStorage.setItem('isDarkMode' , !isDarkMode)
    }
    useEffect(() => {
        document.body.classList.toggle('bg-black', isDarkMode);
        document.body.classList.toggle('text-white', isDarkMode);
        document.body.classList.toggle('bg-white', !isDarkMode);
        document.body.classList.toggle('text-black', !isDarkMode);
      }, [isDarkMode]);
    return (
        <div>
       
     <Switch onClick={toggleTheme}
      id="custom-switch-component"
      ripple={false}
      className="h-full w-full checked:bg-[#000000]"
      containerProps={{
        className: "w-12 h-6",
      }}
      circleProps={{
        className: "before:hidden left-0.5 border-none",
      }}
    />
   
        </div>
    );
};

export default useDarkMode;