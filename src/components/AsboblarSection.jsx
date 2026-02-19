import { FaReact, FaFigma } from 'react-icons/fa'
import { SiJavascript, SiTailwindcss, SiNextdotjs } from 'react-icons/si'

const asboblar = [
  { icon: <SiJavascript size={40} color="#f7df1e" />, nom: 'JavaScript' },
  { icon: <FaReact size={40} color="#61dafb" />, nom: 'React' },
  { icon: <SiTailwindcss size={40} color="#38bdf8" />, nom: 'Tailwind' },
  { icon: <SiNextdotjs size={40} color="white" />, nom: 'Next.js' },
  { icon: <FaFigma size={40} color="#a259ff" />, nom: 'Figma' },
]

function AsboblarSection() {
  return (
    <section style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <h2>Asbob-uskunalar</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '16px',
        marginTop: '24px'
      }}>
        {asboblar.map((asbob) => (
          <div
            key={asbob.nom}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#2a2a2a'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#1e1e1e'}
            style={{
              backgroundColor: '#1e1e1e',
              padding: '24px',
              borderRadius: '12px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              border: '1px solid #333'
            }}>
            {asbob.icon}
            <span>{asbob.nom}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AsboblarSection