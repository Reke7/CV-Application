import { useState } from 'react'
import './App.css'
import Loader from './Loader'
import Edit from './components/Edit'
import Education from './components/Education/Education'
import Experience from './components/Experience/Experience'
import Info from './components/Resume/Info'
import uuid from 'uuid';

function App() {

  // For Info Component
  const [info, setInfo] = useState({
    name: 'Josephine Rogers',
    email: 'josephine.meyer@gmail.com',
    phoneNumber: '+44 3245 5521 4531',
    location: 'London, UK'
  });


  // Education Component
  const [eduInfo, setEduInfo] = useState([
      {
      id: uuid(),
      school: 'London City University',
      degree: 'Bachelors in Economics',
      startDate: '08/2020',
      endDate: '08/2024',
      location: 'New York City, US'
    }
  ]);
  const [school, setSchool] = useState('');
  const [degree, setDegree] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [location, setLocation] = useState('');


  // Experience Component
  const [experienceInfo, setExperienceInfo] = useState([
    {
      id: uuidv4(),
      companyName: 'Umbrella Inc.',
      positionTitle: 'UX Designer',
      expStartDate: '08/2020',
      expEndDate: 'present',
      expLocation: 'New York City, US',
      description: `
      Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android`
    }
  ]);
  const [companyName, setCompanyName] = useState('');
  const [positionTitle, setPositionTitle] = useState('');
  const [expStartDate, setExpStartDate] = useState('');
  const [expEndDate, setExpEndDate] = useState('');
  const [description, setDescription] = useState('');
  const [expLocation, setExpLocation] = useState('');

  return (
    <>
      <div className="container row">
        <div className="editInfo col">
          <Loader setInfo={setInfo} setEduInfo={setEduInfo} setExperienceInfo={setExperienceInfo}/>
          <Edit 
          info={info} setInfo={setInfo}
          eduInfo={eduInfo}
          setEduInfo={setEduInfo}

          school={school} setSchool={setSchool}
          degree={degree} setDegree={setDegree}
          startDate={startDate} setStartDate={setStartDate}
          endDate={endDate} setEndDate={setEndDate}
          location={location} setLocation={setLocation}

          experienceInfo={experienceInfo}
          setExperienceInfo={setExperienceInfo}

          companyName={companyName} setCompanyName={setCompanyName}
          positionTitle={positionTitle} setPositionTitle={setPositionTitle}
          expStartDate={expStartDate} setExpStartDate={setExpStartDate}
          expEndDate={expEndDate} setExpEndDate={setExpEndDate}
          description={description} setDescription={setDescription}
          expLocation={expLocation} setExpLocation={setExpLocation}
          />
        </div>
        <div className="resume-container row">
            <div className="info"><Info info={info}/></div>

            <div className='eduExp'>
              <Education eduInfo={eduInfo}
              school={school} 
              degree={degree} 
              startDate={startDate} 
              endDate={endDate} 
              location={location}/>
              <Experience experienceInfo={experienceInfo}/>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
