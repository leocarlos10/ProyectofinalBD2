import { Footer } from "../Components/Footer"
import { HeaderForm } from "../Components/HeaderForm"
import { Main_loginUser } from "../Components/Main_loginUser"


export const Login_UserPage = () => {
  return (
    <>
    <HeaderForm/>
    <Main_loginUser estado="user"/>
    <Footer/>
    </>
  
  )
}
