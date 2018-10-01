//using jquery
// checking list out
 $("ul").on("click","li",function(){
$(this).toggleClass("completed");
 
});

 //clicking delete
 $("ul").on("click","span",function(event){
 	$(this).parent().remove();
   event.stopPropagation();
 });

//adding new tasks
 $("input[type='text']").keypress(function(event){
   if(event.which===13){
   	var todoText=$(this).val();
   $(this).val("");
 $("ul").append("<li>"+ todoText +" <span>X</span></li>");
   }
 });