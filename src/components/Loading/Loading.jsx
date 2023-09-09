import {Spin } from 'antd';
import './index.scss'

const Loading = () => {
  return (
    <div className='spining'>
        <Spin tip="Loading" size="small" />
        <p>Cargando...</p>
    </div>
  )
}

export default Loading