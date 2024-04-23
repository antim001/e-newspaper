import React, { useState } from 'react';
import Header from './../shared/Header/Header';
import Navbar from './../shared/Navbar/Navbar';

const Career = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        resume: '',
        position: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to server)
        console.log(formData);
        // Clear form fields
        setFormData({
            name: '',
            email: '',
            resume: '',
            position: ''
        });
    };

    return (
        <>
            <Header />
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-2xl font-semibold mb-6">Join Our Team</h2>

                {/* Job Openings Section */}
                <section className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Current Job Openings</h3>
                    <ul className="list-disc list-inside">
                        <li>Software Developer</li>
                        <li>UX/UI Designer</li>
                        <li>Marketing Specialist</li>
                        <li>Data Analyst</li>
                    </ul>
                </section>

                {/* Job Application Form */}
                <section>
                    <h3 className="text-xl font-semibold mb-4">Apply Now</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input 
                                type="text" 
                                name="name" 
                                value={formData.name} 
                                onChange={handleChange} 
                                placeholder="Full Name" 
                                className="w-full p-2 border rounded-md" 
                                required 
                            />
                            <input 
                                type="email" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                placeholder="Email Address" 
                                className="w-full p-2 border rounded-md" 
                                required 
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input 
                                type="file" 
                                name="resume" 
                                onChange={handleChange} 
                                className="w-full p-2 border rounded-md" 
                                required 
                            />
                            <select 
                                name="position" 
                                value={formData.position} 
                                onChange={handleChange} 
                                className="w-full p-2 border rounded-md" 
                                required
                            >
                                <option value="" disabled>Select Position</option>
                                <option value="Software Developer">Software Developer</option>
                                <option value="UX/UI Designer">UX/UI Designer</option>
                                <option value="Marketing Specialist">Marketing Specialist</option>
                                <option value="Data Analyst">Data Analyst</option>
                            </select>
                        </div>
                        <button 
                            type="submit" 
                            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                        >
                            Submit Application
                        </button>
                    </form>
                </section>
            </div>
        </>
    );
};

export default Career;
