import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const contactInfo = [
        {
            icon: MapPin,
            title: "Visit Us",
            details: ["1144 Lancaster Street", "Extension One, Lenasia South", "1829"],
            color: "blue"
        },
        {
            icon: Phone,
            title: "Call Us",
            details: ["+27 011 855 0672", "Fax: +27 011 211 3304"],
            color: "red"
        },
        {
            icon: Mail,
            title: "Email Us",
            details: ["gpla05@telkomsa.net", "gplaqueries@gmail.com"],
            color: "green"
        },
        {
            icon: Clock,
            title: "Office Hours",
            details: ["Mon - Fri: 7:30 AM - 3:30 PM", "Closed on weekends"],
            color: "yellow"
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="relative bg-blue-900 text-white py-16 sm:py-20 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img 
                        src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
                        alt="Contact"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Mail className="text-red-500 mx-auto mb-4" size={48} />
                    <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl mb-4">Get in Touch</h1>
                    <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto">
                        We'd love to hear from you. Reach out for inquiries, visits, or admissions.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                {/* Contact Info Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
                    {contactInfo.map((info, index) => {
                        const Icon = info.icon;
                        return (
                            <div 
                                key={index}
                                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-blue-600"
                            >
                                <div className="bg-blue-50 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                                    <Icon className="text-blue-600" size={28} />
                                </div>
                                <h3 className="font-bold text-lg text-blue-900 mb-3">{info.title}</h3>
                                {info.details.map((detail, idx) => (
                                    <p key={idx} className="text-sm text-gray-600 mb-1">{detail}</p>
                                ))}
                            </div>
                        );
                    })}
                </div>

                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
                    {/* Contact Form */}
                    <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-lg">
                        <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-2">Send a Message</h2>
                        <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">Fill out the form below and we'll get back to you soon.</p>
                        
                        <div className="space-y-5 sm:space-y-6">
                            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                                    <input 
                                        type="text" 
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all text-sm sm:text-base" 
                                        placeholder="John" 
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                                    <input 
                                        type="text" 
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all text-sm sm:text-base" 
                                        placeholder="Doe" 
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                                <input 
                                    type="email" 
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all text-sm sm:text-base" 
                                    placeholder="john@example.com" 
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
                                <select 
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all text-sm sm:text-base"
                                >
                                    <option value="">Select a subject</option>
                                    <option value="admissions">Admissions Enquiry</option>
                                    <option value="general">General Enquiry</option>
                                    <option value="finance">Finance/Accounts</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                                <textarea 
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5" 
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all resize-none text-sm sm:text-base" 
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <button 
                                onClick={handleSubmit}
                                className="w-full bg-blue-900 text-white px-8 py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center"
                            >
                                {submitted ? (
                                    <>
                                        <CheckCircle className="mr-2" size={20} />
                                        Message Sent!
                                    </>
                                ) : (
                                    <>
                                        <Send className="mr-2" size={20} />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Map & Additional Info */}
                    <div className="space-y-6 sm:space-y-8">
                        {/* Map */}
                        <div className="bg-white p-4 rounded-2xl shadow-lg overflow-hidden">
                            <h3 className="text-xl font-bold text-blue-900 mb-4">Find Us</h3>
                            <div className="h-64 sm:h-80 rounded-xl overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.666378567897!2d27.8488!3d-26.3375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDIwJzE1LjAiUyAyN8KwNTAnNTUuNyJF!5e0!3m2!1sen!2sza!4v1635789000000!5m2!1sen!2sza"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    title="GPLA Location"
                                ></iframe>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
                            <h3 className="text-xl font-bold text-blue-900 mb-4">Quick Actions</h3>
                            <div className="space-y-3">
                                {[
                                    { label: "Download Application Form", color: "blue" },
                                    { label: "View Fee Structure", color: "red" },
                                    { label: "Schedule a Campus Tour", color: "green" }
                                ].map((action, index) => (
                                    <button 
                                        key={index}
                                        className="w-full bg-blue-50 text-blue-700 px-6 py-4 rounded-xl font-semibold hover:bg-blue-100 transition-all duration-300 border-2 border-blue-200 text-left flex items-center justify-between text-sm sm:text-base"
                                    >
                                        {action.label}
                                        <Send size={18} />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* FAQ Teaser */}
                        <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-6 sm:p-8 rounded-2xl shadow-lg text-white">
                            <h3 className="text-xl font-bold mb-3">Have Questions?</h3>
                            <p className="text-blue-100 mb-4 text-sm sm:text-base">
                                Check out our FAQ page or call us directly for immediate assistance.
                            </p>
                            <button className="bg-red-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-red-700 transition-all text-sm sm:text-base">
                                View FAQs
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;