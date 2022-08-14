import React from "react";
import { useAuth } from "../../context/AuthContext";
import { Button } from "@mui/material";
import OffIcon from "@rsuite/icons/Off";
import { ButtonToolbar, Panel, FlexboxGrid } from "rsuite";

function Profile() {
  const { user, Logout } = useAuth();
  return (
    <div className="show-fake-browser sidebar-page">
      <FlexboxGrid justify="center">
        <FlexboxGrid.Item colspan={12}>
          <Panel header={<h3>Profile Details</h3>} bordered>
            <div>
            <h5>
                User Name:<p>{user.name}</p>
              </h5>
              <h5>
                User E-Mail:<p>{user.email}</p>
              </h5>
              <h5>
                User ID: <p>{user._id}</p>
              </h5>
              <h5>
                User Role: <p>{user.role}</p>
              </h5>
              <ButtonToolbar style={{ display: "flex", justifyContent: "end" }}>
                <Button
                  appearance="primary"
                  onClick={() => {
                    Logout();
                  }}
                  startIcon={<OffIcon />}
                  style={{ color: "red" }}
                >
                  LOGOUT
                </Button>
              </ButtonToolbar>
            </div>
          </Panel>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </div>
  );
}

export default Profile;
