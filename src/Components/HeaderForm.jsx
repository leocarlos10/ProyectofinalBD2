import { Link } from "react-router-dom"
import logo from '/Logo.png'

export const HeaderForm =  () => {
  return (
    <header className="flex justify-center items-center p-4 bg-primary">
        <div>
            <Link className="flex-1 flex gap-1 justify-center" to="/">
            <img 
            className="w-[42px] h-[42px]" 
            src={logo} 
            alt="logo" 
            />
            <div className="flex flex-col">
            <a className='text-tertiary' href="#inicio">
                Mcausilnutrition
            </a>
            <a className='text-tertiary' href="#inicio">
                Nutricionista dietista
            </a>
            </div>
        </Link>  
        </div>
    </header>
  )
}
