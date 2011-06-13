

;(function($){

	var  loadingModuleClass = 'loadingmodules'
		,settings = {
			 loadingImage : ''
			,addedWidth : 0
			,addedHeight : 0
		};
	

	$.fn.loadingmodules = function(options){
		
		if(typeof options === 'string'){
			switch(options){
				case 'complete' :
					this.find('.' + loadingModuleClass).remove();
					break;
			}
			return this;
		}
		
		$.extend(settings, options);
		
		var loadingImage = '<img class="' + loadingModuleClass + '" src="' + settings.loadingImage + '" />';
		
		var  tempImage = $(loadingImage).css('display', 'none').appendTo(document)
			,imageWidth = tempImage.innerWidth()
			,imageHeight = tempImage.innerHeight();
			
			tempImage.remove();
		
		return this.each(function(i, d){
			var  $this = $(this)
				,thisWidth = $this.width()
				,thisHeight = $this.height();
			
				$(loadingImage).css({
					 position : 'absolute'
					,left : '' + ((imageWidth/2) + settings.addedWidth + (thisWidth/2)) + 'px'
					,top : '' + ((imageHeight/2) + settings.addedHeight + (thisHeight/2)) + 'px'
				}).appendTo(this);
			
		});
		
	};

})(jQuery);
