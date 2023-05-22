import React from 'react'

function SideBar() {
  return (
    <>
    <div className='fixed left-0 flex flex-col items-center w-1/6 p-3 m-4 border-2 border-black top-24 justify-evenly'>
        <div className='flex items-center justify-center w-full p-4 border-b border-b-black'>
            <a href='https://calendar.google.com' target='_blank' >
                <div className='flex flex-row items-center justify-evenly'>
                    <img className='w-16' src='https://ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_22_2x.png' />
                    <h1 className='ml-2 font-serif font-bold'>Google Calendar</h1>
                </div>
            </a>
        </div>
        <div className='flex items-center justify-center w-full p-4 border-b border-b-black'>
            <a href='http://classroom.google.com' target='_blank' >
                <div className='flex flex-row items-center justify-evenly'>
                    <img className='w-16' src='https://ssl.gstatic.com/classroom/ic_product_classroom_128.png' />
                    <h1 className='ml-2 font-serif font-bold'>Google Classroom</h1>
                </div>
            </a>
        </div>
        <div className='flex items-center justify-center w-full p-4 border-b border-b-black'>
            <a href='https://mail.google.com' target='_blank' >
                <div className='flex flex-row items-center justify-evenly'>
                    <img className='w-16' src='https://ssl.gstatic.com/images/branding/product/1x/hh_gmail_512dp.png' />
                    <h1 className='ml-2 font-serif font-bold'>Google Mail Service</h1>
                </div>
            </a>
        </div>
        <div className='flex items-center justify-center w-full p-4 border-b border-b-black'>
            <a href='https://meet.google.com' target='_blank' >
                <div className='flex flex-row items-center justify-evenly'>
                    <img className='w-16' src='https://ssl.gstatic.com/images/branding/product/1x/hh_meet_512dp.png' />
                    <h1 className='ml-2 font-serif font-bold'>Google Meet Service</h1>
                </div>
            </a>
        </div>
        <div className='flex items-center justify-center w-full p-4 border-b border-b-black'>
            <a href='https://mail.google.com/chat' target='_blank' >
                <div className='flex flex-row items-center justify-evenly'>
                    <img className='w-16' src='https://ssl.gstatic.com/images/icons/material/product/1x/hangouts_512dp.png' />
                    <h1 className='ml-2 font-serif font-bold'>Google Hangouts</h1>
                </div>
            </a>
        </div>
        <div className='flex items-center justify-center w-full p-4'>
            <a href='https://drive.google.com/drive' target='_blank' >
                <div className='flex flex-row items-center justify-evenly'>
                    <img className='w-16' src='https://ssl.gstatic.com/images/branding/product/2x/drive_2020q4_64dp.png' />
                    <h1 className='ml-2 font-serif font-bold'>Google Drive and Docs</h1>
                </div>
            </a>
        </div>
    </div>
    </>
  )
}

export default SideBar
