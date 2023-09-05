import {useState} from "react"
import {Menu, Drawer, Button} from "antd"
import {Link} from "react-router-dom"
import Logo from "../../assets/logo.png"
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons"
import "./HamburguerMenu.scss"

const HamburgerMenu  = () => {
    
    const [visible, setVisible] = useState(false);

    const toogleMenu = () => {
        setVisible(!visible)
    }

    return (
    <div className="menu">

        <Button className='buttonMenu' type="primary" onClick={toogleMenu}>
            {visible ? <MenuUnfoldOutlined  /> : <MenuFoldOutlined />}
        </Button>

        <Drawer
            title="Menú"
            placement="left"
            closable={true}
            onClose={toogleMenu}
            visible={visible}
        >
            <Menu>
                <Menu.Item key='1' onClick={toogleMenu}>
                    <Link to="/">Inicio</Link>
                </Menu.Item>
                <Menu.Item key='2' onClick={toogleMenu}>
                    <Link to="/new-movies">Nuevas Películas</Link>
                </Menu.Item>
                <Menu.Item key='3' onClick={toogleMenu}>
                    <Link to="/popular">Populares</Link>
                </Menu.Item>
                <Menu.Item key='4' onClick={toogleMenu}>
                    <Link to="/search">Buscar</Link>
                </Menu.Item>
            </Menu>
        </Drawer>
        <div className="menu__logo">
            <img src={Logo} alt="logo" />
        </div>

        <Menu
            className="menu__list"
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
        >
            <Menu.Item key='1'>
                <Link to="/">Inicio</Link>
            </Menu.Item>
            <Menu.Item key='2'>
                <Link to="/new-movies">Nuevas Películas</Link>
            </Menu.Item>
            <Menu.Item key='3'>
                <Link to="/popular">Populares</Link>
            </Menu.Item>
            <Menu.Item key='4'>
                <Link to="/search">Buscar</Link>
            </Menu.Item>
        </Menu>
    </div>


    )
}

export default HamburgerMenu