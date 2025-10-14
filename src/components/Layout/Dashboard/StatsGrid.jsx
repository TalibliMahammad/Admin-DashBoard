import { ArrowDownRight, ArrowRight, DollarSign, Eye, ShoppingBag, User } from 'lucide-react'
import React from 'react'

const stats = [
    {
        title: "Total Revenue",
        value: "$12,345",
        change: "12%",
        trend: "up",
        icon: DollarSign,
        color: "from-emrald-500 to-teal-600",
        bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
        textColor: "text-emerald-500 dark:text-emerald-400"
    },
    {
        title: "Active",
        value: "8,345",
        change: "+ 8,5%",
        trend: "up",
        icon: User,
        color: "from-blue-50  to-indigo-600",
        bgColor: "bg-blue-50 dark:bg-blue-900/20",
        textColor: "text-blue-600 dark:text-blue-400"
    },
    {
        title: "Total Orders",
        value: "2,345",
        change: "+15,3%",
        trend: "up",
        icon: ShoppingBag,
        color: "from-purple-500 to-pink-600",
        bgColor: "bg-purple-50 dark:bg-purple-900/20",
        textColor: "text-purple-600 dark:text-purple-400"
    },
    {
        title: "Page Views",
        value: "45,345",
        change: "-3,5%",
        trend: "down",
        icon: Eye,
        color: "from-orange-500 to-red-600",
        bgColor: "bg-orange-50 dark:bg-orange-900/20",
        textColor: "text-orange-600 dark:text-orange-400"
    }
]
const StatsGrid = () => {


    return (
        <div className='grid gird-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
            {stats.map((Stats, index) => {
                return (
                    <div key={index} className='bg-white/80 dark:bg-slate-900/80  backdrop-blur-xl rounded-2xl p-6 border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl hover:shadow-slate-200/20 dark:hover:shadow-slate-900/20 transition-all duration-300 group '>
                        <div className='flex items-center justify-between'>
                            <div className='flex-1'>
                                <p className='text-sm  font-medium text-slate-600 dark:text-slate-400 mb:2'>{Stats.title}</p>
                                <p className='text-3xl font-bold text-slate-800 dark:text-white  mb-4'>{Stats.value}</p>
                                <div className='flex items-center space-x-2'>
                                    {Stats.trend === "up" ? <ArrowRight className='w-4 h-4 text-emerald-500' /> : <ArrowDownRight className='w-4 h-4  text-red-500' />}
                                    <span className={`text-sm font-semibold ${Stats.trend === "up" ? "text-emerald-500" : "text-red-500"}`}>{Stats.change}</span>
                                    <span className='text-sm text-slate-500 dark:text-slate-400'> vs Last</span>
                                </div>
                            </div>
                            <div className={`p-3 rounded-xl group-hover:scale-110 transition-all duration-200 ease-in-out`}>
                                {<Stats.icon className={`w-6 h-6 ${Stats.textColor}`} />}
                            </div>
                            {/* ProgressBar */}

                        </div>
                        <div className='mt-4 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden'>
                            <div style={{ width: Stats.trend === "up" ? "75%" : "25%" }} className={`w-full bg-gradient-to-r h-full rounded-full ${Stats.color} ${Stats.bgColor} ${Stats.textColor} transition-all duration-200 ease-in-out`}>
                            </div>
                        </div>
                    </div>
                )
            })}


        </div>
    )
}

export default StatsGrid