function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

function getyear(){
    let d = new Date();
    
    document.getElementById('current_year').textContent = d.getFullYear();
    document.getElementById('current_date').textContent = d.toDateString();
    }

const today = new Date();
console.log(today);

const dayNumber = today.getDay();
console.log(dayNumber);

const element = document.getElementById("message");
if (dayNumber == 5) {
    element.classList.add("showme");
} else {
    element.classList.add("hideme");
}
