#Loading Modules
A jQuery Plugin that displays a loading image of your choice.


	var settingsObject = {
		loadingImage : './loading.gif'
	}
	$('#domElement').loadingmodules(settingsObject);

	/* When your asynchronous activity is done */
	setTimeout(function(){
		$('#domElement').loadingmodules('complete').append('<p>I am done</p>');
	}, 2000);
				

###*Note
Your "#domElement" needs to have layout with a set with and height.