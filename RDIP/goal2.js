<!DOCTYPE HTML>
<html>
  <head>
    <meta charset="utf-8">
    <title>unit 3</title>
  </head>
  
  <body>
        <select id="chooselan">
      <option>---select a language---</option>
      <option >english</option>
      <option>hindi</option>
    </select>
    <div id="results"></div>

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script>
    var english=["John ate an apple before afternoon[before afternoon John ate an apple][John before afternoon ate an apple]",
    	"some students like to study in the night[at night some students like to study]",
    	"John and Mary went to church[Mary and John went to church]",
    	"John went to church after eating[after eating John went to church][John after eating went to church]",
    	"did he go to market[he did go to market]",
    	"the woman who called my sister sells cosmetics[the woman who sells cosmetics called my sister][my sister who sells cosmetics called the woman][my sister who called the woman sells cosmetics]",
    	"John goes to the library and studies[John studies and goes to the library]",
    	"John ate an apple so did she[she ate an apple so did John]",
    	"the teacher returned the book after she noticed the error][the teacher noticed the error after she returned the book][after the teacher returned the book she noticed the error][after the teacher noticed the error she returned the book][she returned the book after the teacher noticed the error][she noticed the error after the teacher returned the book][after she returned the book the teacher noticed the error][after she noticed the error the teacher returned the book]",
    	"I told her that I bought a book yesterday[I told her yesterday that I bought a book][yesterday I told her that I bought a book][I bought a book that I told her yesterday][I bought a book yesterday that I told her][yesterday I bought a book that I told her]",
    ];
      $("#chooselan").on("change", function(){
        var selected = $(this).val();
        $("#results").html("You selected: " + selected);
      })
    </script>
  </body>
</html>
