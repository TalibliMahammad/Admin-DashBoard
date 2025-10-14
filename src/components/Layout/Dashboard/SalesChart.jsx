import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
const SalesChart = () => {
    const data = [
        { name: "Electronics", value: 45, color: "#16a34a" },
        { name: "Clothing", value: 38, color: "#facc15" },
        { name: "Books", value: 15, color: "#2563eb" },
        { name: "Other", value: 18, color: "#a21caf" },
    ];

    return (
        <div className='bg-white dark:bg-slate-900  backdrop-blur-xl rounded-2xl p-6 border border-slate-200/50 dark:border-slate-700/50'>
            <div className='mb-6'>
                <h3 className='text-lg font-bold text-slate-800 dark:text-white '>
                    Sales by Category
                </h3>
                <p className='text-sm text-slate-500 dark:text-slate-400'>Production Distrbution</p>
            </div>
            <div className='h-80'>
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            innerRadius={50}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip
                            contentStyle={
                                {
                                    backgroundColor: "#1f2937",
                                    border: "none",
                                    borderRadius: "8px",
                                    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1"
                                }
                            }
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>

        
        </div>
    )
}

export default SalesChart