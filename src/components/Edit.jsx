import './Edit.css';
import { v4 as uuidv4} from 'uuid'

function Edit({
    info, setInfo,
    eduInfo,
    setEduInfo,

    school,
    degree,
    startDate,
    endDate,
    location,
    setSchool,
    setDegree,
    setStartDate,
    setEndDate,
    setLocation,


    experienceInfo, 
    setExperienceInfo,
    companyName,
    setCompanyName,
    positionTitle,
    setPositionTitle,
    expStartDate,
    expEndDate,
    setExpStartDate,
    setExpEndDate,
    expLocation,
    setExpLocation,
    description,
    setDescription
    }) {
    // Personal Info Edit
    function handleFullNameChange(e)  {
        setInfo({
            ...info, 
            name: e.target.value,
        });
    }

    function handleEmailChange(e)
    {
        setInfo({
            ...info,
            email: e.target.value,
        })
    }

    function handlePhoneNumberChange(e)
    {
        setInfo({
            ...info,
            phoneNumber: e.target.value
        })
    }

    function handleLocationChange(e)
    {
        setInfo({
            ...info,
            location: e.target.value 
        })
    }

    // Education Edit
    
    const handleEduSubmit = (e) => {
        e.preventDefault();
    
        const newEduInfo = {
          id: uuidv4(),
          school,
          degree,
          startDate,
          endDate,
          location
        };
    
        setEduInfo([...eduInfo, newEduInfo]);
        // Reset input values
        setSchool('');
        setDegree('');
        setStartDate('');
        setEndDate('');
        setLocation('');
      };


      // Experience Edit
      const handleExpSubmit = (e) => {
        e.preventDefault();

        const newExperienceInfo = {
            id: uuidv4(),
            companyName,
            positionTitle,
            expStartDate,
            expEndDate,
            expLocation,
            description
        }

        setExperienceInfo([...experienceInfo, newExperienceInfo]);
        setCompanyName('');
        setPositionTitle('');
        setExpStartDate('');
        setExpEndDate('');
        setExpLocation('');
        setDescription('');
      }
    
   
  return (
    <div className='Edit'>
        <form className='card'>
            <h1>Personal Edit</h1>
            <label htmlFor="fullName">
                <h3>Full name</h3>
                <input type="text" className='fullName' id='fullName' value={info.name} onChange={handleFullNameChange}/>
            </label>

            <label htmlFor="email">
                <h3>Email <span className='smallText'>recommend</span></h3>
                <input type="email" className='emailAddress' id='email' value={info.email} onChange={handleEmailChange}/>
            </label>

            <label htmlFor="phoneNumber">
                <h3>Phone number <span className='smallText'>recommend</span></h3>
                <input type="tel" className='phoneNumber' id="phoneNumber" value={info.phoneNumber} onChange={handlePhoneNumberChange}/>
            </label>

            <label htmlFor="address">
                <h3>Address <span className='smallText'>recommend</span></h3>
                <input type="text" className='address' id="address" value={info.location} onChange={handleLocationChange}/>
            </label>
        </form>
    
         {/* EDUCATION */}
        <form className='card' onSubmit={handleEduSubmit}>
            <h1>Education</h1>
            <label htmlFor="school">
                <h3>School</h3>
                <input type="text" className='school' id='school' value={school} onChange={(e) => setSchool(e.target.value)} required/>
            </label>

            <label htmlFor="degree">
                <h3>Degree</h3>
                <input type="text" className='degreeAddress' id='degree' value={degree} onChange={(e) => setDegree(e.target.value)} required/>
            </label>

            <label htmlFor="startDate">
                <h3>Start Date</h3>
                <input type='text' className='startDate' id="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} required/>
            </label>

            <label htmlFor="endDate">
                <h3>End Date</h3>
                <input type='text' className='endDate' id="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} required/>
            </label>

            <label htmlFor="location">
                <h3>Location <span className='smallText'>optional</span></h3>
                <input type="text" className='location' id="location" value={location} onChange={(e) => setLocation(e.target.value)}/>
            </label>

            <button className='saveBtn'>Save</button>
        </form>

        <form className='card' onSubmit={handleExpSubmit}>
            <h1>Experience</h1>
            <label htmlFor="companyName">
                <h3>Company Name</h3>
                <input type="text" className='companyName' id='companyName' value={companyName} onChange={(e) => setCompanyName(e.target.value)} required/>
            </label>

            <label htmlFor="positionTitle">
                <h3>Position Title</h3>
                <input type="text" className='positionTitle' id='positionTitle' value={positionTitle} onChange={(e) => setPositionTitle(e.target.value)} required/>
            </label>

            <label htmlFor="startDate">
                <h3>Start Date</h3>
                <input type='text' className='startDate' id="startDate" value={expStartDate} onChange={(e) => setExpStartDate(e.target.value)} required/>
            </label>

            <label htmlFor="endDate">
                <h3>End Date</h3>
                <input type='text' className='endDate' id="endDate" value={expEndDate} onChange={(e) => setExpEndDate(e.target.value)} required/>
            </label>

            <label htmlFor="location">
                <h3>Location <span className='smallText'>optional</span></h3>
                <input type="text" className='location' id="location" value={expLocation} onChange={(e) => setExpLocation(e.target.value)}/>
            </label>

            <label htmlFor="description">
                <h3>Description <span className='smallText'>optional</span></h3>
                <textarea name="description" id="description" cols="30" rows="10" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            </label>

            <button type='submit' className='saveBtn'>Save</button>
        </form>
    </div>
  )
}

export default Edit