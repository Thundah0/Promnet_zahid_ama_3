import heroImg from '../assets/hero.png'

const profileDetails = [
  { label: 'NIM', value: '2502948' },
  { label: 'NO WA', value: '082127670060' },
  { label: 'Email', value: 'Thundah@gmail.com' },
  { label: 'Rank', value: 'The Almighty' },
  { label: 'Skill', value: 'Aura Manipulation' },
]

function About() {
  return (
    <main className="route-page about-page">
      <section className="about-intro">
        <p className="eyebrow">ABOUT ME</p>
        <h1>Tentang Saya</h1>
      </section>

      <section className="details-section">
        <img className="profile-photo" src={heroImg} alt="Foto profil Zahid Abdul Majid" />
        <div className="details-content">
          <div className="section-heading">
            <h2>Data Diri</h2>
          </div>
          <div className="bio-info">
            {profileDetails.map((item) => (
              <p key={item.label}>
                <strong>{item.label}</strong>
                <span>{item.value}</span>
              </p>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default About