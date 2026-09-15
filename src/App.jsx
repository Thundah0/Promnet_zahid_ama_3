import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <p className="logo">MY PROFILE</p>
        <p className="header-note">Personal Information</p>
      </header>

      <main className="profile-page">
        <section className="intro-section">
          <p className="eyebrow">HELLO, I AM</p>
          <h1><span className="name-line">ZAHID ABDUL</span><br />MAJID</h1>
          <p className="intro-text">
            Manusia adalah imitasi dari monyet.
          </p>
          <div className="intro-line"></div>
          <p className="intro-label">Kyokasuigetsu</p>
        </section>

        <section className="details-section">
          <img className="profile-photo" src={heroImg} alt="Foto profil Zahid Abdul Majid" />
          <div className="details-content">
            <div className="section-heading">
              <p className="eyebrow">ABOUT ME</p>
              <h2>Data Diri</h2>
            </div>
            <div className="bio-info">
              <p><strong>NIM</strong><span>2502948</span></p>
              <p><strong>NO WA</strong><span>082127670060</span></p>
              <p><strong>Email</strong><span>Thundah@gmail.com</span></p>
              <p><strong>Rank</strong><span>The Almighty</span></p>
              <p><strong>Skill</strong><span>Aura Manipulation</span></p>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}

export default App
