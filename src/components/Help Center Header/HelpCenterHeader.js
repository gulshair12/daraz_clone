import React from 'react'
import { Link } from 'react-router-dom'

function HelpCenterHomePage(props) {
    const {HPButtonClassName = '',FaqButtonClassName = '' } = props
  return (
    <div className='w-full bg-white'>
        <header className='max-w-6xl mx-auto flex justify-between items-center'>
            <div>
                <h1 className=' text-[#595959] font-medium text-2xl'>
                    Help Center
                </h1>
            </div>
            <div className='flex space-x-5'>
            <Link to={'/help'}>
                <button className={`py-5 ${HPButtonClassName}`}>
                    Homepage
                </button>
                </Link>
                <Link to={'/faq'}>
                <button className={`py-5 ${FaqButtonClassName}`}>
                    FAQ
                </button></Link>
            </div>
        </header>
    </div>
  )
}

export default HelpCenterHomePage