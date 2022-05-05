let course={
    courseName:"Ca",
    no:103,
    students :["Jale","Kamal","Fatime","Nergiz","Elgun"]

   
};
const tbody=document.querySelector("tbody");

course.students.forEach((student,index) => {
      
    let tr=document.createElement("tr");
    let no=document.createElement("td");
    let name=document.createElement("td");
    name.innerText=student;
    no.innerText=index+1;
    tr.appendChild(no);
    tr.appendChild(name);
    tbody.appendChild(tr);
   
    
     
      
});

// const  list= document.querySelectorAll(`["list"]`);
const newList = list.from(document.querySelectorAll(`[class*="a"]`));
console.log(newList);

// const list1 = document.querySelectorAll(`[list*="a"]`);



// let ul=document.getElementById("list");



  









// let mainDiv=document.getElementById("main");
// console.log(mainDiv)
// mainDiv.innerText="Hello";
// mainDiv.innerHTML="<p>salam</p>";

// let elementDiv=document.getElementsByClassName("main");

// let allDiv=document.getElementsByTagName("div");




