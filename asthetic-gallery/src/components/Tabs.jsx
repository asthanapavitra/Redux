import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../redux/features/searchSlice';

const Tabs = () => {
    const tabs=['photos','videos','gifs']
    const dispatch=useDispatch();
    const activeTab=useSelector((state)=> state.search.activeTab);
  return (
    <div className='flex gap-10 px-10 py-5 w-full justify-center'>
      {
        tabs.map((elem,idx)=>{
            return (
                <button
                key={idx}
                onClick={()=>{
                    dispatch(setActiveTab(elem))
                }}
                 className={`${activeTab==elem?'bg-(--c4)':'bg-(--c5)'} font-medium uppercase rounded border-2 cursor-pointer px-4 py-2 text-lg transition active:scale-95 `}>
                    {elem}
                </button>
            )
        })
      }
    </div>
  )
}

export default Tabs
