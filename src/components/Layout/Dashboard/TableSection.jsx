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

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400";
      case "pending":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "rejected":
        return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
      default:
        return "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400";
    }
  };


  return (
    <div className='space-y-6'>
      <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl  rounded-b-2xl border border-slate-200/50 dark:border-slate-700/50
    overflow-hidden
    '>
        <div className='p-6 border-b border-slate-200/50 dark:border-slate-700/50'>

          <div className='flex items-center justify-between'>
            <div>
              <h3 className='text-lg font-bold text-slate-800 dark:text-white'>
                Recent Orders
              </h3>
              <p className='text-sm text-slate-500 dark:text-slate-400'>
                Latest transactions by customers
              </p>
            </div>
            <button className='text-blue-600 hover:text-blue-700 text-sm font-medium'>
              View  All
            </button>

          </div>

        </div>

        {/* Table */}
        <div className='overflow-x-auto'>
          <table className='w-full'>
            <thead>
              <tr>
                <th className='text-left p-4 text-sm font-semibold text-slate-600 dark:text-slate-400'>
                  Order ID
                </th>
                <th className='text-left p-4 text-sm font-semibold text-slate-600 dark:text-slate-400'>
                  Product
                </th>
                <th className='text-left p-4 text-sm font-semibold text-slate-600 dark:text-slate-400'>
                  Amount
                </th>
                <th className='text-left p-4 text-sm font-semibold text-slate-600 dark:text-slate-400'>
                  Status
                </th>
                <th className='text-left p-4 text-sm font-semibold text-slate-600 dark:text-slate-400'>
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => {
                return (
                  <tr className='border-b border-slate-200/50 dark:border-slate-700/50 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors'>
                    <td className='p-4' key={index} >
                      <span className='text-sm font-medium text-blue-600'>
                        {order.id}
                      </span>
                    </td>
                    <td className='p-4' >
                      <span className='text-sm text-slate-800 dark:text-white'>
                        {order.customer}
                      </span>
                    </td>
                    <td className='p-4' >
                      <span className='text-sm text-slate-800 dark:text-white'>
                        {order.product}
                      </span>
                    </td>
                    <td className='p-4' >
                      <span className='text-sm text-slate-800 dark:text-white'>
                        {order.amount}
                      </span>
                    </td>
                    <td className='p-4' >
                      <span className={`text-slate-400 dark:text-white font-medium text-xs px-3 py-1 rounded-full ${getStatusColor(order.status)}`}>
                        {order.date}
                      </span>
                    </td>
                    <td className='p-4' >
                      <span className='text-sm text-slate-800 dark:text-white'>
                        <MoreHorizontal className='w-4 h-4' />
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>

          </table>
        </div>

      </div>
      {/* top product */}
      <div className='bg-white/80  dark:bg-slate-900/80  backdrop-blur-xl rounded-2xl border
      border-slate-200/50 dark:border-slate-700/50 overflow-hidden'>
        <div className='p-6 border-b border-slate-200/50 dark:border-slate-700/50'>
          <div className='flex items-center justify-between'>
            <div className='text-lg font-bold text-slate-800  dark:text-white'>
              <h3 className='text-lg font-bold text-slate-800 dark:text-white'>
                Top Product
              </h3>
            </div>
            <p className='text-sm text-slate-500 dark:text-slate-400'>
              best performing product
            </p>
          </div>
          <button className='text-blue-600 hover:text-blue-700 text-sm font-medium'>View All</button>
        </div>
        {/* Dynamic Data */}

        <div className='p-6 space-y-4'>
          {topProducts.map((product, index) => {
            return (
              <div className='flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50/50 dark:hover:bg-slate-800/50'>
            <div className='flex-1'>
              <h4 className='text-sm font-medium text-slate-800 dark:text-white'>
                {product.name}
              </h4>
              <p className='text-xs text-slate-500 dark:text-slate-400'> {product.category}</p>
            </div>
            <div className='text-right'>
              <p className='text-sm font-medium text-slate-800 dark:text-white'>
                {product.sales}
              </p>
              <div className='flex items-center space-x-1'>
               {product.trend === "up" ? <TrendingUp className='w-4 h-4 text-emerald-500' /> : <TrendingDown className='w-4 h-4 text-red-500' />}
                <span className={`text-sm font-semibold ${product.trend === "up" ? " text-emerald-500" : " text-red-500"}`} >{product.change}%</span>

              </div>
            </div>
          </div>
            )
          })}
        </div>
      </div>
    </div >

  )
}

export default TableSection
 