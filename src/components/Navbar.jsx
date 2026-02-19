function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 20px',
      backgroundColor: '#1a1a1a',
    }}>
      <h2 style={{ color: '#f59e0b', fontSize: '16px' }}>PORTFOLIO</h2>
      <div style={{ display: 'flex', gap: '12px' }}>
        <a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '13px' }}>Bosh sahifa</a>
        <a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '13px' }}>Haqida</a>
        <a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '13px' }}>Bog'lanish</a>
      </div>
    </nav>
  )
}

export default Navbar