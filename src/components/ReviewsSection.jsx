const reviewlar = [
  {
    ism: 'Abdulloh',
    lavozim: 'Mijoz',
    fikr: 'Juda zo\'r dasturchi! Saytni vaqtida va sifatli qilib berdi.',
  },
  {
    ism: 'Sardor',
    lavozim: 'Hamkor',
    fikr: 'React bilan ajoyib ishlaydi, har doim yangi g\'oyalar bilan keladi.',
  },
  {
    ism: 'Malika',
    lavozim: 'Mijoz',
    fikr: 'Kodni tushuntirib beradigan, mas\'uliyatli dasturchi!',
  },
]

function ReviewsSection() {
  return (
    <section style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <h2>Mijozlar fikri</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '16px',
        marginTop: '24px'
      }}>
        {reviewlar.map((r) => (
          <div key={r.ism} style={{
            backgroundColor: '#1e1e1e',
            padding: '24px',
            borderRadius: '12px',
            border: '1px solid #333',
          }}>
            <p style={{ color: '#ccc', fontStyle: 'italic', marginBottom: '16px' }}>
              "{r.fikr}"
            </p>
            <h4 style={{ margin: 0, color: '#f59e0b' }}>{r.ism}</h4>
            <p style={{ color: '#aaa', fontSize: '13px', margin: '4px 0 0' }}>{r.lavozim}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ReviewsSection