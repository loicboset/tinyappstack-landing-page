import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSlack, faGithub } from '@fortawesome/free-brands-svg-icons'

import Particles from './components/Particles';

function App() {

  const texts = [
    {
      title: "Come as you are",
      paragraph: "Whether you are just learning how to code or you already have years of experience, you are welcome."
    },
    {
      title: 'Participate as much as you want',
      paragraph: 'Solving a ticket, coding a feature or building a complete app from scratch. Do what you do best.'
    },
    {
      title: 'Grow your skills',
      paragraph: 'We build apps together. We learn from each other. You are not alone.'
    }
  ]

  return (
    <main>

      <section className='flex flex-col items-center justify-center min-h-screen p-4 text-center text-white md:p-10'>
        <Particles />
        <a
          href='https://github.com/orgs/Tiny-App-Stack/dashboard'
          target="_blank" rel="noreferrer"
          className='absolute text-xl top-2 left-2 md:top-10 md:left-10 hover:underline'
        >
          Tiny App Stack
        </a>
        <h1 className='mb-20 space-y-4 text-6xl'>
          <span className='block'>Code. Learn. Grow.</span>
          <br/>
          <span>Together.</span>
        </h1>
        <h2 className='text-2xl md:text-4xl'>A developers community for building <br/> meaningful open-source applications.</h2>
      </section>

      <section
        style={{ backgroundColor: '#041562' }}
        className='flex flex-col justify-between py-10 text-white'
      >

        <div className='flex flex-col items-center justify-center mb-20 text-center'>
          <h3 className='mb-4 text-4xl'>Join the tribe!</h3>
          <div className='space-x-10'>
            <a
              className='hover:text-red-600'
              href='https://tinyappstack.slack.com'
              target='_blank'
              rel='noreferrer'
            >
              <FontAwesomeIcon icon={faSlack} className='text-4xl' />
            </a>
            <a
              className='hover:text-gray-400'
              href='https://github.com/orgs/Tiny-App-Stack/dashboard'
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className='text-4xl' />
            </a>
          </div>
        </div>

        <div className='flex flex-col items-start justify-center mx-10 mb-10 space-y-10 text-center lg:space-y-0 lg:mx-20 lg:space-x-20 lg:flex-row'>
          {texts.map((text, index) => (
            <div key={index} className='mb-4'>
              <h4 className='mb-4 text-2xl capitalize lg:mb-10'>{text.title}</h4>
              <p className='text-xl'>{text.paragraph}</p>
            </div>
          ))}
        </div>

      </section>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
      <link href="https://fonts.googleapis.com/css2?family=Bungee+Shade&display=swap" rel="stylesheet" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
      <link href="https://fonts.googleapis.com/css2?family=Overpass+Mono&display=swap" rel="stylesheet" />
    </main>
  );
}

export default App;
