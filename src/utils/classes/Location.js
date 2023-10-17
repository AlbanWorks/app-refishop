class Location {
    constructor(latitude, longitude){
        this._latitude = latitude,
        this._longitude = longitude
    }
    checkFormat(){
        return (typeof this._latitude === 'number' && typeof this._longitude === 'number')
    }
    plain(){
        return {
            latitude: this._latitude,
            longitude: this._longitude
        }
    }
}
export default Location