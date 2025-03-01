import React from 'react'
import Profile from '@/components/Profile'

const profile = () => {
  return (
    <div className='min-h-[89vh]'>
      <Profile />
    </div>
  )
}

export default profile
export async function generateMetadata() {
  return {
    title: 'Get Me A Coffee - Profile',
    description: 'Support your favourite creators by buying them a coffee!',
  }
}
