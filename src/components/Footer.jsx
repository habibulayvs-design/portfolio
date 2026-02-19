import { FaInstagram, FaTelegram, FaEnvelope } from 'react-icons/fa'

function Footer() {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '40px 24px',
      backgroundColor: '#1a1a1a',
      color: '#aaa',
      marginTop: '40px'
    }}>
      <p style={{ marginBottom: '16px', fontSize: '18px', color: 'white' }}>
        Bog'lanish
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '24px' }}>
        <a href="https://instagram.com/shukurllo.dev?igshid=MzRlODBiNWFlZA==" target="_blank" style={{ color: '#E1306C', fontSize: '28px' }}>
          <FaInstagram />
        </a>
        <a href="https://t.me/@shukurllo_official_2010" target="_blank" style={{ color: '#0088cc', fontSize: '28px' }}>
          <FaTelegram />
        </a>
        <a href="mailto:habibulayvs@gmail.com" style={{ color: '#f59e0b', fontSize: '28px' }}>
          <FaEnvelope />
        </a>
      </div>
      <p>© 2026 Portfolio — Barcha huquqlar himoyalangan</p>
    </footer>
  )
}

export default Footer