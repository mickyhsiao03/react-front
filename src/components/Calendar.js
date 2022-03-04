import '../calendar.css';
import {Component} from 'react';
import {isWeekend, getDayName} from "./date-getter.js";

//some changes i made

class Calendar extends Component {
    constructor(props){
      super(props);
  
      this.state = {
        startToday: 'new test',
      };
    }

    monthView(){
        var value = 31
        const calendar = document.querySelector("#app-calendar");
        const day = document.querySelector("#day-view")
        const dateDsiplay = document.querySelector('#date')

        // clear div elements
        calendar.innerHTML = "";
        day.innerHTML="";
        dateDsiplay.innerHTML="";
        for (let day = 1; day <= value; day++) { 
            const weekend = isWeekend(day);
            const dayName = getDayName(day);
            calendar.insertAdjacentHTML("beforeend", `<div class="day ${weekend ? "weekend" : ""}"><div class="name">${dayName}<div>${day}</div><a href="/book-room?day=${day}">Available Times</a>`);
        }
    }

    weekView(){
        const calendar = document.querySelector("#app-calendar");
        const day = document.querySelector("#day-view")
        const dateDsiplay = document.querySelector('#date')

        var value = 7
        // clear div elements
        calendar.innerHTML = "";
        day.innerHTML="";
        dateDsiplay.innerHTML="";
        for (let day = 1; day <= value; day++) { 
            const weekend = isWeekend(day);
            const dayName = getDayName(day);
            calendar.insertAdjacentHTML("beforeend", `<div class="day ${weekend ? "weekend" : ""}"><div class="name">${dayName}<div>${day}</div><a href="/book-room?day=${day}">Available Times</a>`);
        }
    }

    todayView() {
        const dateDsiplay = document.querySelector('#date')
        const day = document.querySelector("#day-view")
        const calendar = document.querySelector("#app-calendar");


        var startToday = new Date();
        var dd = String(startToday.getDate()).padStart(2, '0');
        var mm = String(startToday.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = startToday.getFullYear();

        calendar.innerHTML = "";
        day.innerHTML="";
        dateDsiplay.innerHTML="";

        startToday = mm + '/' + dd + '/' + yyyy;
        dateDsiplay.appendChild(document.createTextNode(`Today's date: ${startToday}`));

        //create time table
        const tbl = document.createElement('table');
        tbl.style.width = '95%';
        tbl.style.border = '3px solid black';

        //declare the first inserted row and cell as variable
        var ir = tbl.insertRow()
        var ic = ir.insertCell()
        ic.appendChild(document.createTextNode(`Time Frames:`))
        ic.style.border = '3px solid black'

        //inserts rooms
        for(let i = 0; i < 5; i++){
            var firstRow = ir.insertCell()
            firstRow.appendChild(document.createTextNode(`room ${i+1}`))
            firstRow.style.border = '3px solid black'
        }

        //start times
        var start_hr = 9;
        var start_min = "True";

        //inserts time frames
        for (let i = 0; i < 17; i++) {
            const tr = tbl.insertRow();
            const td = tr.insertCell();

            if(start_min=="True"){
                td.appendChild(document.createTextNode(`${start_hr} : 00`));
                for(let i = 0; i < 5; i++){
                    var y = tr.insertCell()
                    var button = document.createElement('button')
                    button.id = 'bookButton'
                    button.textContent = 'book'
                    button.style.width = '100%'
                    button.style.height = '100%'
                    button.style.display = 'block'
                    y.appendChild(button);
                    y.style.border = '1px solid black'
                }
                td.style.border = '3px solid black';
                td.style.width = '100px'

                start_min = "False";
            }
            else if(start_min=="False"){
                td.appendChild(document.createTextNode(`${start_hr} : 30`));
                for(let i = 0; i < 5; i++){
                    var y = tr.insertCell()
                    var button = document.createElement('button')
                    button.id = 'bookButton'
                    button.textContent = 'book'
                    button.style.width = '100%'
                    button.style.height = '100%'
                    button.style.display = 'block'
                    y.appendChild(button);
                    y.style.border = '1px solid black'
                }
                td.style.border = '3px solid black';
                start_hr++;
                start_min = "True";
            }   
          }
        day.appendChild(tbl);
    }

    componentDidMount() {
        window.addEventListener('load', this.todayView);
    }


    render(){
        return(
            <div>
                <div id="header">
                    <button id="today" onClick={this.todayView}>Today</button>
                    <button id="month" onClick={this.monthView}>Month</button>
                    <button id="week" onClick={this.weekView}>Week</button>
                </div>
                <div id="date"></div>
                <div id="day-view"></div>
                <div id="app-calendar"></div>
            </div>
        )
    }
}

export default Calendar;
  








