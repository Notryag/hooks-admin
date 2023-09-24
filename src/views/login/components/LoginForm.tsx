import { selectCount, useAppSelect, useAppDispatch, increment, decrement } from "../../redux"
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { Login } from "@/api/interface";
import md5 from 'js-md5';

export default function Login() {
  const count = useAppSelect(selectCount)
  const dispatch = useAppDispatch()

  const [loading, setLoading] = useState(false)

  const onFinish = async (loginForm: Login.ReqLoginForm) {
    try {
      setLoading(true)
      loginForm.password = md5(loginForm.password)
    } catch (error) {
      
    }
  }

  const [form] = Form.useForm()
  return (
    <div>
      login

      count
      {count}
      <button onClick={() => dispatch(increment())}>increment</button>

      <button onClick={() => dispatch(decrement())}>decrement</button>


      <Form
        form={form}
        name="base"
        labelCol={{span: 5}}
        initialValues={{remember: true}}
        onFinish={onFinish}
      >
        <Form.Item name="username" rules={[{required: true,message:"place input username"}]}>
          <Input placeholder="用户名" prefix={<UserOutlined/>}/>
        </Form.Item>
        <Form.Item>
          <Input.Password placeholder="密码" prefix={<LockOutlined />}/>
        </Form.Item>
        <Button type="primary" htmlType="submit" >
          登录
        </Button>
      </Form>
    </div>
  )
}