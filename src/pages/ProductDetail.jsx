import { useParams, useNavigate } from 'react-router-dom'
import peluches from '../data/peluches'

function ProductDetail({ addToCart }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const peluche = peluches.find(p => p.id === parseInt(id))

  if (!peluche) {
    return (
      <div style={styles.notFound}>
        <p>Peluche introuvable 😢</p>
        <button style={styles.backBtn} onClick={() => navigate('/')}>Retour</button>
      </div>
    )
  }

  return (
    <div style={styles.page}>
      <button style={styles.backBtn} onClick={() => navigate(-1)}>← Retour</button>
      <div style={styles.container}>

        {/* Image */}
        <div style={styles.imageWrap}>
          <img src={peluche.image} alt={peluche.name} style={styles.image} />
        </div>

        {/* Infos */}
        <div style={styles.info}>
          <span style={styles.category}>{peluche.category}</span>
          <h1 style={styles.name}>{peluche.name}</h1>
          <p style={styles.desc}>{peluche.description}</p>
          <p style={styles.price}>{peluche.price} €</p>

          <div style={styles.features}>
            <p style={styles.feature}>✅ Livraison gratuite dès 50€</p>
            <p style={styles.feature}>✅ Retour gratuit sous 30 jours</p>
            <p style={styles.feature}>✅ Paiement sécurisé</p>
            <p style={styles.feature}>✅ Matériaux doux et sécurisés</p>
          </div>

          <button style={styles.btnAdd} onClick={() => { addToCart(peluche); navigate('/cart') }}>
            🛒 Ajouter au panier
          </button>
          <button style={styles.btnBack} onClick={() => navigate('/')}>
            Continuer mes achats
          </button>
        </div>
      </div>
    </div>
  )
}

const styles = {
  page: {
    minHeight: '100vh',
    background: '#FFF5FA',
    padding: '32px 48px',
  },
  notFound: {
    display: 'flex', flexDirection: 'column',
    alignItems: 'center', justifyContent: 'center',
    height: '100vh', gap: '16px',
  },
  backBtn: {
    background: 'none',
    border: '1.5px solid #3B82F6',
    borderRadius: '4px',
    color: '#3B82F6',
    fontSize: '14px',
    fontWeight: '600',
    padding: '8px 20px',
    cursor: 'pointer',
    marginBottom: '32px',
  },
  container: {
    display: 'flex',
    gap: '64px',
    maxWidth: '1000px',
    margin: '0 auto',
    background: 'white',
    borderRadius: '24px',
    padding: '48px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
    flexWrap: 'wrap',
  },
  imageWrap: {
    flex: 1,
    minWidth: '280px',
    borderRadius: '16px',
    overflow: 'hidden',
    minHeight: '320px',
    background: '#f5f5f5',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  info: {
    flex: 1,
    minWidth: '280px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  category: {
    fontSize: '12px',
    fontWeight: '700',
    color: '#3B82F6',
    background: '#EFF6FF',
    padding: '4px 12px',
    borderRadius: '4px',
    alignSelf: 'flex-start',
  },
  name: {
    fontSize: '32px',
    fontWeight: '800',
    color: '#2D1B40',
    fontFamily: 'sans-serif',
  },
  desc: { fontSize: '15px', color: '#666', lineHeight: '1.7' },
  price: { fontSize: '36px', fontWeight: '800', color: '#3B82F6' },
  features: {
    background: '#F8FAFF',
    borderRadius: '12px',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  feature: { fontSize: '13px', color: '#555' },
  btnAdd: {
    padding: '16px',
    background: 'linear-gradient(135deg, #3B82F6, #60A5FA)',
    border: 'none',
    borderRadius: '8px',
    color: 'white',
    fontSize: '16px',
    fontWeight: '700',
    cursor: 'pointer',
  },
  btnBack: {
    padding: '14px',
    background: 'white',
    border: '1.5px solid #3B82F6',
    borderRadius: '8px',
    color: '#3B82F6',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
  },
}

export default ProductDetail