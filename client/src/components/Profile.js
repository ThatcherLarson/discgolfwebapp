import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import NavbarComponent from "./NavbarComponent";
import { useSelector, useDispatch } from "react-redux";
import { userStateSelector } from "../features/discs/userSlice";

function Profile() {
  let navigate = useNavigate();

  // may want to fetch from localStorage instead of state
  const userInfo = useSelector(userStateSelector);

  //TODO: Add "in my bag" logic for user
  return (
    <div>
      <NavbarComponent />
      Welcome to your profile, {userInfo.name}
    </div>
  );
}

export default Profile;
