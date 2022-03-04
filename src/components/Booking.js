import '../App.css'



function Booking() {
  return (
    <div className="Booking">
      <span>Room:</span>
      <div class="dropbox">
    <select id="list" onchange="getSelectValue();">
     
        <option value="582">582</option>
        <option value="583">583</option>
        <option value="586">586</option>
        <option value="587">587</option>
    </select>
</div>
    </div>
  );
}






export default Booking;

