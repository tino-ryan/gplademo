import React, { useState } from 'react';
import { Target, Heart, Users, Award, ChevronRight } from 'lucide-react';

const About = () => {
    const [activeTab, setActiveTab] = useState('history');

    const tabs = [
        { id: 'history', label: 'Our History', icon: Award },
        { id: 'vision', label: 'Vision & Mission', icon: Target },
        { id: 'staff', label: 'Our Team', icon: Users },
    ];

    const leadership = [
        { name: "Mr. V. Pillay", role: "Principal", initial: "VP" },
        { name: "Mrs. S. Naidoo", role: "Deputy Principal", initial: "SN" }
    ];

    const hods = [
        { name: "Mr. K. Govender", role: "Sciences", initial: "KG" },
        { name: "Mrs. R. Chetty", role: "Languages", initial: "RC" },
        { name: "Mr. D. Moodley", role: "Commerce", initial: "DM" },
        { name: "Mrs. A. Singh", role: "Humanities", initial: "AS" }
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="relative bg-blue-900 text-white py-16 sm:py-24 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img 
                        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
                        alt="Campus"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl mb-4">About Us</h1>
                    <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto">
                        Discover the rich heritage and dedicated team behind Gibson Pillay Learning Academy.
                    </p>
                </div>
            </div>

            {/* Tabs */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white rounded-xl shadow-lg p-2 flex flex-wrap justify-center gap-2">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center px-4 sm:px-6 py-3 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base ${
                                    activeTab === tab.id
                                        ? 'bg-blue-900 text-white shadow-md'
                                        : 'text-gray-600 hover:bg-gray-100'
                                }`}
                            >
                                <Icon size={18} className="mr-2" />
                                {tab.label}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
                <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 lg:p-12">
                    {activeTab === 'history' && (
                        <div className="max-w-4xl">
                            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6 sm:mb-8">Our History</h2>
                            
                            <div className="space-y-6 text-gray-700 leading-relaxed">
                                <p className="text-base sm:text-lg">
                                    Gibson Pillay Learning Academy has a proud history of serving the community of Lenasia South and surrounding areas.
                                    Established with a vision to provide quality education, the school has grown from humble beginnings to become a
                                    beacon of academic excellence.
                                </p>
                                
                                <div className="grid sm:grid-cols-2 gap-6 my-8">
                                    <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
                                        <div className="text-3xl sm:text-4xl font-bold text-blue-900 mb-2">1999</div>
                                        <p className="text-sm sm:text-base text-gray-600">Year Established</p>
                                    </div>
                                    <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-600">
                                        <div className="text-3xl sm:text-4xl font-bold text-red-600 mb-2">25+</div>
                                        <p className="text-sm sm:text-base text-gray-600">Years of Excellence</p>
                                    </div>
                                </div>

                                <p className="text-base sm:text-lg">
                                    Over the years, we have produced numerous successful alumni who have gone on to excel in various fields.
                                    Our commitment to holistic development ensures that our learners are well-prepared for the challenges of the future.
                                </p>

                                <div className="bg-gray-50 p-6 sm:p-8 rounded-xl border-l-4 border-red-600 my-8">
                                    <Heart className="text-red-600 mb-4" size={32} />
                                    <p className="italic text-gray-700 text-base sm:text-lg">
                                        "Education is the most powerful weapon which you can use to change the world."
                                    </p>
                                    <p className="text-sm text-gray-500 mt-2">- Nelson Mandela</p>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                                    <img 
                                        src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                                        alt="Students learning"
                                        className="rounded-xl shadow-lg w-full h-48 sm:h-64 object-cover"
                                    />
                                    <img 
                                        src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                                        alt="School activities"
                                        className="rounded-xl shadow-lg w-full h-48 sm:h-64 object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'vision' && (
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-8 sm:mb-12 text-center">Our Vision & Mission</h2>
                            
                            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-12">
                                <div className="bg-blue-50 p-6 sm:p-8 rounded-2xl border-t-4 border-blue-600">
                                    <Target className="text-blue-600 mb-4" size={40} />
                                    <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4">Our Vision</h3>
                                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                                        To be a leading educational institution that nurtures holistic excellence,
                                        empowering learners to become responsible global citizens who contribute positively to society.
                                    </p>
                                </div>
                                
                                <div className="bg-red-50 p-6 sm:p-8 rounded-2xl border-t-4 border-red-600">
                                    <Heart className="text-red-600 mb-4" size={40} />
                                    <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4">Our Mission</h3>
                                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                                        To provide quality education that develops academic excellence, critical thinking, and strong moral values in a supportive learning environment.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8">
                                <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-6">Our Core Values</h3>
                                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                                    {[
                                        "Provide a conducive learning environment that fosters academic success",
                                        "Promote critical thinking, creativity, and innovation",
                                        "Instill values of integrity, respect, and discipline",
                                        "Encourage participation in sports, arts, and cultural activities",
                                        "Build strong partnerships with parents and the community",
                                        "Embrace diversity and promote inclusivity"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start group">
                                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-100 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 group-hover:bg-red-600 transition-colors">
                                                <ChevronRight className="text-red-600 group-hover:text-white" size={20} />
                                            </div>
                                            <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'staff' && (
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-8 sm:mb-12 text-center">Our Leadership Team</h2>

                            {/* Principal & Deputy */}
                            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 max-w-4xl mx-auto">
                                {leadership.map((staff, index) => (
                                    <div key={index} className="bg-white border-2 border-blue-600 rounded-2xl p-6 sm:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                        <div className="w-24 h-24 sm:w-32 sm:h-32 bg-blue-900 text-white rounded-full mx-auto mb-4 flex items-center justify-center text-3xl sm:text-4xl font-bold shadow-lg">
                                            {staff.initial}
                                        </div>
                                        <h3 className="font-bold text-xl sm:text-2xl text-blue-900 mb-1">{staff.name}</h3>
                                        <p className="text-red-600 font-bold uppercase tracking-wider text-xs sm:text-sm">{staff.role}</p>
                                    </div>
                                ))}
                            </div>

                            {/* HODs */}
                            <div className="mt-12 sm:mt-16">
                                <h3 className="text-center text-xl sm:text-2xl font-bold text-gray-600 mb-8">Heads of Department</h3>
                                
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                                    {hods.map((staff, index) => (
                                        <div key={index} className="bg-gray-50 p-4 sm:p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-600 group">
                                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white border-2 border-blue-600 rounded-full mx-auto mb-3 flex items-center justify-center text-xl sm:text-2xl font-bold text-blue-900 shadow-sm group-hover:bg-blue-900 group-hover:text-white transition-colors">
                                                {staff.initial}
                                            </div>
                                            <h3 className="font-bold text-sm sm:text-base text-blue-900 mb-1">{staff.name}</h3>
                                            <p className="text-xs sm:text-sm text-gray-600 font-medium">{staff.role}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-12 sm:mt-16 text-center bg-blue-50 p-6 sm:p-8 rounded-2xl">
                                <Users className="text-blue-600 mx-auto mb-4" size={40} />
                                <p className="text-sm sm:text-base text-gray-700 max-w-2xl mx-auto leading-relaxed">
                                    Our management team is supported by a dedicated group of 45+ educators and administrative staff who work tirelessly to ensure the smooth running of the academy and the success of every learner.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default About;