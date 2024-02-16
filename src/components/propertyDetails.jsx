    import React, { useState } from 'react';
    import './propertyDetails.css';
    import { Link } from 'react-router-dom';


    const property = {
        name: 'Bubbas Place',
        description: 'Cute House With Everything You Need For The Whole Family',
        photos: [
            { filename: 'river.jpg', alt: 'River', name: 'Sandy Beach Along The Trinity River', description: 'Swim, float, raft, or sun in this nearly private river access point.' },
            { filename: 'pool.jpg', alt: 'Pool', name: 'Pool', description: 'Toys, Slide, Diving Board, Stairs Into Pool. Plus there is a BBQ, three tables, and many seats for hanging out but the pool.' },
            { filename: 'safety.jpg', alt: 'safety', name: 'Safety Signs', description: 'Pool Fully Fenced.' },
            { filename: 'rear.jpg', alt: 'Rear', name: 'Rear View Of House', description: 'Rear Of House with large wrap around deck with built in seats, hammock.' },
            { filename: 'front.jpg', alt: 'Front', name: 'Front View Of House', description: 'Front over house with two large driveways for parking.' },
            { filename: 'yard.jpg', alt: 'Yard', name: 'Yard', description: 'Huge area for with partial shade. For the kids there a mini roller coster, trampoline, and teeter totter.' },
            { filename: 'living.jpg', alt: 'Living', name: 'Living Room', description: 'Spacious living room, equipped with TV and wireless charging station for phones. The futon turns into a queen been eaisly with bedding found in the hallway bedroom' },
            { filename: 'kitchen.jpg', alt: 'Kitchen', name: 'Kitchen', description: 'New appliances this year. Has a range oven, fridge with ice maker, toaster oven, coffee pot, microwave, slasa maker, hand mixer, and more in cabinets' },
            { filename: 'dining.jpg', alt: 'Dining', name: 'Dining Room', description: 'Spacious dining area for family gatherings plus a bar stool area for overflow seating.' },
            { filename: 'bath.jpg', alt: 'Bath', name: 'Bathroom', description: 'Luxurious stone bathroom with modern amenities.' },
            { filename: 'bed.jpg', alt: 'Bed', name: 'Bedroom', description: 'Comfortable bedroom with cozy furnishings.' },
            { filename: 'bed2.jpg', alt: 'Bed2', name: 'Second Bedroom', description: 'Another bedroom with a full sized buttom bunk and twin upper bunk. Many toys and books can be found in this closet and there is some extra bedding' },
            { filename: 'laundry.jpg', alt: 'Laundry', name: 'Laundry Room', description: 'Small laundry area with washer and dryer.' },
            { filename: 'trail1.jpg', alt: 'River Trail', name: 'River Trail', description: 'Trail To River. Partly Paved.' },
            { filename: 'trail2.jpg', alt: 'River Trail', name: 'River Trail', description: 'Trail To River. Partly Paved' },
            { filename: 'trail3.jpg', alt: 'River Trail', name: 'River Trail', description: 'Follow This Trail Down To The Sandy Beach. See The River In The Background.' }
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
                <h1>Ready For Your Next Adventure? </h1>
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
                                style={{ width: '50%', height: '50%' }}
                            />
                        </div>
                        <div>
                            <h3>{property.photos[currentPhotoIndex].name}</h3>
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
