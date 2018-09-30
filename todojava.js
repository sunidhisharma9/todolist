
//adding new element
function newElement(){
 var item= document.getElementById("input").value
 var text= document.createTextNode( item )
 var newItem= document.createElement("li")
 newItem.appendChild(text)
 document.getElementById("myUL").appendChild(newItem)
}