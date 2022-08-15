import React from 'react'
import { fetchProducts, addProduct, removeProduct, updateProduct } from "../../../Api";
import { Button, Checkbox, Form, Input } from 'antd';
import { toaster } from "evergreen-ui";
import Products from './index'


function EditProducts({item, toggle, refreshList}) {

  const { TextArea } = Input;
  const onFinish = async (values) => {
    await updateProduct(values, item._id)
    console.log('Success:', values);
    toaster.success(
      "Product Updated Successfully",
    );
    toggle();
    refreshList();
  };


  

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
console.log(item)
  return (
    <>
    
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
      <Form.Item
        label="Title"
        name="title"
        initialValue={item.title}

        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <TextArea rows={4} />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        initialValue={item.description}

        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
       <TextArea rows={4} />
      </Form.Item>
      <Form.Item
        label="Price"
        name="price"
        initialValue={item.price}

        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
       <Input />
      </Form.Item>
      {
        item.photos && item.photos.map((photo, index) => {
          return (
            <Form.Item
              label={`Photo  ${index + 1}`}
              name={`photo-${index + 1}`}
              key={index}
              initialValue={photo}
            >
             <Input />
            </Form.Item>
          )
        }
        )
      }
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
        
      >
        <Button style={{backgroundColor:'green', color:'white'}}  type="text"  htmlType="submit" >
          SAVE
        </Button>
        
      </Form.Item>
      
    </Form>
  </>
  )
}

export default EditProducts;