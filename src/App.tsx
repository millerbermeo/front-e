import React, { Suspense } from 'react'
import AppRouter from './routes/AppRouter'
import Loader from './utils/Loader'

const App: React.FC = () => {
  return (
    <Suspense fallback={<div className='w-full h-screen bg-black flex justify-center items-center'><Loader /></div>}>
      <AppRouter />
    </Suspense>
  )
}

export default App