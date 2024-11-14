import React from 'react'

import TotalBalanceBox from '@/components/TotalBalanceBox'
import HeaderBox from '@/components/ui/HeaderBox'


const Home = () => {
  const loggedIn = { firstName: 'Paul'}
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
             type='greeting'
             title='Welcome'
             user={loggedIn?.firstName || 'Guest'}
             subtext='Access and manage your account and transactions effectively' />
             <TotalBalanceBox 
               accounts={[]}
               totalBanks={1}
               totalCurrentBalance={1250.35}/>
        </header>
      </div>
    </section>
  )
}

export default Home