import React from "react";
import { Button, Form, Input, Checkbox, Alert } from "antd";
import "antd/dist/antd.min.css";
import { useAuth } from "../../../context/AuthContext";
import { fetchLogin } from "../../../Api";
import { EncryptStorage } from "encrypt-storage";

function Signin() {
  const [showError, setShowError] = React.useState(false);
  const { Login } = useAuth();
  const encryptStorage = new EncryptStorage("secret-key", {
    prefix: "@eCommerceSignin",
  });

  const emailValue = encryptStorage.getItem("email");
  const pass = encryptStorage.getItem("password");
  let passwordValue;
  typeof pass === "number"
    ? (passwordValue = pass.toString())
    : (passwordValue = pass);

  const onFinish = async (values) => {
    try {
      const loginResponse = await fetchLogin({
        email: values.email,
        password: values.password,
      });

      if (values.remember) {
        encryptStorage.setItem("email", values.email);
        encryptStorage.setItem("password", values.password);
        encryptStorage.setItem("remember", values.remember);
      } else {
        encryptStorage.removeItem("email");
        encryptStorage.removeItem("password");
        encryptStorage.removeItem("remember");
      }
      console.log("Success:", values);
      setShowError(false);
      console.log(loginResponse);
      Login(loginResponse);
    } catch (error) {
      setShowError(true);
      console.log("Failed:", error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      {showError && (
        <Alert
          type="error"
          message="This e-mail or password is incorrect."
          banner
        />
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <h2>LOGIN</h2> <br />
          <Form.Item
            label="Email"
            name="email"
            initialValue={emailValue}
            rules={[
              {
                type: "email",
                required: true,
                message: "Please input your e-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            initialValue={passwordValue}
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox id="rememberMe">Remember me</Checkbox>
            </Form.Item>
            <Button type="primary" htmlType="submit">
              LOGIN
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
export default Signin;
