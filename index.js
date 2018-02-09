$(document).ready(function(){
		var quote='';
		var author='';
		function getQuote(){	
    $.ajax({
      url:"https://api.forismatic.com/api/1.0/",
      jsonp: "jsonp",
      dataType: "jsonp",
      data: {
        method: "getQuote",
        lang: "en",
        format: "jsonp"
      },
      success: function(post) {
      	quote = post.quoteText;
      	author = post.quoteAuthor;

        // If the Source is available, use it. Otherwise hide it.
        if (author = post.quoteAuthor){
        $('#quote-content').html(post.quoteText);
        $('#quote-title').text("-  "+post.quoteAuthor);
        } else {
        $('#quote-content').html(quote);
        $('#quote-title').text("Unkown");
        }
    },
     
      cache: false
    });
};

    $('.quotebtn').on('click', function(event){
    	event.preventDefault();
    	getQuote();
    });


    $('.twitter').on('click', function (){
    	$(this).attr('href','https://twitter.com/intent/tweet?text='+quote+" -"+author);
       });
});
