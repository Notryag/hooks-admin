import './App.css'
import { ConfigProvider } from 'antd'
import Router from './routers'
import { HashRouter } from "react-router-dom";


export default function App() {
  return (
    <HashRouter>
      <ConfigProvider>
        <Router></Router>
      </ConfigProvider>
    </HashRouter>
  )
}
