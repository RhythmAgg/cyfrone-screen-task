import React, { useEffect, useState } from 'react'
import { DB_API, StatusColor, StatusList } from '../Contants';
type TableRow = {
    ID: string;
    Date: string;
    Kitchen: string;
    Items: number;
    Raised: string;
    Status: string;
}
type TableProps = {
    data?: TableRow[] | TableRow;
    tabType: number;
    rowId: string;
    setRowId: React.Dispatch<React.SetStateAction<string>>;
}
const Table = ({tabType, rowId, setRowId}: TableProps) => {
    const [tableData, setTableData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        try{
            if(tabType > -1 && tabType < StatusList.length)
            {
                if(rowId !== '')
                {
                    console.log(`${rowId}`, `${DB_API}/indents?Status=${StatusList[tabType]}&&ID=${rowId}`)
                    fetch(`${DB_API}/indents?Status=${StatusList[tabType]}&&ID=${rowId}`)
                        .then((data: any) => data.json())
                        .then((data: any) => {
                            console.log(data)
                            setTableData(data)
                            setLoading(false)
                        })
                }
                else{
                    fetch(`${DB_API}/indents?Status=${StatusList[tabType]}`)
                        .then((data: any) => data.json())
                        .then((data: any) => {
                            setTableData(data)
                            setLoading(false)
                        })
                }
            }else{
                if(rowId !== '')
                {
                    fetch(`${DB_API}/indents?ID=${rowId}`)
                        .then((data: any) => data.json())
                        .then((data: any) => {
                            setTableData(data)
                            setLoading(false)
                        })
                }
                else{
                    fetch(`${DB_API}/indents`)
                        .then((data: any) => data.json())
                        .then((data: any) => {
                            setTableData(data)
                            setLoading(false)
                        })
                }
            }
        }catch(err) {
            console.log('Error in loading data', err)
            setLoading(false)
        }
    }, [tabType, rowId])
  return (
    <div className='Table flex flex-col'>
        <div className='text-white table-header-row bg-[#3B82F6] p-1 mb-1 flex flex-row'>
            <div className='w-[10%] p-1 text-center'>
                <span>ID</span>
            </div>
            <div className='flex-1 p-1 text-center'>
                <span>Date</span>
            </div>
            <div className='w-[15%] p-1 text-center'>
                <span>Kitchen</span>
            </div>
            <div className='w-[15%] p-1 text-center'>
                <span>No. of Items</span>
            </div>
            <div className='w-[15%] p-1 text-center'>
                <span>Raised By</span>
            </div>
            <div className='w-[20%] p-1 text-center'>
                <span>Status</span>
            </div>
        </div>
        {loading == true
        ?<span>Loading ...</span>
        :tableData?.length > 0
        ?(
            tableData.map((row: any, idx: number) => {
                let color = ''
                if(idx % 2 == 0)
                    color = '#C2DAFE'
                else
                    color = '#EBF3FE'
                const statusColor = StatusList.indexOf(row?.Status)
                return (
                    <div className={`table-row-element p-1 mt-1 rounded flex flex-row items-center cursor-pointer hover:scale-[1.03] hover:border-[1px] hover:border-blue-500`}
                        style={{
                            backgroundColor: color
                        }}
                        onClick={e => setRowId(row?.ID)}
                    >
                        <div className='w-[10%] p-1 text-center'>
                            <span>{row?.ID}</span>
                        </div>
                        <div className='flex-1 p-1 text-center'>
                            <span>{row?.Date}</span>
                        </div>
                        <div className='w-[15%] p-1 text-center text-[#628BCB]'>
                            <span>{row?.Kitchen}</span>
                        </div>
                        <div className='w-[15%] p-1 text-center'>
                            <span>{row["No. of Items"]}</span>
                        </div>
                        <div className='w-[15%] p-1 text-center'>
                            <span>{row["Raised By"]}</span>
                        </div>
                        <div className='w-[20%] p-1 pe-2 flex items-center gap-x-2 justify-end text-[#4A95D9] font-medium'>
                            {statusColor != -1
                                ?<div className='rounded-[50%] h-[8px] w-[8px]' style={{backgroundColor: StatusColor[statusColor]}}>
                                </div>
                                :<div></div>
                            }
                            <span>{row?.Status}</span>
                        </div>
                    </div>
                )
            })
        )
        :<span className='text-center'>No data to display</span>
        }
      
    </div>
  )
}

export default Table
