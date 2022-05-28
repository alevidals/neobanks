import logo from '../assets/logo.svg'
import { CogIcon } from '@heroicons/react/outline'

const Header = () => {
  return (
    <div className='flex items-center justify-between container mx-auto py-5 px-5 lg:px-0'>
      <a href='#'>
        <img src={logo} alt='logo' />
      </a>
      <CogIcon className='h-7 w-7 text-primary cursor-pointer hover:scale-110 duration-200' />
    </div>
  )
}

export default Header
