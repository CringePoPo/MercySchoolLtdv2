// Gallery individual view

let darkBoxVisible = false;

function showDarkbox(url) {
  if(!darkBoxVisible) {
   let x = (window.innerWidth - 1280) / 2;
   let y = window.scrollY + 50;
   // Create the darkBox
   var div = document.createElement("div");
   div.id = "darkbox";
   div.innerHTML = '<img class="darkboximg" src="'+url+'" />';
   document.body.appendChild(div);
   let box = document.getElementById("darkbox");
   box.style.left = x.toString()+"px";
   box.style.top = y.toString()+"px";
   box.style.height = 'auto';
   box.addEventListener('click', (event) => {
    // Remove it
    let element = document.getElementById("darkbox");
    element.parentNode.removeChild(element);
    darkBoxVisible = false;
   })
   darkBoxVisible = true;
 } else {
   // Remove it
   let element = document.getElementById("darkbox");
   element.parentNode.removeChild(element);
   darkBoxVisible = false;
}
}

window.addEventListener('load', (event) => {
  let images = document.querySelectorAll(".ga img");
  if(images !== null && images !== undefined && images.length > 0) {
   images.forEach(function(img) {
    img.addEventListener('click', (evt) => {
     showDarkbox(img.src);
    });
   });
  }
 });