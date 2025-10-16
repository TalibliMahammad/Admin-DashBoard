import { MoreHorizontal, TrendingDown, TrendingUp } from 'lucide-react'
import React from 'react'


const orders = [
  {
    id: "#3847",
    customer: "John Smith",
    product: "MacBook Pro 16",
    amount: "$2,399",
    status: "completed",
    date: "2024-01-15"
  },
  {
    id: "#3848",
    customer: "Sarah Johnson",
    product: "iPhone 15 Pro",
    amount: "$1,199",
    status: "pending",
    date: "2024-01-15"
  },
  {
    id: "#3849",
    customer: "Michael Brown",
    product: "iPad Air",
    amount: "$599",
    status: "completed",
    date: "2024-01-14"
  },
  {
    id: "#3850",
    customer: "Emily Davis",
    product: "AirPods Pro",
    amount: "$249",
    status: "rejected",
    date: "2024-01-14"
  },
  {
    id: "#3851",
    customer: "David Wilson",
    product: "Apple Watch Ultra",
    amount: "$799",
    status: "completed",
    date: "2024-01-13"
  },
  {
    id: "#3852",
    customer: "Lisa Anderson",
    product: "MacBook Air M2",
    amount: "$1,299",
    status: "pending",
    date: "2024-01-13"
  },
  {
    id: "#3853",
    customer: "Robert Taylor",
    product: "Mac Mini",
    amount: "$699",
    status: "completed",
    date: "2024-01-12"
  },
  {
    id: "#3854",
    customer: "Jennifer Martinez",
    product: "iPhone 15",
    amount: "$899",
    status: "pending",
    date: "2024-01-12"
  },
  {
    id: "#3855",
    customer: "William Garcia",
    product: "iMac 24",
    amount: "$1,499",
    status: "rejected",
    date: "2024-01-11"
  },
  {
    id: "#3856",
    customer: "Jessica Lee",
    product: "Magic Keyboard",
    amount: "$149",
    status: "completed",
    date: "2024-01-11"
  }
];




const topProducts = [
  {
    name: "MacBook Pro 16",
    sales: 1247,
    revenue: "$2,987,530",
    trend: "up",
    change: "+12%"
  },
  {
    name: "iPhone 15 Pro",
    sales: 2156,
    revenue: "$2,585,044",
    trend: "up",
    change: "+18%"
  },
  {
    name: "iPad Air",
    sales: 987,
    revenue: "$591,213",
    trend: "down",
    change: "-5%"
  },
  {
    name: "AirPods Pro",
    sales: 1543,
    revenue: "$384,207",
    trend: "up",
    change: "+23%"
  },
  {
    name: "Apple Watch Ultra",
    sales: 876,
    revenue: "$699,924",
    trend: "up",
    change: "+8%"
  },
  {
    name: "MacBook Air M2",
    sales: 1678,
    revenue: "$2,179,422",
    trend: "down",
    change: "-3%"
  },
  {
    name: "Mac Mini",
    sales: 543,
    revenue: "$379,557",
    trend: "up",
    change: "+15%"
  },
  {
    name: "iPhone 15",
    sales: 2987,
    revenue: "$2,685,213",
    trend: "up",
    change: "+28%"
  },
  {
    name: "iMac 24",
    sales: 432,
    revenue: "$647,568",
    trend: "down",
    change: "-7%"
  },
  {
    name: "Magic Keyboard",
    sales: 1234,
    revenue: "$183,866",
    trend: "up",
    change: "+10%"
  }
];



const TableSection = () => {
  return (
    <div className='space-y-6'>
      <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden'>
        <div className='p-4 sm:p-6 border-b border-slate-200/50 dark:border-slate-700/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0'>
          <div>
            <h3 className='text-lg font-bold text-slate-800 dark:text-white'>Recent Orders</h3>
            <p className='text-sm text-slate-500 dark:text-slate-400'>Latest order history</p>
          </div>
          <button className='mt-2 sm:mt-0 font-medium text-sm text-blue-600 dark:text-blue-500 hover:text-blue-700'>View All</button>
        </div>
        <div className='overflow-x-auto'>
          <table className='min-w-full divide-y divide-slate-200 dark:divide-slate-700 text-sm'>
            <thead>
              <tr>
                <th className='px-3 sm:px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider'>Order</th>
                <th className='px-3 sm:px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider'>Customer</th>
                <th className='px-3 sm:px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider hidden md:table-cell'>Date</th>
                <th className='px-3 sm:px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider'>Status</th>
                <th className='px-3 sm:px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider'>Amount</th>
                <th className='px-3 sm:px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider hidden md:table-cell'>Action</th>
              </tr>
            </thead>
            <tbody className='bg-white dark:bg-slate-900 divide-y divide-slate-200 dark:divide-slate-700'>
              {orders.map((order) => (
                <tr key={order.id} className='hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors'>
                  <td className='px-3 sm:px-6 py-3 whitespace-nowrap font-medium text-slate-800 dark:text-white'>{order.id}</td>
                  <td className='px-3 sm:px-6 py-3 whitespace-nowrap text-slate-600 dark:text-slate-400'>{order.customer}</td>
                  <td className='px-3 sm:px-6 py-3 whitespace-nowrap text-slate-600 dark:text-slate-400 hidden md:table-cell'>{order.date}</td>
                  <td className='px-3 sm:px-6 py-3 whitespace-nowrap'>
                    <span className={`font-medium text-xs px-3 py-1 rounded-full ${order.status === "completed" ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" : order.status === "pending" ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"}`}>{order.status}</span>
                  </td>
                  <td className='px-3 sm:px-6 py-3 whitespace-nowrap text-slate-600 dark:text-slate-400'>{order.amount}</td>
                  <td className='px-3 sm:px-6 py-3 whitespace-nowrap hidden md:table-cell'>
                    <button className='text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium text-xs'>Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Top Products Section */}
      <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden'>
        <div className='p-4 sm:p-6 border-b border-slate-200/50 dark:border-slate-700/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0'>
          <div>
            <h3 className='text-lg font-bold text-slate-800 dark:text-white'>Top Product</h3>
            <p className='text-sm text-slate-500 dark:text-slate-400'>Best performing product</p>
          </div>
          <button className='mt-2 sm:mt-0 font-medium text-sm text-blue-600 dark:text-blue-500 hover:text-blue-700'>View All</button>
        </div>
        <div className='p-4 sm:p-6 space-y-3'>
          {topProducts.map((product) => (
            <div key={product.name} className='flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 sm:p-4 rounded-2xl hover:bg-slate-50/50 dark:hover:bg-slate-800/50'>
              <div className='flex-1 min-w-0'>
                <h4 className='text-sm font-medium text-slate-800 dark:text-white truncate'>{product.name}</h4>
                <p className='text-xs text-slate-500 dark:text-slate-400 truncate'>{product.revenue}</p>
              </div>
              <div className='text-right mt-3 sm:mt-0'>
                <p className='text-sm font-medium text-slate-800 dark:text-white'>{product.sales}</p>
                <div className='flex items-center space-x-1 justify-end'>
                  {product.trend === "up" ? <TrendingUp className='w-4 h-4 text-emerald-500' /> : <TrendingDown className='w-4 h-4 text-red-500' />}
                  <span className={`text-sm font-semibold ${product.trend === "up" ? " text-emerald-500" : " text-red-500"}`}>{product.change}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TableSection
 