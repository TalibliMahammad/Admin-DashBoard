import { Bell, ChevronDown, Filter, Menu, Plus, Search, Settings, Sun } from 'lucide-react'
import React from 'react'

const Header = ({setSideBarCollapsed, onToggleSidebar, darkMode,setDarkMode}) => {






    return (
        <div className='bg-white/-80 dark:bg-slate-900/80 backdrop-blur-xl  border-b border-slate-200/50 dark:border-slate-700/50 px-6 py-4 '>
            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-4 '>
                    <button onClick={onToggleSidebar}
                    className='p-2 rounded-lg text-slate-500  dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
                        <Menu className='w-6 h-6' />
                    </button>
                    <div className='hidden md:block'>
                        <h1 className='text-2xl font-black text-slate-800 dark:text-white'>Dashboard</h1>
                        <p className='text-sm text-slate-400 dark:text-slate-300'> Welcome back, Mahammad</p>
                    </div>
                </div>

                <div className='flex-1 max-w-md mx-8 '>
                    <div className='relative'>
                        <Search className='w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400' />
                        <input type="text" placeholder='Search Anything' className='w-full pl-10 pr-4 py-2.5 dark:bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700  rounded-xl text-slate-800 dark:text-white  placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all' />
                        <button className='absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'>
                            <Filter className='w-4 h-4' />
                        </button>
                    </div>
                </div>
                {/* Right */}
                <div className='flex items-center space-x-3'>
                    {/* Quick Actions */}
                    <button className='hidden lg:flex items-center space-x-2 py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:shadow transition-all'>
                        <Plus className='w-4 h-4' />
                        <span className='text-sm font-medium'>New</span>
                    </button>
                    {/* Toggle */}
                    <button  onClick={() => setDarkMode(!darkMode)} className='p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'>
                        <Sun  className='w-5 h-5' />
                    </button>
                    {/* Notification */}
                    <button className='relative p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
                        <Bell className='w-5 h-5' />
                        <span className='absolute -top-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex  items-center justify-center'>
                            10
                        </span>
                    </button>
                    {/* Settings */}
                    <button className='p-2.5 rounded-xl text-slate-300 dark:slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
                        <Settings className='w-5 h-5' />
                    </button>
                    {/*  user profile*/}
                    <div className='flex items-center space-x-3 p-1  rounded-2xl pl-3 border-1  dark:border-slate-700'>
                        <img className='w-8 h-8 rounded-full ring-2 ring-blue-500' src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80" alt="" />
                        <div className='hidden md:block'>
                            <p className='text-sm font-medium text-slate-500 dark:text-slate-400'>Mahammmad Talibli</p>
                            <p className='text-xs text-slate-400 dark:text-slate-300'>Admin</p>

                        </div>
                        \
                    </div>
                    <ChevronDown className='w-5 h-5 text-slate-400 dark:text-slate-300 cursor-pointer' />

                </div>
            </div>
        </div>
    )
}

export default Header