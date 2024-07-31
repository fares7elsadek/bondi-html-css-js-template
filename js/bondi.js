

// handel skills section
document.addEventListener("DOMContentLoaded",function(event){
    const FilterLinks = document.querySelectorAll(".skills .nav-link");
    const boxes = document.querySelectorAll(".skills .box")
    FilterLinks.forEach((link)=>{
        link.addEventListener("click",(e)=>{
            e.preventDefault();

            FilterLinks.forEach((l) => l.classList.remove("active"));
            link.classList.add("active");

            const filter = link.getAttribute("data-filter");

            boxes.forEach((box)=>{
                if(filter =='All' || filter == box.getAttribute("work-type")){
                    box.parentElement.style.display="block";
                }else{
                    box.parentElement.style.display="none";
                }
            })
        })
    })
});