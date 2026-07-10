import { NavLink, Outlet } from 'react-router-dom'
import { Menu, ShieldCheck, X } from 'lucide-react'
import { useState } from 'react'

export default function Layout() {
  const [open, setOpen] = useState(false)
  return (
    <div className="site-shell">
      <header className="site-header">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark"><ShieldCheck size={22} /></span>
          <span>CCS WHITEHAT CLUB</span>
        </NavLink>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </button>
        <nav className={open ? 'nav open' : 'nav'} aria-label="Main navigation">
          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/hall-of-fame" onClick={() => setOpen(false)}>Hall of Fame</NavLink>
        </nav>
      </header>
      <main><Outlet /></main>
      <footer className="site-footer">
        CCS WhiteHat Club <span>|</span> College of Computing Studies <span>|</span> Mindanao State University – Sulu
      </footer>
    </div>
  )
}
