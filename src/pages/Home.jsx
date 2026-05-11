import { useState } from 'react'
import peluches from '../data/peluches'
import ProductCard from '../components/ProductCard'

function Home({ addToCart }) {
  const [activeCategory, setActiveCategory] = useState('Tous')

  const categories = ['Tous', ...new Set(peluches.map(p => p.category))]

  const filtered = activeCategory === 'Tous'
    ? peluches
    : peluches.filter(p => p.category === activeCategory)

  return (
    <div style={styles.page}>

      {/* Titre */}
      <div style={styles.header}>
        <h1 style={styles.title}>Notre Collection 🧸</h1>
        <p style={styles.sub}>Découvrez toutes nos peluches douces et adorables</p>
      </div>

      {/* Filtres */}
      <div style={styles.filters}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              ...styles.filterBtn,
              ...(cat === activeCategory ? styles.filterActive : {}),
            }}
          >
            {cat}
          </button>
        ))}
        <span style={styles.count}>{filtered.length} article{filtered.length > 1 ? 's' : ''}</span>
      </div>

      {/* Grille */}
      <div style={styles.grid}>
        {filtered.map(peluche => (
          <ProductCard
            key={peluche.id}
            peluche={peluche}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  )
}

const styles = {
  page: {
    minHeight: '100vh',
    background: '#FFF5FA',
    padding: '40px 48px',
  },
  header: {
    marginBottom: '32px',
  },
  title: {
    fontSize: '32px',
    fontWeight: '800',
    color: '#2D1B40',
    fontFamily: 'sans-serif',
    marginBottom: '8px',
  },
  sub: {
    fontSize: '15px',
    color: '#888',
  },
  filters: {
    display: 'flex',
    gap: '10px',
    marginBottom: '32px',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  filterBtn: {
    padding: '8px 20px',
    borderRadius: '4px',
    border: '1.5px solid #3B82F6',
    background: 'white',
    color: '#3B82F6',
    fontSize: '13px',
    fontWeight: '600',
    cursor: 'pointer',
  },
  filterActive: {
    background: '#3B82F6',
    color: 'white',
  },
  count: {
    fontSize: '13px',
    color: '#999',
    marginLeft: 'auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
  },
}

export default Home