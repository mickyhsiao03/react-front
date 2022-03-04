import './FloorPlan.css'



function FloorPlan() {
    return (
      <div className="FloorPlan">
      <div className='confirmArea'>
    <p className='bookInfo'>Booking Information</p>
    <p> Room No.: 582</p>
    <p> Date: 03/03/2022</p>
    <p> Time: 10:30 - 12:30</p>
    <div className='bookingBtn'>
    <button className='confirmBtn'>Confirm</button>
    <button className='cancelBtn'>Cancel</button>
    </div>
    </div>
      </div>
   
    );
  }
  
  export default FloorPlan;
  