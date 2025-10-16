import {AlertCircle, Clock, CreditCard, MessageCircle, Package, RefreshCw, ShoppingCart, Star, User} from 'lucide-react'
import React from 'react'







const activities = [
    {
        id: 1,
        type: "user",
        icon: User,
        title: "New user registered",
        description: "John Smith created an account",
        time: "2 minutes ago",
        color: "text-blue-500",
        bgColor: "bg-blue-100 dark:bg-blue-900/30"
    },
    {
        id: 2,
        type: "order",
        icon: ShoppingCart,
        title: "New order received",
        description: "Order #3847 for $2,399",
        time: "5 minutes ago",
        color: "text-emerald-500",
        bgColor: "bg-emerald-100 dark:bg-emerald-900/30"
    },
    {
        id: 3,
        type: "payment",
        icon: CreditCard,
        title: "Payment processed",
        description: "Sarah Johnson paid $1,199",
        time: "12 minutes ago",
        color: "text-green-500",
        bgColor: "bg-green-100 dark:bg-green-900/30"
    },
    {
        id: 4,
        type: "product",
        icon: Package,
        title: "Product shipped",
        description: "MacBook Pro 16 shipped to customer",
        time: "25 minutes ago",
        color: "text-purple-500",
        bgColor: "bg-purple-100 dark:bg-purple-900/30"
    },
    {
        id: 5,
        type: "alert",
        icon:AlertCircle,
        title: "Low stock alert",
        description: "iPhone 15 Pro stock is running low",
        time: "1 hour ago",
        color: "text-red-500",
        bgColor: "bg-red-100 dark:bg-red-900/30"
    },
    {
        id: 6,
        type: "review",
        icon: Star,
        title: "New review posted",
        description: "Michael Brown rated iPad Air 5 stars",
        time: "2 hours ago",
        color: "text-yellow-500",
        bgColor: "bg-yellow-100 dark:bg-yellow-900/30"
    },
    {
        id: 7,
        type: "refund",
        icon: RefreshCw,
        title: "Refund processed",
        description: "Order #3850 refunded $249",
        time: "3 hours ago",
        color: "text-orange-500",
        bgColor: "bg-orange-100 dark:bg-orange-900/30"
    },
    {
        id: 8,
        type: "user",
        icon: User,
        title: "New user registered",
        description: "Emily Davis created an account",
        time: "4 hours ago",
        color: "text-blue-500",
        bgColor: "bg-blue-100 dark:bg-blue-900/30"
    },
    {
        id: 9,
        type: "order",
        icon: ShoppingCart,
        title: "New order received",
        description: "Order #3852 for $1,299",
        time: "5 hours ago",
        color: "text-emerald-500",
        bgColor: "bg-emerald-100 dark:bg-emerald-900/30"
    },
    {
        id: 10,
        type: "support",
        icon: MessageCircle,
        title: "Support ticket opened",
        description: "Lisa Anderson needs help with delivery",
        time: "6 hours ago",
        color: "text-indigo-500",
        bgColor: "bg-indigo-100 dark:bg-indigo-900/30"
    }
];

const ActivityFeed = () => {







    


    return (
        <div
            className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-b-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden w-full max-w-full'
        >
            <div className='p-4 sm:p-6 border-b border-slate-200/50 dark:border-slate-700/50 flex items-start sm:items-center justify-between gap-4'>
                <div className='flex-1 min-w-0'>
                    <h3 className='text-lg font-bold text-slate-800 dark:text-white'>Activity Feed</h3>
                    <p className='text-sm text-slate-500 dark:text-slate-400'>Recent System Activity</p>
                </div>
                <button className='mt-2 sm:mt-0 font-medium text-sm text-blue-600 dark:text-blue-500 hover:text-blue-700'>View All</button>
            </div>

            <div className='p-4 sm:p-6 w-full max-w-full'>
                <div className='space-y-3 w-full max-w-full'>
                    {activities.map((activity) => {
                        return (
                            <div key={activity.id} className='flex flex-col sm:flex-row items-start sm:items-center sm:space-x-4 space-y-3 sm:space-y-0 p-4 sm:p-6 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors w-full max-w-full'>
                                <div className={`flex-shrink-0 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg ${activity.bgColor}`}>
                                    <activity.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${activity.color}`} />
                                </div>
                                <div className='flex-1 min-w-0 w-full'>
                                    <h4 className='text-sm font-semibold text-slate-800 dark:text-white truncate'>{activity.title}</h4>
                                    <p className='text-sm text-slate-500 dark:text-slate-400 truncate mt-1'>{activity.description}</p>
                                    <div className='flex items-center space-x-1 mt-2 text-xs text-slate-400 dark:text-slate-500'>
                                        <Clock className='w-4 h-4' />
                                        <span>{activity.time}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ActivityFeed