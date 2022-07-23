function UCGeolocation($)
{
	this.Width;
	this.Height;
	this.Attribute;

	this.show = function()
	{
		///UserCodeRegionStart:[show] (do not remove this comment.)

		if (navigator.geolocation) {
        	navigator.geolocation.getCurrentPosition(this.ubicacion);
    	}
		
		///UserCodeRegionEnd: (do not remove this comment.)
	}
	///UserCodeRegionStart:[User Functions] (do not remove this comment.)
	var objeto = this;
	this.ubicacion = function(position) {
		document.getElementById(objeto.Attribute).value = position.coords.latitude +"," + position.coords.longitude;
		objeto.Run();		
	}
	
	///UserCodeRegionEnd: (do not remove this comment.):
}
