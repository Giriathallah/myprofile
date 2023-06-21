const menu = document.getElementById("navMenu");
if (menu.classList.contains("hidden")){
    console.log("horre")
}
function onburger(e) {
    if (e.classList.contains("bi-list")) {
      e.classList.remove("bi-list");
      e.classList.add("bi-x-lg");

     

    } else if (e.classList.contains("bi-x-lg")) {
      e.classList.remove("bi-x-lg");
      e.classList.add("bi-list");
      
    }
    
  }

  
  