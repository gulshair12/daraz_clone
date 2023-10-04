import React from 'react'
import HelpCenterHomePage from '../../components/Help Center Header/HelpCenterHeader'
import HelpSearchBar from '../../components/Help Search Bar/HelpSearchBar'
import SelfServiceTool from '../../components/Self Service Tool/SelfServiceTool'
import TopQuestions from '../../components/Top Questions/TopQuestions'
import Categories from '../../components/Catagories/Catageries'
import StillLookingAnswers from '../../components/Still looking for answers/StillLookingAnswers'
import Header from '../../components/Header'

function HelpCenter() {
  return (
    <div className='w-full'>
      <Header/>
        <HelpCenterHomePage FaqButtonClassName="text-[#595959] text-[#595959] hover:text-[#FF6A00]" HPButtonClassName="text-[#FF6A00] border-[#FF6A00] border border-t-0 border-l-0 border-r-0 border-b-2"/>
        <HelpSearchBar/>
        <SelfServiceTool/>
        <TopQuestions/>
        <Categories/>
        <StillLookingAnswers/>
    </div>
  )
}

export default HelpCenter