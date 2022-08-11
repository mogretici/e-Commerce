import React from "react";
import { Button, Form, Input, Alert } from "antd";
import "antd/dist/antd.min.css";
import { fetchRegister} from '../../../Api'
import { useAuth } from '../../../context/AuthContext'

function Signup() {
  const [showError, setShowError] = React.useState(false);
  const { Login } = useAuth();

  const onFinish = async (values) => {
    try {
      const registerResponse = await fetchRegister({email: values.email, password: values.password})
      console.log("Success:", values);
      setShowError(false);
      console.log(registerResponse)
      Login(registerResponse)
      
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
       {showError && <Alert type="error"  message="This e-mail already using." banner  />}
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
          span: 10,
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
        <h2>REGISTER</h2> <br />
        <Form.Item
          label="Email"
          name="email"
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
          rules={[
            {
              min: 3,
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
       <Form.Item style={{ display:'flex',justifyContent: "end" }}>
          <Button type="primary" htmlType="submit">
            REGISTER
          </Button>
        </Form.Item>
      </Form>
    </div>
    </div>
  );
}
export default Signup;
