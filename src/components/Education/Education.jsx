import './Education.css'

function Education({eduInfo}) {

  const eduInfoList = eduInfo.map(edu =>
    <div key={edu.id} className='row'>
      <div className="durationLocation" style={{width:'50%'}}>
        <p className="duration"> {edu.startDate} - {edu.endDate}</p>
        <p className="location">
        {edu.location}</p>
      </div>

      <div className="schoolDegree" style={{width:'50%'}}>
        <p className="school">{edu.school}</p>
        <p className="degree">{edu.degree}</p>
      </div>
    </div>
  );

  return (
    <div className='education'>
      <h3 className='educat'>Education</h3>
      <div className="eduInfo col">
        {eduInfoList}
      </div>
    </div>
  )
}

export default Education