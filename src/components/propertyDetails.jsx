    import React, { useState } from 'react';

    const property = {
        name: 'Inside House',
        description: 'Cute House With Everything You Need For The Whole Family',
        photos: [
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
            <div>
                <h3>Ready For Your Nex Adventure? </h3>
                <button> Book A Trip At Bubba's Place</button>
                <div className='m-3'style={{ maxWidth: '100%', maxHeight: '400px', overflow: 'hidden' }}>
                    {/* Render property photos */}
                    <img
                        src={`/images/PropertyDetails/${property.photos[currentPhotoIndex].filename}`}
                        alt={property.photos[currentPhotoIndex].alt}
                        style={{ width: '50%', height: 'auto' }} // Adjust width and height as needed
                    />
                </div>
                <div>
                    <h4>{property.photos[currentPhotoIndex].name}</h4>
                    <p>{property.photos[currentPhotoIndex].description}</p>
                </div>
                <div className='m-3'>
                    {/* Navigation buttons */}
                    <button onClick={previousPhoto}>Previous</button>
                    <button onClick={nextPhoto}>Next</button>
                </div>
            </div>
        );
    };

    export default PropertyDetails;
