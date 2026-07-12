import HeroNews from '@/components/HeroNews'
import LeftSideNewsPnl from '@/components/LeftSideNewsPnl'
import RightSideNewsPnl from '@/components/RightSideNewsPnl'
import React from 'react'

const Home = () => {
  return (
    <div>


      <HeroNews />

      {/* Main News Preview Panel */}
      <section className='flex flex-col md:flex-row gap-4 mt-4'>

        <div className="container mx-auto flex flex-col md:flex-row gap-4">
          <div className="left w-auto md:w-1/4 bg-red-300 p-5">
            <LeftSideNewsPnl />
          </div>
          <div className="right w-full md:w-3/4 bg-amber-400 p-5">
            <RightSideNewsPnl />
          </div>
        </div>

      </section>


    </div>
  )
}

export default Home