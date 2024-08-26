import React from 'react'
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';

type ButtonsListProps = {
    list: string[];
    elementId: string;
    hidden: true | false;
}
const ButtonsList = ({list, elementId, hidden}: ButtonsListProps) => {
  return (
    <div className={`${elementId} ${hidden == true?'hidden':''} flex flex-col ps-0 text-[#3B82F6]`} >
        {
            list.map((listItem: string) => {
                return (
                    <div className='p-1 m-2 hover:bg-[#C2DAFE] rounded cursor-pointer'>
                        <ArrowRightRoundedIcon />
                        <span>{listItem}</span>
                    </div>
                )
            })
        }
    </div>
  )
}

export default ButtonsList
