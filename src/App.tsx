import { Routes, Route } from 'react-router-dom'
import { Toaster } from "@/components/ui/sonner"
import Index from './pages/Index'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App
