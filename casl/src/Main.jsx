import {Form,Input,Button} from 'antd';
import { useAuth  , AuthContext} from './CASL/AuthContext';
import { useContext } from 'react';
import { Can } from './CASL/Can';

export default function Main(){

    let {user,setUser} = useAuth()


    const onFinish = (values) => {
        values.role = values.role.toLowerCase();
        values.gender = values.gender.toLowerCase();
        console.log('Success:', values);

        setUser({role:values.role})
        console.log('user:',user)

      };

   console.log(`user: ${user} , setUser: ${setUser}`)

    return (
        <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Role"
          name="role"
          rules={[
            {
              required: true,
              message: 'Please input your role!',
            },
          ]}
        >
          <Input />
        </Form.Item>
    
        <Form.Item
          label="Gender"
          name="gender"
          rules={[
            {
              required: true,
              message: 'Please input your Gender',
            },
          ]}
        >
          <Input />
        </Form.Item>
    
        
    
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" >
            Submit
          </Button>
        </Form.Item>

        <Can I='read' a='li'>
                          <p>Helllo</p>
                        
                        </Can>





        </Form>
    )
}