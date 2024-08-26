import { useEffect, useState } from 'react'
import NavbarHeaderLogo from '../assets/NavbarHeaderLogo.png'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import ButtonsList from './ButtonsList';
import { StatusList as indentList } from '../Contants';

const buttonsLists: string[] = [
    "indent-list",
    "order-request-list",
    "purchase-order-list"
]
const orderRequestList: string[] = indentList
const purchaseOrderList: string[] = indentList

type NavbarProps = {
    indentType: number;
    setIndentType: React.Dispatch<React.SetStateAction<number>>;
}
const Navbar = ({indentType, setIndentType}: NavbarProps) => {
  const [show, setShow] = useState(0);
  const selectedClass:string = "text-white w-full pt-2 pb-2 ps-4 pe-4 cursor-pointer flex justify-between bg-[#3B82F6] rounded"
  const nonSelectedClass:string = "text-[#3B82F6] w-full pt-2 pb-2 ps-4 pe-4 cursor-pointer flex justify-between bg-[#EBF3FE] rounded"

  const toggleList = (listId: number) => {
    buttonsLists.forEach((listName: string, id: number) => {
        const element = document.querySelector(`.${listName}`) as any
        if(id !== listId) {
            element?.classList?.add('hidden')
        }
        else{
            element?.classList?.toggle('hidden')
        }
    })
    setShow(listId)
    setIndentType(-1)
  }
  return (
    <div className='Navbar h-full lg:min-w-[350px] shadow-navbar-left'>
        <div className='Navbar-header flex justify-center w-full h-[100px] pt-1 pb-1 bg-[#3B82F6]'>
            <img src={NavbarHeaderLogo} className=''></img>
        </div>
        <div className='Navar-body p-6 flex flex-col gap-y-4'>
            <div className='indent-container flex flex-col'>
                <div className={`button-indent ${show == 0?selectedClass:nonSelectedClass}`}
                    onClick={(e) => toggleList(show !== 0?0:-1)}
                >
                    <div className='flex flex-row gap-x-3'>
                        <StickyNote2OutlinedIcon />
                        <span>Indent</span>
                    </div>
                    {show == 0
                        ?<ArrowDropDownIcon />
                        :<ArrowDropUpIcon />
                    }
                </div>
                <ButtonsList list={indentList} elementId = 'indent-list' hidden={false} setIndentType={setIndentType} />
            </div>
            <div className='order-request-container flex flex-col'>
                <div className={`button-order-request ${show == 1?selectedClass:nonSelectedClass}`}
                    onClick={(e) => toggleList(show !== 1?1:-1)}
                >
                    <div className='flex flex-row gap-x-3'>
                        <StickyNote2OutlinedIcon />
                        <span>MVP Order Request Sheet</span>
                    </div>
                    {show == 1
                        ?<ArrowDropDownIcon />
                        :<ArrowDropUpIcon />
                    }
                    
                </div>
                <ButtonsList list={orderRequestList} elementId = 'order-request-list' hidden={true} setIndentType={setIndentType}/>
            </div>
            <div className='purchase-order-container flex flex-col'>
                <div className={`button-purchase-order ${show == 2?selectedClass:nonSelectedClass}`}
                    onClick={(e) => toggleList(show !== 2?2:-1)}
                >
                    <div className='flex flex-row gap-x-3'>
                        <StickyNote2OutlinedIcon />
                        <span>Purchase Order</span>
                    </div>
                    {show == 2
                        ?<ArrowDropDownIcon />
                        :<ArrowDropUpIcon />
                    }
                </div>
                <ButtonsList list={purchaseOrderList} elementId = 'purchase-order-list' hidden={true} setIndentType={setIndentType} />
            </div>
            
        </div>
    </div>
  )
}

export default Navbar
