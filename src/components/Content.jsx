import heroImg from '../assets/hero.png'

const profileData = {
  name: ['ZAHID ABDUL', 'MAJID'],
  intro: 'Manusia adalah imitasi dari monyet.',
  quote: 'Kyokasuigetsu',
  details: [
    { label: 'NIM', value: '2502948' },
    { label: 'NO WA', value: '082127670060' },
    { label: 'Email', value: 'Thundah@gmail.com' },
    { label: 'Rank', value: 'The Almighty' },
    { label: 'Skill', value: 'Aura Manipulation' },
  ],
  image: heroImg,
  alt: 'Foto profil Zahid Abdul Majid',
}

function Content() {
  return (
    <main className="profile-page">
      <section className="intro-section">
        <p className="eyebrow">HELLO, I AM</p>
        <h1>
          <span className="name-line">{profileData.name[0]}</span>
          <br />
          {profileData.name[1]}
        </h1>
        <p className="intro-text">{profileData.intro}</p>
        <div className="intro-line"></div>
        <p className="intro-label">{profileData.quote}</p>
      </section>

      <section className="details-section">
        <img className="profile-photo" src={profileData.image} alt={profileData.alt} />
        <div className="details-content">
          <div className="section-heading">
            <h2>Data Diri</h2>
          </div>
          <div className="bio-info">
            {profileData.details.map((item) => (
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

export default Content
