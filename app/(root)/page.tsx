import HeaderBox from '@/components/ui/HeaderBox'
import React from 'react'

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
             subText='Access and manage your account and transactions effectively/>
        </header>
      </div>
    </section>
  )
}

export default Home