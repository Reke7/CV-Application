import './loader.css'

function Loader({ setInfo, setEduInfo, setExperienceInfo}) {

  const handleClearResume = (e) => {
    e.preventDefault();

    setInfo([{}]);
    setEduInfo([]);
    setExperienceInfo([]);
  }

  return (
    <>
        <div className="buttons card">
            <button className='clearResume' onClick={handleClearResume}>Clear Resume</button>
            {/* <button className="loadExample">Load Example</button> */}
        </div>
    </>
  )
}

export default Loader