var searchBoxValue;
var url;
var input = document.getElementById("text-search");
input.addEventListener("keyup", function(event){
	event.preventDefault();
	if(event.keyCode ==13){
		document.getElementById("search").click();
	}
});

function wikiopen(){
	if($("#text-search").val().length !=0){
	searchBoxValue = $("#text-search").val();
	$("#contant").empty();
	url = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&titles=&utf8=1&srsearch=' + searchBoxValue + '&srlimit=15';
	// alert(url);
	$.ajax({
		url: url,
		dataType: "jsonp",
		success: function(rep){
			for(var i =0; i<15;i++){
				$("#contant").append("<div class='box'></div>");
				/* var cont =*/ $(".box:last").append('<a class="title" target="_blank" href="https://en.wikipedia.org/wiki/' + rep.query.search[i].title + '">' + rep.query.search[i].title + '</a>');
				//alert(url);
				$(".box:last").append("<p>" + rep.query.search[i].snippet + "</p>")
			}
		}
	});
	}
}		

