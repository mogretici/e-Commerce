import React from 'react'
import { useAuth } from '../../context/AuthContext'
import { CButton } from "@coreui/react";
import { LinkContainer } from "react-router-bootstrap";

function Profile() {
  const { user, Logout } = useAuth();

  const handleLogout = async() => {
    await Logout();
  }
  return (
    <div>
      <h1>Profile</h1>
      <h5>User E-Mail:<p>{user.email}</p></h5>
      <h5>User ID: <p>{user._id}</p></h5>
      <h5>User Role: <p>{user.role}</p></h5>
      <LinkContainer to="/" ><CButton color="dark" onClick={handleLogout}>Logout</CButton></LinkContainer>
    </div>
  )
}

export default Profile