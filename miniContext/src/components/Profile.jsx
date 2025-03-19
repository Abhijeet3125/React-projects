import React from "react";
import { useContext } from "react";
import UserContext from "../context/userContext.js";

const Profile = () => {
  const { user } = useContext(UserContext);
  if (!user) {
    return (
      <div>
        <h1>please login</h1>
      </div>
    );
  }
  return <div>welcome {user.userName}</div>;
};

export default Profile;
