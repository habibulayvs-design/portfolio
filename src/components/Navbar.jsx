function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 40px',
      backgroundColor: '#1a1a1a',
    }}>
      <h2 style={{ color: '#f59e0b' }}>PORTFOLIO</h2>
      <div style={{ display: 'flex', gap: '24px' }}>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Bosh sahifa</a>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Haqida</a>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Bog'lanish</a>
      </div>
    </nav>
  )
}

export default Navbar