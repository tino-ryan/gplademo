import React, { useState } from 'react';
import { BookOpen, Lightbulb, Trophy, Users, ChevronRight, Check } from 'lucide-react';

const Academics = () => {
    const [selectedStream, setSelectedStream] = useState(null);

    const getSubjects = [
        "English Home Language",
        "Afrikaans/IsiZulu First Additional Language",
        "Mathematics",
        "Natural Sciences",
        "Social Sciences",
        "Technology",
        "Economic Management Sciences",
        "Life Orientation",
        "Creative Arts"
    ];

    const fetStreams = [
        {
            name: "Science Stream",
            color: "blue",
            icon: "🔬",
            subjects: ["Physical Sciences", "Life Sciences", "Mathematics", "Geography/Accounting"],
            careers: ["Medicine", "Engineering", "Research", "Technology"]
        },
        {
            name: "Commerce Stream",
            color: "red",
            icon: "💼",
            subjects: ["Accounting", "Business Studies", "Economics", "Mathematics/Math Lit"],
            careers: ["Accounting", "Business", "Finance", "Entrepreneurship"]
        },
        {
            name: "Humanities Stream",
            color: "green",
            icon: "🌍",
            subjects: ["History", "Geography", "Tourism", "Consumer Studies"],
            careers: ["Law", "Social Work", "Teaching", "Tourism"]
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="relative bg-blue-900 text-white py-16 sm:py-20 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img 
                        src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
                        alt="Students studying"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-block mb-4">
                        <span className="bg-red-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
                            Academic Programs
                        </span>
                    </div>
                    <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl mb-4">Academics</h1>
                    <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto">
                        A comprehensive curriculum designed to challenge and inspire learners at every stage.
                    </p>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12 relative z-10 mb-12">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                    {[
                        { icon: BookOpen, label: "3 Learning Streams", color: "blue" },
                        { icon: Lightbulb, label: "20+ Subjects", color: "red" },
                        { icon: Trophy, label: "98% Pass Rate", color: "green" },
                        { icon: Users, label: "Expert Teachers", color: "yellow" }
                    ].map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div key={index} className="bg-white rounded-xl p-4 sm:p-6 shadow-lg text-center">
                                <Icon className={`text-${stat.color}-600 mx-auto mb-2`} size={28} />
                                <p className="text-xs sm:text-sm font-semibold text-gray-700">{stat.label}</p>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
                {/* GET Phase */}
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-8 sm:mb-12">
                    <div className="bg-blue-900 p-6 sm:p-8 lg:p-10">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                            <div>
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">GET Phase</h2>
                                <p className="text-blue-200 text-sm sm:text-base">Grade 8-9 • General Education and Training</p>
                            </div>
                            <div className="mt-4 sm:mt-0 bg-red-600 px-6 py-3 rounded-xl">
                                <div className="text-white font-bold text-lg">Foundation Years</div>
                            </div>
                        </div>
                        <p className="text-blue-100 mt-4 text-sm sm:text-base max-w-3xl">
                            Building a strong foundation in all key learning areas to prepare learners for specialized streams.
                        </p>
                    </div>
                    
                    <div className="p-6 sm:p-8 lg:p-10">
                        <h3 className="font-bold text-lg sm:text-xl text-gray-800 mb-6">Subjects Offered:</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                            {getSubjects.map((subject, idx) => (
                                <div key={idx} className="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-600 hover:shadow-md transition-all duration-300 group">
                                    <Check className="text-blue-600 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
                                    <span className="text-sm sm:text-base text-gray-700 font-medium">{subject}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* FET Phase Header */}
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">FET Phase - Grade 10-12</h2>
                    <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                        Choose your path to success. Our specialized streams prepare you for tertiary education and career opportunities.
                    </p>
                </div>

                {/* FET Streams */}
                <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
                    {fetStreams.map((stream, idx) => (
                        <div 
                            key={idx}
                            onClick={() => setSelectedStream(selectedStream === idx ? null : idx)}
                            className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 ${
                                selectedStream === idx ? 'ring-4 ring-blue-600' : ''
                            }`}
                        >
                            <div className={`bg-${stream.color}-600 p-6 sm:p-8 text-white`}>
                                <div className="text-5xl sm:text-6xl mb-4">{stream.icon}</div>
                                <h3 className="text-2xl sm:text-3xl font-bold mb-2">{stream.name}</h3>
                                <button className="text-white/90 text-sm font-medium flex items-center hover:text-white">
                                    View Details <ChevronRight className={`ml-1 transition-transform ${selectedStream === idx ? 'rotate-90' : ''}`} size={18} />
                                </button>
                            </div>
                            
                            <div className="p-6 sm:p-8">
                                <h4 className="font-bold text-gray-800 mb-4 text-sm sm:text-base">Core Subjects:</h4>
                                <ul className="space-y-3 mb-6">
                                    {stream.subjects.map((subject, sIdx) => (
                                        <li key={sIdx} className="flex items-start text-sm sm:text-base">
                                            <Check className="text-green-500 mr-2 flex-shrink-0 mt-1" size={18} />
                                            <span className="text-gray-700">{subject}</span>
                                        </li>
                                    ))}
                                </ul>

                                {selectedStream === idx && (
                                    <div className="mt-6 pt-6 border-t border-gray-200 animate-fade-in">
                                        <h4 className="font-bold text-gray-800 mb-3 text-sm sm:text-base">Career Opportunities:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {stream.careers.map((career, cIdx) => (
                                                <span key={cIdx} className={`bg-${stream.color}-50 text-${stream.color}-700 px-3 py-1 rounded-full text-xs sm:text-sm font-medium`}>
                                                    {career}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Programs */}
                <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mb-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6 sm:mb-8">Beyond the Classroom</h2>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {[
                            { title: "Extra Classes", desc: "After-school support for all grades", icon: "📖" },
                            { title: "Study Groups", desc: "Peer learning and collaboration", icon: "👥" },
                            { title: "Career Guidance", desc: "Planning your future path", icon: "🎯" },
                            { title: "Digital Learning", desc: "Modern technology integration", icon: "💻" },
                            { title: "Library Resources", desc: "Extensive learning materials", icon: "📚" },
                            { title: "Science Labs", desc: "Hands-on practical learning", icon: "🔬" }
                        ].map((program, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-600">
                                <div className="text-4xl mb-3">{program.icon}</div>
                                <h3 className="font-bold text-blue-900 mb-2 text-base sm:text-lg">{program.title}</h3>
                                <p className="text-sm sm:text-base text-gray-600">{program.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-red-500 rounded-full filter blur-3xl"></div>
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
                    </div>
                    <div className="relative z-10">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Ready to Excel?</h2>
                        <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
                            Applications for 2026 are open. Join us and unlock your potential.
                        </p>
                        <button className="bg-red-600 text-white px-8 sm:px-10 py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-xl">
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Academics;