import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'
import Search from './pages/Search/Search'
import Mylist from './pages/MyList/Mylist'
import ProfilePage from './pages/Profile/ProfilePage'
// import AccountPage from './pages/Account/AccountPage'
// import HelpPage from './pages/Help/HelpPage'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/player/:id' element={<Player />} />
        <Route path='/search' element={<Search />} />
        <Route path='/mylist' element={<Mylist />} />

        {/* New routes for profile/account/help */}
        <Route path='/profile' element={<ProfilePage />} />
        {/* <Route path='/account' element={<AccountPage />} /> */}
        {/* <Route path='/help' element={<HelpPage />} /> */}
      </Routes>
    </div>
  )
}

export default App
