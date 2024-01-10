import './Info.css'

function Info({ info }) {
  return (
    <div className='personalInfo'>
        <h1 className='personal-info-heading'>{info.name}</h1>
        <div className="information">
            <h3 className='emailAddress'>{info.email}</h3>
            <h3 className='phoneNumber'>{info.phoneNumber}</h3>
            <h3 className='location'>{info.location}</h3>
        </div>
    </div>
  )
}

export default Info