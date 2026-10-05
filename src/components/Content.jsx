import roxyPhoto from '../assets/Roxy Migurdia.jpg'

const profileData = {
  name: ['ZAHID ABDUL', 'MAJID'],
  intro: 'Manusia adalah imitasi dari monyet.',
  quote: 'Kyokasuigetsu',
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
      <figure className="home-portrait">
        <img src={roxyPhoto} alt="Roxy Migurdia" />
      </figure>
    </main>
  )
}

export default Content
