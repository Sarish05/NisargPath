import {Outlet} from 'react-router-dom'
import {Header,Footer} from "./components"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Layout(){
    return (
        <>
        <ToastContainer />
       <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout;