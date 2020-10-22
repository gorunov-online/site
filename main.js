$.getJSON( "http://test.gorunov.online:81/api/get", function( data ) {
	var app = data.data;
	for (let i = 0; i < app.length; i++) {
	var sh = "<div class='post mt-4'><h2>"+app[i].title+"</h2><br><p>"+app[i].text+"</p><br><i>Автор: "+app[i].author+"</i></div><br>";
	$("#vueapp").append(sh);
	
}
});