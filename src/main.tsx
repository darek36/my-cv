import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.scss'


//23 00:00


interface Experience {
  year: string  
  description: string;
}

interface CVData {
  photo: string;
  name: string;
  lastName: string;
  position: string;
  experience: Experience[];
  education: string[];
}

const cvData: CVData = {
  photo: 'https://placehold.co/400x400?text=MG',
  name: 'MArcin',
  lastName: 'Gajda',
  position: 'Senior Frontend Developer',
  experience: [
    {
      year: '2020 - present',
      description: 'Senior Frontend Developer at XYZ Company',
    },
    {
      year: '2017 - 2020',
      description: 'Frontend Developer at ABC Inc.',
    },
  ],
  education: [
    'B.Sc. in Computer Science, University of Technology, 2013-2017',
    'M.Sc. in Software Engineering, University of Technology, 2017-2019',
  ],
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main className='cv-main'>
      <header className='cv-header'>
        <h1>CV {cvData.name} {cvData.lastName}</h1>
      </header>
      <aside className='cv-personal'>
        <h2>Personal data</h2>
        <img className='cv-photo' src={cvData.photo} alt={`${cvData.name} ${cvData.lastName} profile photo`} />
        <p>{cvData.name} {cvData.lastName}</p>
        <small>{cvData.position}</small>
      </aside>
      <section className='cv-details'>
        <h2>Experience</h2>
        <ul>
          {cvData.experience.map(experience => (
            <li key={experience.year}>
              <strong>{experience.year}</strong> - {experience.description}
            </li>
          ))}
        </ul>
        <h2>Education</h2>
        <ul>
          {cvData.education.map((education, index) => (
            <li key={index}>
              <strong>{education}</strong>
            </li>
          ))}
        </ul> 
      </section>

    </main>
  </StrictMode>,
)
