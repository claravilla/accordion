$(".question-title").click(function(evt){
    var clickedQuestion=evt.target.id;  /// store the ID value of the question clicked
    console.log (clickedQuestion);  

    var clickedAnswer = $("#"+clickedQuestion).next();  // find the next sibling of the clicked question div, which is the answer div
    console.log(clickedAnswer);

    var clickedArrow = $("#"+clickedQuestion).children().filter(".arrow");  //find the arrow in the div (as it's a child of the question div)
    console.log(clickedArrow);

    clickedAnswer.toggleClass("visible");  //this is answer paragraph 

    $("#"+clickedQuestion).toggleClass("faq-highlighted");  //look for the selected question and add bold


    clickedArrow.toggleClass("reverse");

});

