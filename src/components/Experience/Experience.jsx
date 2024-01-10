import './Experience.css'

function Experience({ experienceInfo }) {
  const expInfoList = experienceInfo.map(exp =>
    <div key={exp.id} className='row'>
      <div className="durationLocation" style={{width:'50%'}}>
        <p className="duration">{exp.expStartDate} - {exp.expEndDate}</p>
        <p className="location">{exp.expLocation}</p>
      </div>
      <div className="experienceInfo" style={{width:'50%'}}>
        <h4 className='company'>{exp.companyName}</h4>
        <p className="positionTitle">{exp.positionTitle}</p>
        <p className="description">
        {exp.description}
        </p>
      </div>
    </div>
  );

  return (
    <div>
      <h3 className="experience">Professional Experience</h3>
      <div className="expInfo col">
        {expInfoList}
      </div>
    </div>
  )
}

export default Experience