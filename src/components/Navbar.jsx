// src/components/Navbar.jsx

import { useNavigate } from 'react-router-dom'

function Navbar({ cartCount }) {
  const navigate = useNavigate()

  return (
    <nav style={styles.nav}>
      {/* Logo */}
      <div style={styles.logo} onClick={() => navigate('/')}>
        🧸 <span style={styles.logoText}>LiPeluche</span>
      </div>

      {/* Panier */}
      <div style={styles.cartBtn} onClick={() => navigate('/cart')}>
        🛒
        {cartCount > 0 && (
          <span style={styles.badge}>{cartCount}</span>
        )}
      </div>
    </nav>
  )
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 32px',
    background: 'white',
    boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    cursor: 'pointer',
  },
  logoText: {
    fontSize: '22px',
    fontWeight: '800',
    color: '#E91E8C',
    fontFamily: 'sans-serif',
  },
  cartBtn: {
    position: 'relative',
    fontSize: '28px',
    cursor: 'pointer',
  },
  badge: {
    position: 'absolute',
    top: '-8px',
    right: '-8px',
    background: '#E91E8C',
    color: 'white',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    fontSize: '11px',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}

export default Navbar