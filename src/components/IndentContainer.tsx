import React from 'react'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import Table from './IncidentTable';
import { StatusList } from '../Contants';

type IndentContainerProps = {
  indentType: number;
  setIndentType: React.Dispatch<React.SetStateAction<number>>;
}

const IndentContainer = ({indentType, setIndentType}: IndentContainerProps) => {
  return (
    <div className='IndentContainer h-full flex-1 flex flex-col p-6 ps-[70px] pe-[70px]'>
      <div className='notifications-profile flex gap-x-3 justify-end mb-6'>
        <NotificationsNoneOutlinedIcon sx={{fontSize: '2rem'}}/>
        <AccountCircleRoundedIcon sx={{fontSize: '2rem', color: '#DFDFDF'}}/>
      </div>
      <div className='table-name-search flex items-center mb-1'>
        <ArrowBackIosNewRoundedIcon sx={{fontSize: '1.5rem'}}/>
        <div className='font-bold table-title flex-1 m-2' style={{fontSize: '1.5rem'}}>
          {indentType == -1
          ?'All Indent'
          :`Indent [Status=${StatusList[indentType]}]`
        }
        </div>
        <div className='text-[#5980DB] search-icon rounded-[50%] border-2 border-[#5980DB] m-2 p-2 cursor-pointer'>
          <SearchRoundedIcon />
        </div>
        <div className='text-[#5980DB] select-button bg-[#ECF4FF] rounded-3xl text-center p-2 ps-4 pe-4 m-2 cursor-pointer'>
          Select
        </div>
      </div>
      <div className='flex-1'>
        <Table indentType = {indentType}/>

      </div>
      <div>
        <div className='new-indent rounded-[5px] cursor-pointer border-2 p-2 w-max border-[#5980DB] text-[#5980DB]'>
          <ControlPointOutlinedIcon />
          <span className='ms-1'>Add New Indent</span>
        </div>
      </div>
      

    </div>
  )
}

export default IndentContainer
