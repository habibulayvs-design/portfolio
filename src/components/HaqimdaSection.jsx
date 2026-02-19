function HaqimdaSection() {
  return (
    <section style={{
      display: 'flex',
      gap: '40px',
      padding: '60px 40px',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      
      {/* Chap tomon */}
      <div style={{ minWidth: '200px', textAlign: 'center' }}>
        <img 
          src="/dev.jpg" 
          alt="profil"
          style={{ 
            width: '150px', 
            height: '150px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '3px solid #f59e0b'
          }}
        />
        <h3 style={{ marginTop: '12px' }}>Shukurllo</h3>
        <p style={{ color: '#aaa' }}>Web dasturchi</p>
      </div>

      {/* O'ng tomon */}
      <div>
        <h1>Men haqimda</h1>
        <p style={{ color: '#ccc', lineHeight: '1.8' }}>
          Men veb dasturchiман. Zamonaviy va chiroyli saytlar yaratishni yaxshi ko'raman.
        </p>
        <button style={{
          backgroundColor: '#f59e0b',
          color: 'black',
          padding: '10px 24px',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          marginTop: '16px'
        }}>
          Bog'lanish
        </button>
      </div>

    </section>
  )
}

export default HaqimdaSection