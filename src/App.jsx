import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'
import { Navigate, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="page-shell">
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
