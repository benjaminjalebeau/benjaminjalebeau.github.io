function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

function getyear(){
    let d = new Date();
    
    document.getElementById('current_year').textContent = d.getFullYear();
    document.getElementById('current_date').textContent = d.toDateString();
    }


