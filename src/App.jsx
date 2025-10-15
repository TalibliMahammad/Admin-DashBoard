
import React, { useEffect, useState } from 'react'
import Sidebar from './components/Layout/Sidebar'
import Header from './components/Layout/Header'
import Dashboard from './components/Layout/Dashboard/Dashboard'

const App = () => {

  const [sideBarCollapsed, setSideBarCollapsed] = useState(false)
  const [currentPage, setCurrentPage] = useState('dashboard')
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme === 'dark') {
      setDarkMode(true)
    }
  }, [])

 
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])


  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500'>
      <div className='flex h-screen overflow-hidden'>
        <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} onToggleSidebar={() => setSideBarCollapsed(!sideBarCollapsed)} collapsed={sideBarCollapsed} />
        <div className='flex-1 flex flex-col overflow-hidden'>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} sideBarCollapsed={sideBarCollapsed} onToggleSidebar={() => setSideBarCollapsed(!sideBarCollapsed)} />
          <main className='flex-1 h-full overflow-y-auto scrollbar-hide bg-transparent'>
            <div className='flex-1 overflow-y-auto bg-transparent'>
              <div className='p-6 space-y-6'>
                {currentPage === 'dashboard' && <Dashboard />}
              </div>
            </div>
          </main>

        </div>
      </div>
    </div>
  )
}

export default App
