import { useNavigate } from 'react-router-dom'

function Cart({ cart, removeFromCart, updateQty }) {
  const navigate = useNavigate()
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0)

  if (cart.length === 0) {
    return (
      <div style={styles.empty}>
        <span style={{ fontSize: '80px' }}>🛒</span>
        <h2 style={styles.emptyTitle}>Ton panier est vide !</h2>
        <p style={{ fontSize: '15px', color: '#888' }}>Ajoute des peluches pour commencer 🧸</p>
        <button style={styles.btnShop} onClick={() => navigate('/')}>Voir la boutique</button>
      </div>
    )
  }

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Mon Panier</h1>
      <div style={styles.container}>

        {/* Tableau */}
        <div style={styles.tableWrap}>
          <table style={styles.table}>
            <thead>
              <tr style={styles.thead}>
                <th style={styles.th}>Produit</th>
                <th style={styles.th}>Prix</th>
                <th style={styles.th}>Quantité</th>
                <th style={styles.th}>Total</th>
                <th style={styles.th}></th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <tr key={item.id} style={styles.tr}>
                  <td style={styles.td}>
                    <div style={styles.productCell}>
                      <img src={item.image} alt={item.name} style={styles.itemImg} />
                      <span style={styles.itemName}>{item.name}</span>
                    </div>
                  </td>
                  <td style={styles.td}>{item.price} €</td>
                  <td style={styles.td}>
                    <div style={styles.qtyRow}>
                      <button style={styles.qtyBtn} onClick={() => updateQty(item.id, item.qty - 1)}>−</button>
                      <span style={styles.qty}>{item.qty}</span>
                      <button style={styles.qtyBtn} onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                    </div>
                  </td>
                  <td style={styles.td}><strong>{item.price * item.qty} €</strong></td>
                  <td style={styles.td}>
                    <button style={styles.removeBtn} onClick={() => removeFromCart(item.id)}>✕</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Récap */}
        <div style={styles.summary}>
          <h2 style={styles.summaryTitle}>Récapitulatif</h2>
          <div style={styles.summaryRow}>
            <span>Articles ({cart.reduce((a, i) => a + i.qty, 0)})</span>
            <span>{total} €</span>
          </div>
          <div style={styles.summaryRow}>
            <span>Livraison</span>
            <span style={{ color: '#16A34A' }}>{total >= 50 ? 'Gratuite 🎉' : '4.99 €'}</span>
          </div>
          <div style={styles.divider} />
          <div style={{ ...styles.summaryRow, fontWeight: '800', fontSize: '16px' }}>
            <span>Total</span>
            <span style={{ color: '#3B82F6', fontSize: '20px' }}>
              {total >= 50 ? total : (total + 4.99).toFixed(2)} €
            </span>
          </div>
          <button style={styles.btnOrder} onClick={() => alert('Commande passée ! 🎉')}>
            Valider la commande
          </button>
          <button style={styles.btnContinue} onClick={() => navigate('/')}>
            Continuer mes achats
          </button>
        </div>
      </div>
    </div>
  )
}

const styles = {
  page: { minHeight: '100vh', background: '#FFF5FA', padding: '32px 48px' },
  title: { fontSize: '28px', fontWeight: '800', color: '#2D1B40', marginBottom: '24px' },
  container: { display: 'flex', gap: '32px', alignItems: 'flex-start', flexWrap: 'wrap' },
  tableWrap: { flex: 2, minWidth: '300px', background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' },
  table: { width: '100%', borderCollapse: 'collapse' },
  thead: { background: '#F8FAFF' },
  th: { padding: '16px', textAlign: 'left', fontSize: '13px', fontWeight: '700', color: '#888', borderBottom: '1px solid #EEE' },
  tr: { borderBottom: '1px solid #F5F5F5' },
  td: { padding: '16px', fontSize: '14px', color: '#444', verticalAlign: 'middle' },
  productCell: { display: 'flex', alignItems: 'center', gap: '12px' },
  itemImg: { width: '56px', height: '56px', borderRadius: '10px', objectFit: 'cover', background: '#f5f5f5' },
  itemName: { fontWeight: '600', color: '#2D1B40' },
  qtyRow: { display: 'flex', alignItems: 'center', gap: '8px' },
  qtyBtn: { width: '28px', height: '28px', borderRadius: '6px', border: '1.5px solid #3B82F6', background: 'white', color: '#3B82F6', fontSize: '16px', fontWeight: '700', cursor: 'pointer' },
  qty: { fontSize: '15px', fontWeight: '700', minWidth: '20px', textAlign: 'center' },
  removeBtn: { background: 'none', border: 'none', color: '#999', fontSize: '16px', cursor: 'pointer', fontWeight: '700' },
  summary: { flex: 1, minWidth: '260px', background: 'white', borderRadius: '16px', padding: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', position: 'sticky', top: '80px' },
  summaryTitle: { fontSize: '18px', fontWeight: '800', color: '#2D1B40', marginBottom: '20px' },
  summaryRow: { display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#555', marginBottom: '12px' },
  divider: { height: '1px', background: '#EEE', margin: '16px 0' },
  btnOrder: { width: '100%', padding: '15px', background: 'linear-gradient(135deg, #3B82F6, #60A5FA)', border: 'none', borderRadius: '8px', color: 'white', fontSize: '15px', fontWeight: '700', cursor: 'pointer', marginBottom: '10px' },
  btnContinue: { width: '100%', padding: '13px', background: 'white', border: '1.5px solid #3B82F6', borderRadius: '8px', color: '#3B82F6', fontSize: '14px', fontWeight: '600', cursor: 'pointer' },
  empty: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '80vh', gap: '16px', textAlign: 'center' },
  emptyTitle: { fontSize: '24px', fontWeight: '800', color: '#2D1B40' },
  btnShop: { padding: '14px 32px', background: 'linear-gradient(135deg, #3B82F6, #60A5FA)', border: 'none', borderRadius: '8px', color: 'white', fontSize: '15px', fontWeight: '700', cursor: 'pointer', marginTop: '8px' },
}

export default Cart