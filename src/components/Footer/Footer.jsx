import {Layout} from 'antd';
import './index.scss'

const Footer = () => {
    const {Footer} = Layout;
  return (
    <div>
        <Footer className='footer'>Movie App ©2023 Created by <a href='https://www.linkedin.com/in/lkguevara/' target='_blank' rel='noreferrer'>Lian K. Guevara</a></Footer>
    </div>
  )
}

export default Footer