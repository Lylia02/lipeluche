import { useNavigate } from 'react-router-dom'

function ProductCard({ peluche, addToCart }) {
  const navigate = useNavigate()

  return (
    <div style={styles.card}>
      <div style={styles.imageWrap} onClick={() => navigate(`/product/${peluche.id}`)}>
        <img src={peluche.image} alt={peluche.name} style={styles.image} />
      </div>
      <div style={styles.body}>
        <span style={styles.category}>{peluche.category}</span>
        <h3 style={styles.name} onClick={() => navigate(`/product/${peluche.id}`)}>
          {peluche.name}
        </h3>
        <p style={styles.desc}>{peluche.description}</p>
        <div style={styles.footer}>
          <span style={styles.price}>{peluche.price} €</span>
          <button style={styles.btn} onClick={() => addToCart(peluche)}>
            + Ajouter
          </button>
        </div>
      </div>
    </div>
  )
}

const styles = {
  card: {
    background: 'white',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    cursor: 'pointer',
    transition: 'transform 0.2s',
  },
  imageWrap: {
  height: '150px',  // était 200px
  overflow: 'hidden',
  background: '#f5f5f5',
},
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    transition: 'transform 0.3s',
  },
  body: {
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  category: {
    fontSize: '11px',
    fontWeight: '700',
    color: '#3B82F6',
    background: '#EFF6FF',
    padding: '3px 10px',
    borderRadius: '20px',
    alignSelf: 'flex-start',
  },
  name: {
    fontSize: '15px',
    fontWeight: '700',
    color: '#2D1B40',
    fontFamily: 'sans-serif',
  },
  desc: {
    fontSize: '12px',
    color: '#888',
    lineHeight: '1.5',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '8px',
  },
  price: {
    fontSize: '18px',
    fontWeight: '800',
    color: '#3B82F6',
  },
  btn: {
    background: 'linear-gradient(135deg, #3B82F6, #60A5FA)',
    border: 'none',
    borderRadius: '12px',
    color: 'white',
    fontSize: '13px',
    fontWeight: '700',
    padding: '8px 16px',
    cursor: 'pointer',
  },
}

export default ProductCard