const secmek = document.querySelector('.container') ;
const counter = document.getElementById('counter');
const beren = document.getElementById('amount');
const select = document.getElementById('movie');
const seats = document.querySelectorAll('.seat:not(.reserved)'); 

getfromlocal();
autocompile();
secmek.addEventListener('click', function(e){
  if( e.target.classList.contains('seat') && !e.target.classList.contains('reserved') ){
    e.target.classList.toggle('selected');

    autocompile();
    

  }
  
});

select.addEventListener('change', function(e){
  autocompile();

});

function autocompile(e) {
  const selectedseats = secmek.querySelectorAll('.seat.selected');
  const selectedcounter = selectedseats.length;
  const selectedseatsarray = [] ;
  const seatsarray = []; 
  selectedseats.forEach(function(seat){
    selectedseatsarray.push(seat);
  });
  seats.forEach(function(seat){
    
    seatsarray.push(seat);
  });
  let selectedseatsarrayindex = selectedseatsarray.map(function(seat){
    return seatsarray.indexOf(seat);
  
  });
  console.log(selectedseatsarrayindex);
 
    counter.innerText = selectedcounter;
    
    let abc = selectedcounter * select.value;
    beren.innerText = abc;

    savetolocalstorage(selectedseatsarrayindex);
    
}

function savetolocalstorage(indexes) {
  localStorage.setItem('selectedseats', JSON.stringify(indexes));
  localStorage.setItem('selectedmovieindex', select.selectedIndex);
  
}

function getfromlocal() {

  const abrt = JSON.parse(localStorage.getItem('selectedseats'));
  const derbw = localStorage.getItem('selectedmovieindex');

  if(derbw !== null && abrt !== null){
    select.selectedIndex = derbw;
    abrt.forEach(function(index){
      seats[index].classList.add('selected');
    });
  }
}