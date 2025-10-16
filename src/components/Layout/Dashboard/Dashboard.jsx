import React, { Activity } from 'react'
import StatsGrid from './StatsGrid'
import ChartSection from './ChartSection'
import TableSection from './TableSection'
import ActivityFeed from './ActivityFeed'

const DashBoard = () => {
  return (
    <div className='space-y-6 text-white'>
      {/* stats Grid */}
      <StatsGrid />
      {/* Charts Section */}
      <ChartSection />
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        <div className='col-span-1 lg:col-span-2 w-full'>
          <TableSection />
        </div>
        <div className='col-span-1 lg:col-span-1 w-full'>
          <ActivityFeed />
        </div>
      </div>
    </div>
  )
}

export default DashBoard