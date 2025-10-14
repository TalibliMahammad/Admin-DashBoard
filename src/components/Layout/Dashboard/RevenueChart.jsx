import React from 'react'
import {
    Bar,
    BarChart,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    XAxis,
    YAxis
} from 'recharts'



const RevenueChart = () => {

    const data = [
        { month: "Jan", revenue: 45000, expenses: 32000 },
        { month: "Feb", revenue: 52000, expenses: 38000 },
        { month: "Mar", revenue: 48000, expenses: 35000 },
        { month: "Apr", revenue: 61000, expenses: 42000 },
        { month: "May", revenue: 67000, expenses: 40000 },
        { month: "Jun", revenue: 72000, expenses: 48000 },
        { month: "Jul", revenue: 35000, expenses: 27000 },
        { month: "Aug", revenue: 28000, expenses: 22000 },
        { month: "Sep", revenue: 18000, expenses: 15000 },
        { month: "Oct", revenue: 27000, expenses: 20000 },
        { month: "Nov", revenue: 44000, expenses: 56000 },
        { month: "Dec", revenue: 54000, expenses: 58000 },
    ]


    return (
        <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-b-2xl p-6 border border-slate-200/50 dark:border-slate-700/50'>
            <div className='flex items-center justify-between mb-6'>
                <div>
                    <h3 className='text-xl font-bold text-slate-800 dark:text-white'>Revenue Chart</h3>
                    <p className='text-sm text-slate-500 dark:text-slate-400'>Monthly revenue and expenses</p>
                </div>
                <div className='flex items-center space-x-2'>
                    <div className='flex items-center space-x-2'>
                        <div className='w-3 h-3 bg-gradient-to-r from-slate-500 to-purple-500 rounded-full'></div>
                        <div className='text-sm text-slate-600 dark:text-slate-400'>
                            <span>Revenue</span>
                        </div>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <div className='w-3 h-3 bg-gradient-to-r from-slate-500 to-slate-400 rounded-full'></div>
                        <div className='text-sm text-slate-600 dark:text-slate-400'>
                            <span>Expenses</span>
                        </div>
                    </div>

                </div>
            </div>
            <div className='h-80 text-black'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 30, right: 30, left: 0, bottom: 0 }}>


                        <CartesianGrid strokeDasharray="3 3" stroke='#e2e8f0' opacity={0.3} />

                        <XAxis
                            dataKey="month"
                            stroke="#64748b"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                        />

                        <YAxis
                            stroke="#64748b"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value) => `$${value / 1000}k`}
                        />

                        <Tooltip
                            contentStyle={{
                                backgroundColor: "rgba(255, 255, 255, 0.95)",
                                border: "none",
                                borderRadius: "12px",
                                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
                            }}
                           formatter={(value, name) => [`$${value.toLocaleString()}`, name]}
                        />

                        <Bar
                            dataKey="revenue"
                            fill="url(#revenueGradient)"
                            radius={[4, 4, 0, 0]}
                            maxBarSize={40}
                        />
                        <Bar
                            dataKey="expenses"
                            fill="url(#expensesGradient)"
                            radius={[4, 4, 0, 0]}
                            maxBarSize={40}
                        />
                        <defs>
                            <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#3b82f6" />
                                <stop offset="100%" stopColor="#8b5cf6" />
                            </linearGradient>

                            <linearGradient id="expensesGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#94a3b8" />
                                <stop offset="100%" stopColor="#64748b" />
                            </linearGradient>
                        </defs>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default RevenueChart