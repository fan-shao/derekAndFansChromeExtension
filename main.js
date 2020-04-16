
   
    var elementsInsideBody = [...document.body.getElementsByTagName('*')];
    // This makes an array of everything inside the body tag
    
    document.onload = findAndReplace();
    // document.onload = lists()
    document.onload = addimages()
    document.onload = cursorchange()


    //a function that loops through every single item
    function findAndReplace(){
      elementsInsideBody.forEach(element =>{
       // element.style.cursor="none"
        element.childNodes.forEach(child =>{
          if(child.nodeType === 3){
            replaceText(child);

          }
        });
    
      });
    }
      function cursorchange (){
      document.getElementById("myP").style.cursor = "gif/o0.cur"
      }

    function replaceText (node) {
        let value = node.nodeValue;
        value = value.replace(/Donald Trump/gi, 'Not Obama');
        value = value.replace(/Trump/gi, 'Not Obama :/');
        node.nodeValue = value;
    }

    
    
    // let span = document.createElement("span")
    // span.setAttribute('class', 'notObama')
    // span.innerHTML = value
    // span.style.color = 'red';
    // span.parentNode.appendChild(span)
    // span.setAttribute('onmouseover', )

// function cursorplease(){
//     let cursorAt = [...document.body.getElementsByTagName('*')].style.cursor = "gif/o0.jpg"
// }
    // let gifArray = ['toDeloot/gif/o1.jpg', 'toDeloot/gif/02.jpg']
   
//  function cursor(){
//    for (let i = 0; i < cursorArray.length+1; i++)
//   cursorAt.style.cursor  = gifArray[i];
  
//   if(i === cursorArray.length){
//     i = 0; 
//   }
//    setTimeout(cursor, 50);
// }





   // let e = document.getElementsByTagName('*');

  //  e.setAttribute("id" , "everything")
    
  //  e.onmouseout = function() {
   // document.getElementById('popup').style.display = 'none';
 
function addimages(){
var giff = document.createElement('img')
giff.src = "https://i.imgur.com/AGrTtG1.gif"
giff.setAttribute('crossOrigin' , 'anonymous')
let img = document.getElementsByTagName("img");
for(element of img){element.src="https://i.imgur.com/AGrTtG1.gif"}
}
 