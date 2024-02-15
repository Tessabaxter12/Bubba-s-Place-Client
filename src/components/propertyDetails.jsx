    import React, { useState } from 'react';
    import './propertyDetails.css';
    import Home from './Home';
    import { Link } from 'react-router-dom';


    const property = {
        name: 'Bubbas Place',
        description: 'Cute House With Everything You Need For The Whole Family',
        photos: [
            { filename: 'living.jpg', alt: 'living', name: 'Living Room', description: 'Custom Stone Bathroom Getaway.' },
            { filename: 'kitchen.jpg', alt: 'kitchen', name: 'Kitchen', description: 'Custom Stone Bathroom Getaway.' },
            { filename: 'dining.jpg', alt: 'dining', name: 'Dining Room', description: 'Spacious dining area for family gatherings.' },
            { filename: 'bath.jpg', alt: 'bath', name: 'Bathroom', description: 'Luxurious stone bathroom with modern amenities.' },
            { filename: 'bed.jpg', alt: 'bed', name: 'Bedroom', description: 'Comfortable bedroom with cozy furnishings.' },
            { filename: 'bed2.jpg', alt: 'bed2', name: 'Second Bedroom', description: 'Another cozy bedroom perfect for guests.' },
            { filename: 'laundry.jpg', alt: 'laundry', name: 'Laundry Room', description: 'Convenient laundry room with washer and dryer.' }
        ]
    };

    const PropertyDetails = () => {
        const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
        const previousPhoto = () => {
            setCurrentPhotoIndex(prevIndex => (prevIndex === 0 ? property.photos.length - 1 : prevIndex - 1));
        };
        const nextPhoto = () => {
            setCurrentPhotoIndex(prevIndex => (prevIndex === property.photos.length - 1 ? 0 : prevIndex + 1));
        };

        return (
            <div className="property-container">
                <h2>Ready For Your Next Adventure? </h2>
                <div className="property-buttons">
                    <Link to="/reservations">
                        <button>Book A Trip To Bubba's Place Here</button>
                    </Link>
                </div>
                <div className="content">
                        <div className="photo-container">
                            <img
                                src={`/images/PropertyDetails/${property.photos[currentPhotoIndex].filename}`}
                                alt={property.photos[currentPhotoIndex].alt}
                                style={{ width: '50%', height: 'auto' }}
                            />
                        </div>
                        <div>
                            <h4>{property.photos[currentPhotoIndex].name}</h4>
                            <p>{property.photos[currentPhotoIndex].description}</p>
                        </div>
                        <div className="property-buttons">
                            <button onClick={previousPhoto}>Previous Photo</button>
                            <button onClick={nextPhoto}>Next Photo</button>
                        </div>
                </div>
            </div>
        );
    };

    export default PropertyDetails;
