import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import HallOfFame from './pages/HallOfFame'
import OfficerVerification from './pages/OfficerVerification'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/hall-of-fame" element={<HallOfFame />} />
        <Route path="/officer/:slug" element={<OfficerVerification />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
