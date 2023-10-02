import React, { useState } from 'react';
import axios from 'axios';


const AddProperty = () => {
    const [property, setProperty] = useState({
        property_name: '',
        property_type: '',
        // ... you can add other property fields as per your requirements
    });
    const [images, setImages] = useState([]);
    const [errors, setErrors] = useState({});

    const handleInputChange = e => {
        setProperty({
            ...property,
            [e.target.name]: e.target.value
        });
    };

    const handleImageChange = e => {
        setImages([...images, ...e.target.files]);
    };

    const validate = () => {
        let newErrors = {};

        if (!property.property_name) newErrors.property_name = "Property name is required!";
        if (!property.property_type) newErrors.property_type = "Property type is required!";
        // ... you can add more validation checks as needed

        return newErrors;
    };

    const handleSubmit = async e => {
        e.preventDefault();

        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const formData = new FormData();
        Object.keys(property).forEach(key => {
            formData.append(key, property[key]);
        });
        images.forEach((image, index) => {
            formData.append(`images[${index}]`, image);
        });

        try {
            const response = await axios.post('/api/properties', formData);
            console.log('Added property:', response.data);
        } catch (error) {
            console.error('Error adding property:', error);
        }
    };

    return (
        <div className="container mt-5">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Property Name</label>
                    <input type="text" className="form-control" name="property_name" onChange={handleInputChange} />
                    {errors.property_name && <div className="text-danger">{errors.property_name}</div>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Property Type</label>
                    <input type="text" className="form-control" name="property_type" onChange={handleInputChange} />
                    {errors.property_type && <div className="text-danger">{errors.property_type}</div>}
                </div>
                {/* ... you can add other input fields similarly ... */}
                <div className="mb-3">
                    <label className="form-label">Upload Images</label>
                    <input type="file" className="form-control" multiple onChange={handleImageChange} />
                </div>
                <button type="submit" className="btn btn-primary">Add Property</button>
            </form>
        </div>
    );
};

export default AddProperty;
