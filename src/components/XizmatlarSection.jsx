import { FaSearch, FaPaintBrush, FaCode, FaBug } from 'react-icons/fa'

const xizmatlar = [
  { icon: <FaSearch />, nom: 'SEO', tavsif: 'Qidiruv tizimlarida saytni yuqori ko\'rsatish' },
  { icon: <FaPaintBrush />, nom: 'Dizayn', tavsif: 'Chiroyli va zamonaviy dizayn yaratish' },
  { icon: <FaCode />, nom: 'Sifat', tavsif: 'Yuqori sifatli kod yozish' },
  { icon: <FaBug />, nom: 'Testorlik', tavsif: 'Dasturni tekshirish va xatolarni topish' },
]

function XizmatlarSection() {
  return (
    <section style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <h2>Men nimalar qila olaman</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '16px',
        marginTop: '24px'
      }}>
        {xizmatlar.map((x) => (
          <div key={x.nom} style={{
            backgroundColor: '#1e1e1e',
            padding: '24px',
            borderRadius: '12px',
            display: 'flex',
            gap: '16px',
            alignItems: 'flex-start'
          }}>
            <span style={{ fontSize: '24px', color: '#f59e0b' }}>{x.icon}</span>
            <div>
              <h3 style={{ margin: 0 }}>{x.nom}</h3>
              <p style={{ color: '#aaa', margin: '8px 0 0' }}>{x.tavsif}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default XizmatlarSection