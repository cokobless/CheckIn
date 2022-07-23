function GeoLocation()
{
	this.Latitude;
	this.Longitude;
	this.Altitude;
	this.Heading;
	this.Speed;
	this.Accuracy;
	this.enableHighAccuracy;
	this.timeout;
	this.maximumAge;
	this.status;
	this.statusMessage;
	this.watchId;
	
	var myThis = this;

	this.show = function()
	{
		///UserCodeRegionStart:[show] (do not remove this comment.)
		
		
		
		///UserCodeRegionEnd: (do not remove this comment.)
	}
	///UserCodeRegionStart:[User Functions] (do not remove this comment.)
	
	this.toString = function(x) {
		return (x)?x.toString():'0.00';
	}
	
	this.success = function(pos) {
		//Coords
		myThis.Latitude = myThis.toString(pos.coords.latitude);
		myThis.Longitude = myThis.toString(pos.coords.longitude);
		myThis.Altitude = myThis.toString(pos.coords.heading);
		myThis.Speed = myThis.toString(pos.coords.speed);
		myThis.Accuracy = myThis.toString(pos.coords.accuracy);
		//Status
		myThis.status = '1'//Success
		myThis.statusMessage = 'Success';
		if (myThis.GeoCoordsSuccess)
			myThis.GeoCoordsSuccess();
	}
	
	this.error = function(err) {
		//Coords
		myThis.Latitude = "";
		myThis.Longitude = "";
		myThis.Altitude = "";
		myThis.Speed = "";
		myThis.Accuracy = "";
		//Status
		switch (err.code) {
			case 1:
				myThis.status = '3';//error: Permission Denied
				break;
			case 2:
				myThis.status = '4';//error: Position Unavailable
				break;
			case 3:
				myThis.status = '5';//error: Timeout
				break;
			default:
				myThis.status = '2';//error: Timeout
		}
		myThis.statusMessage = err.message;
		if (myThis.GeoCoordsError)
			myThis.GeoCoordsError();
	}
	
	this.getCurrentPosition = function() {
		var options = {
			enableHighAccuracy: myThis.enableHighAccuracy,
			timeout: myThis.timeout,
			maximumAge: myThis.maximumAge
		};
		navigator.geolocation.getCurrentPosition(myThis.success, myThis.error, options);
	}
	
	this.watchPosition = function() {
		var options = {
			enableHighAccuracy: myThis.enableHighAccuracy,
			timeout: myThis.timeout,
			maximumAge: myThis.maximumAge
		};
		myThis.watchId = navigator.geolocation.watchPosition(myThis.success, myThis.error, options);	
	}
	
	this.clearWatch = function() {
		navigator.geolocation.clearWatch(myThis.watchId);
	}
	
	///UserCodeRegionEnd: (do not remove this comment.):
}
