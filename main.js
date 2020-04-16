const header = document.getElementById("grid-title");
header.parentNode.removeChild(header);


const img = document.querySelector('img')
const replaceImg = document.createElement('img')
img.src =" https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Ducks_in_plymouth%2C_massachusetts.jpg/1280px-Ducks_in_plymouth%2C_massachusetts.jpg"
img.parentNode.removeChild(img)
img.parentNode.prepend(replaceImg)