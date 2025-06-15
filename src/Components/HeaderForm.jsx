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
            <div className='text-tertiary' >
                Mcausilnutrition
            </div>
            <div className='text-tertiary' >
                Nutricionista dietista
            </div>
            </div>
        </Link>  
        </div>
    </header>
  )
}
