import Location from "./Location"

class TimeCheck{
    constructor(timestamp, location, received){
        this._timestamp = timestamp,
        this._location = new Location(location.latitude, location.longitude).plain(),
        this._received = received
    }
    checkFormat(){
        return( this._location.checkFormat() && this.checkTimestamp())
    }
    checkTimestamp(){
        if(this._received){
            return(typeof this._timestamp.seconds === 'number')
        }
        return true
    }
    plain(){
        return {
            timestamp: this._timestamp,
            location: this._location
        }
    }
}

export default TimeCheck