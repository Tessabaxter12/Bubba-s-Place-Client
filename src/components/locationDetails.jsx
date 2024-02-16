import React from 'react';
import './locationDetails.css';

const LocationDetails = () => {
    return (
        <div className="location-container">
            <div className="maps">
                <img className="willowCreek" src="/willowCreek.png" alt="Aerail Map Of Willow Creek" width="500" height="400"/>
                <img className="willowCreek" src="/willowCreek2.png" alt="Google Map Of Willow Creek" width="500" height="400"/>
            </div> 
            <h1>Bubba's Place Is Located In The Town Of Willow Creek</h1>
            <div className="willowCreek-container">
                <p>Nestled in the picturesque mountains of Humboldt County, California, Willow Creek, once known as China Flat, is a tranquil community.
                    Its quaint charm and natural beauty draw visitors from far and wide.
                    According to the census, Willow Creek is home to about to 1,700 residences. 
                    Situated approximately 30 miles from Eureka, the county seat and bustling harbor city.
                    Willow Creek boasts a markedly different climate. While Eureka enjoys coastal breezes and temperate weather.
                    Willow Creek's mountainous terrain offers a distinct warmer climate, attracting those seeking solace in nature's embrace.
                </p>
            </div>
        </div>
    );
};

export default LocationDetails;