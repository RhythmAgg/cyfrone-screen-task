import React from 'react'
import NavbarHeaderLogo from '../assets/NavbarHeaderLogo.png'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Navbar = () => {
  return (
    <div className='Navbar h-full lg:min-w-[330px] shadow-navbar-left'>
        <div className='Navbar-header flex justify-center w-full h-[100px] pt-1 pb-1 bg-[#3B82F6]'>
            <img src={NavbarHeaderLogo} className=''></img>
        </div>
        <div className='Navar-body p-6'>
            <div className='button-indent text-white w-full pt-1 pb-1 ps-3 pe-3 flex justify-between bg-[#3B82F6] rounded'>
                <span>Indent</span>
                <ArrowDropDownIcon />
            </div>
            <div className='button-order-request'>

            </div>
            <div className='button-purchase-order'>

            </div>
        </div>
    </div>
  )
}

export default Navbar
