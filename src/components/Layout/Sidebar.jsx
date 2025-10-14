import React from 'react'
import {
    Zap,
    BarChart3,
    Users,
    ShoppingCart,
    Package,
    Calendar,
    FileText,
    Settings,
    CreditCard,
    MessageSquare,
    LayoutDashboard,
    ChevronDown,
} from 'lucide-react'
import { useState } from 'react'



const menuItems = [
    {
        id: "dashboard",
        icon: LayoutDashboard,
        label: "Dashboard",
        active: true,
        badge: "New"

    },
    {
        id: "analytics",
        icon: BarChart3,
        label: "Analytics",
        submenu: [
            { id: "overview", label: "Overview" },
            { id: "reports", label: "Reports" },
            /*    { id: "insights", label: "Insights" }, */
        ]
    },
    {
        id: "users",
        icon: Users,
        label: "Users",
        count: "2.4k",
        submenu: [
            { id: "all-users", label: "All-Users" },
            { id: "roles", label: "Roles &`Permissions" },
            { id: "activity", label: "User Activity" },
        ]

    },
    {
        id: "ecommerce",
        icon: ShoppingCart,
        label: "Ecommerce",
        submenu: [
            { id: "products", label: "Products" },
            { id: "orders", label: "Orders" },
            { id: "reviews", label: "Reviews" },
        ]
    },
    {
        id: "inventory",
        icon: Package,
        label: "Inventory",
        /*  submenu:[
             {id:"products", label:"Products"},
             {id:"orders", label:"Orders"},
             {id:"reviews", label:"Reviews"},
         ] */
    },

    {
        id: "transactions",
        icon: CreditCard,
        label: "Transactions",
    },
    {
        id: "messages",
        icon: MessageSquare,
        label: "Messages",
        badge: "12"
    },
    {
        id: "calendar",
        icon: Calendar,
        label: "Calendar",
    },
    {
        id: "reports",
        icon: FileText,
        label: "Reports",
    },
    {
        id: "settings",
        icon: Settings,
        label: "Settings",
    }
]



const Sidebar = ({ currentPage, setCurrentPage, onToggleSidebar, collapsed, onPageChange }) => {

    const [expanded, setExpanded] = useState(new Set([`analytics`]))
    const toggleExpanded = (itemid) => {
        const newExpanded = new Set(expanded)
        if (newExpanded.has(itemid)) {
            newExpanded.delete(itemid)
        } else {
            newExpanded.add(itemid)
        }
        setExpanded(newExpanded)
    }
    return (
    
            <div className={`${collapsed ? 'w-20' : 'w-72'} transition-all duration-300 ease-in-out bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col relative z-10  h-screen  `}>

                <div className='p-6 border-b border-slate-200/50 dark:border-slate-700/50'>
                    <div className='flex items-center  space-x-3'>

                        <div className='w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg'>

                            <Zap className='w-6 h-6 text-white' />
                        </div>
                        {/* conditional Rendering */}
                        {!collapsed && (
                            <div>
                                <div>
                                    <h1 className='text-xl font-bold text-slate-800 dark:text-white'>Nexus</h1>
                                </div>
                                <p className='text-xs text-slate-500 dark:text-slate-400'>
                                    Admin Panel
                                </p>
                            </div>
                        )}
                    </div>
                </div>
                {/* Menu navigation */}
                <nav className='flex-1 p-4 space-y-0 overflow-y-auto scrollbar-hide'>
                    {menuItems.map((item) => {
                        return (
                            <div key={item.id} >
                                <button className={`w-full flex items-center justify-between  p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 ${currentPage === item.id || item.active ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/50" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-white shadow-lg shadow-blue-500/25"} `}
                                    onClick={() => {
                                        if (item.submenu) {
                                            toggleExpanded(item.id)
                                        } else {
                                            onPageChange(item.id)
                                        }
                                    }}

                                >
                                    <div className='flex items-center  space-x-3'>
                                        <item.icon className='w-5 h-5 text-slate-500  dark:text-slate-400' />
                                        {/* conditional rendering */}

                                        <>
                                            {!collapsed && (
                                                <>
                                                    <span className='font-medium ml-2'>{item.label}</span>
                                                    {item.badge && (
                                                        <span className='px-2 py-1 text-xs bg-red-500 text-white rounded-full'>{item.badge}</span>
                                                    )}
                                                    {item.count && <span className='px-2 py-1 text-xs bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-100 rounded-full'>{item.count}</span>}
                                                </>

                                            )}
                                        </>
                                    </div>

                                    {!collapsed && item.submenu && <ChevronDown className={`w-4 h-4 transition-transform ${expanded.has(item.id) ? "rotate-180" : ""} text-slate-500 dark:text-slate-400`} />}
                                </button>
                                {/* submenu */}

                                {
                                    !collapsed && item.submenu && expanded.has(item.id) && (
                                        <div className=' text-slate-500 dark:text-slate-400 ml-8 mt-2 space-y-1'>
                                            {item.submenu.map((subItem) => (
                                                <button className='w-full text-left  p-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-00 dark:hover:bg-slate-800/50 rounded-lg '>{subItem.label}</button>
                                            ))}
                                        </div>
                                    )
                                }

                            </div>
                        )


                    })}
                </nav >
                {/* User profile */}
                {
                    !collapsed && (
                        <div className='p-4 border-slate-200/50 dark:border-slate-700/50'>
                            <div className='flex items-center space-x-3 rounded-xl dark:bg-slate-800/50'>
                                <img src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="user" className='w-10 h-10 rounded-full ring-2 ring-blue-500' />
                                <div className='flex-1 min-w-0'>
                                    <div className='flex-1 min-w-0'>
                                        <p className='text-sm font-medium text-slate-800 dark:text-white truncate'>Mahammad Talibli</p>
                                        <p className='text-xs text-slate-500 dark:text-slate-400'> Admin</p>
                                    </div>

                                </div>
                            </div>
                        </div>


                    )
                }
            </div >
    
    )
}

export default Sidebar   