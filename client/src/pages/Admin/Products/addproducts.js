import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { addProduct } from "../../../Api";
import { Button, Form, Input, InputNumber } from "antd";
import { toaster } from "evergreen-ui";

const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 20,
      offset: 4,
    },
  },
};

function AddProducts({ toggle, refreshList }) {
  const onFinish = async (values) => {
    values.price = values.price.toString();
    values.photos = JSON.stringify(values.photos);
    try {
      await addProduct(values);
      console.log("Success:", values);
      toaster.success("Product Added Successfully");
      toggle();
      refreshList();
    } catch (e) {console.log(e)}
  };

  return (
    <>
      <Form
        name="dynamic_form_item"
        {...formItemLayoutWithOutLabel}
        onFinish={onFinish}
      >
        <Form.Item
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          label="Title"
          name="title"
          rules={[{ required: true, message: "Please add a title" }]}
        >
          <Input placeholder="Product Name" name="title" />
        </Form.Item>
        <Form.Item
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          label="Description"
          name="description"
          rules={[
            {
              required: true,
              message: "Description length must be at least 3 characters long",
              min: 3,
            },
          ]}
        >
          <Input placeholder="Product Description" name="description" />
        </Form.Item>
        <Form.Item
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          label="Price"
          name="price"
          rules={[{ required: true, message: "Please enter a valid price" }]}
        >
          <InputNumber
            prefix="₺"
            style={{
              width: "100%",
            }}
            placeholder="Product Price"
            name="price"
          />
        </Form.Item>
        <Form.List
          name="photos"
          rules={[
            {
              validator: async (_, names) => {
                if (!names || names.length < 2) {
                  return Promise.reject(new Error("At least 2 photos"));
                }
              },
            },
          ]}
        >
          {(fields, { add, remove }, { errors }) => (
            <>
              {fields &&
                fields.map((field, index) => (
                  <Form.Item
                    labelCol={{
                      span: 8,
                    }}
                    wrapperCol={{
                      span: 16,
                    }}
                    label={`Photo ${index + 1}`}
                    required={false}
                    key={field.key}
                    name={field.key}
                  >
                    <Form.Item
                      {...field}
                      validateTrigger={["onChange", "onBlur"]}
                      label={index === 0 ? `Photo ${index + 1}` : ""}
                      rules={[
                        {
                          required: true,
                          whitespace: true,
                          type: "string",
                          message: "Please input photo or delete this field.",
                        },
                      ]}
                      noStyle
                    >
                      <Input
                        placeholder={`Photo ${index + 1}`}
                        style={{
                          width: "100%",
                        }}
                      />
                    </Form.Item>
                    {fields.length > 1 ? (
                      <MinusCircleOutlined
                        className="dynamic-delete-button"
                        onClick={() => remove(field.name)}
                      />
                    ) : null}
                  </Form.Item>
                ))}
              <Form.Item
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 16,
                }}
                style={{ display: "flex", justifyContent: "end" }}
              >
                <Button
                  type="dashed"
                  onClick={() => add()}
                  style={{
                    width: "100%",
                    minWidth: 200,
                  }}
                  icon={<PlusOutlined />}
                >
                  Add Photo
                </Button>
                <Form.ErrorList errors={errors} />
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default AddProducts;
