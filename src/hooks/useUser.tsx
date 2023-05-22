import { useEffect, useState } from "react";
import User, { UserType } from "../Entities/User";

export default function useCurrentUser() {
  
    const [currentUser, setCurrentUser] = useState<User>();

    const [userLoading, setUserLoading] = useState(false);

    useEffect(() => {
      
      loadUser()
    
      return () => {
        console.log("Unmounted");
      };
    }, []);

    const loadUser = async () => {

      await new Promise((resolve) => {
        setTimeout(() => {
          resolve("Fake async operation completed after 2.5 seconds");
        }, 1000); // delay execution by 2500 milliseconds (2.5 seconds)
      });
    
      const user : UserType = {
          name: 'Nana Roger',
          email: "nana.roger@gmail.com",
          phone: '655898347'
      };
    
      setUserLoading(false);
      
      setCurrentUser(user)

    }

    return {
        currentUser: currentUser,
        setCurrentUser: setCurrentUser,
        userLoading: userLoading,
        setUserLoading: setUserLoading
    }
    
}