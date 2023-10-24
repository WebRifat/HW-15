let sidebarBtn = document.querySelector(".sidebarBtn");
let sideBar = document.querySelector(".sideBar");






  function opensidebar () {


  sideBar.classList.add('active');


    

  }



sidebarBtn.addEventListener('click' , opensidebar);















let crossBtn = document.querySelector(".crossBtn");

function closesidebar (event) {


    

    
    if
    
    
    (
        
        
        event.target.classList.contains('sideBar') 
    ||

    event.target.classList.contains('crossBtn')

    
    
    
    
    
    ) {

        sideBar.classList.remove('active');

    }

}








crossBtn.addEventListener('click' , closesidebar);
sideBar.addEventListener('click' , closesidebar);










