const loyihalar = [
  {
    nom: 'Portfolio sayt',
    tavsif: 'Shaxsiy portfolio sayt — React bilan yaratilgan',
    texnologiya: ['React', 'JavaScript', 'CSS'],
    link: '#'
  },
  {
    nom: 'Todo App',
    tavsif: 'Vazifalarni boshqarish uchun ilova',
    texnologiya: ['React', 'Hooks'],
    link: '#'
  },
  {
    nom: 'Landing Page',
    tavsif: 'Mahsulot uchun zamonaviy landing page',
    texnologiya: ['HTML', 'CSS', 'JS'],
    link: '#'
  },
]

function LoyihalarSection() {
  return (
    <section style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <h2>Loyihalar</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '16px',
        marginTop: '24px'
      }}>
        {loyihalar.map((loyiha) => (
          <div
            key={loyiha.nom}
            onMouseEnter={e => e.currentTarget.style.borderColor = '#f59e0b'}
            onMouseLeave={e => e.currentTarget.style.borderColor = '#333'}
            style={{
              backgroundColor: '#1e1e1e',
              padding: '24px',
              borderRadius: '12px',
              border: '1px solid #333',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}>
            <h3 style={{ margin: '0 0 8px', color: 'white' }}>{loyiha.nom}</h3>
            <p style={{ color: '#aaa', fontSize: '14px', marginBottom: '16px' }}>{loyiha.tavsif}</p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {loyiha.texnologiya.map(tex => (
                <span key={tex} style={{
                  backgroundColor: '#333',
                  color: '#f59e0b',
                  padding: '4px 10px',
                  borderRadius: '20px',
                  fontSize: '12px'
                }}>{tex}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default LoyihalarSection