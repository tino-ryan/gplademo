import React, { useState, useEffect } from 'react';
import { ChevronRight, Award, Users, BookOpen, Trophy, Calendar, ArrowRight } from 'lucide-react';

const Home = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setIsLoaded(true), 0);
        return () => clearTimeout(timeout);
    }, []);


    const stats = [
        { number: "98%", label: "Pass Rate 2024", icon: Award },
        { number: "850+", label: "Active Learners", icon: Users },
        { number: "45+", label: "Dedicated Staff", icon: BookOpen },
        { number: "25+", label: "Years Excellence", icon: Trophy }
    ];

    const upcomingEvents = [
        { date: "15 Jan", title: "Open Day 2026", type: "Admissions" },
        { date: "22 Jan", title: "Parent Information Evening", type: "Community" },
        { date: "05 Feb", title: "Sports Day", type: "Athletics" }
    ];

    return (
        <div className="flex flex-col bg-white">
            {/* Hero Section */}
            <section className="relative min-h-screen bg-white overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                    <img 
                        src="images/campus.png?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
                        alt="School Campus"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-blue-900/75"></div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 min-h-screen flex items-center py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Left Content */}
                            <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                                
                                <div className="inline-block mb-6">
                                    <span className="bg-red-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
                                        Admissions Open 2026
                                    </span>
                                </div>
                                
                                <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                                    Gibson Pillay<br />
                                    <span className="text-red-500">Learning Academy</span>
                                </h1>
                                
                                <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed max-w-xl">
                                    Where excellence meets opportunity. Empowering future leaders through quality education, innovation, and holistic development.
                                </p>
                                
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button className="group bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-xl flex items-center justify-center">
                                        Apply Now
                                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                                    </button>
                                    <button className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl">
                                        Virtual Tour
                                    </button>
                                </div>
                            </div>

                            {/* Right Content - Image Grid */}
                            <div className={`transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'} hidden lg:block`}>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-4">
                                        <div className="bg-white rounded-2xl p-2 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                                            <img 
                                                src="/images/images.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                                                alt="Students in classroom"
                                                className="w-full h-48 object-cover rounded-xl"
                                            />
                                        </div>
                                        <div className="bg-white rounded-2xl p-2 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                                            <img 
                                                src="/images/girls.png?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                                                alt="Sports activities"
                                                className="w-full h-64 object-cover rounded-xl"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-4 pt-8">
                                        <div className="bg-white rounded-2xl p-2 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                                            <img 
                                                src="images/heart.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                                                alt="Science lab"
                                                className="w-full h-64 object-cover rounded-xl"
                                            />
                                        </div>
                                        <div className="bg-white rounded-2xl p-2 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                                            <img 
                                                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                                                alt="Graduation ceremony"
                                                className="w-full h-48 object-cover rounded-xl"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
                        <div className="w-1 h-3 bg-white/50 rounded-full"></div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="relative -mt-16 sm:-mt-20 z-20 pb-12 sm:pb-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <div 
                                    key={index}
                                    className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-8 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 border-t-4 border-blue-600"
                                >
                                    <Icon className="w-8 h-8 sm:w-12 sm:h-12 text-red-600 mb-2 sm:mb-4" />
                                    <div className="text-2xl sm:text-4xl font-bold text-blue-900 mb-1 sm:mb-2">{stat.number}</div>
                                    <div className="text-xs sm:text-base text-gray-600 font-medium">{stat.label}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Welcome Section */}
            <section className="py-12 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                        <div>
                            <h2 className="text-sm font-bold text-red-600 uppercase tracking-wider mb-4">Welcome to GPLA</h2>
                            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-6 leading-tight">
                                Building Tomorrow's Leaders Today
                            </h3>
                            <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                                At Gibson Pillay Learning Academy, we don't just educate – we inspire, nurture, and empower. Our comprehensive approach combines academic excellence with character development, preparing learners for success in an ever-changing world.
                            </p>
                            <div className="space-y-4">
                                {['Academic Excellence', 'Character Development', 'Community Engagement'].map((item, i) => (
                                    <div key={i} className="flex items-center group">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-red-600 transition-colors">
                                            <ChevronRight className="text-red-600 group-hover:text-white" size={20} />
                                        </div>
                                        <span className="text-gray-800 font-medium text-base sm:text-lg">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative mt-8 lg:mt-0">
                            <div className="bg-white rounded-3xl p-4 shadow-xl">
                                <img 
                                    src="/images/springbok.png?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                    alt="GPLA Campus" 
                                    className="rounded-2xl shadow-lg w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-12 sm:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">Why Choose GPLA?</h2>
                        <div className="w-24 h-2 bg-red-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {[
                            {
                                title: "Academic Excellence",
                                description: "Our rigorous curriculum and expert educators ensure every learner reaches their full potential with personalized attention.",
                                icon: "📚"
                            },
                            {
                                title: "Holistic Development",
                                description: "Beyond academics, we nurture talents through sports, arts, and cultural activities for well-rounded growth.",
                                icon: "🎨"
                            },
                            {
                                title: "Modern Facilities",
                                description: "State-of-the-art classrooms, laboratories, and sports facilities create the perfect learning environment.",
                                icon: "🏫"
                            }
                        ].map((feature, index) => (
                            <div 
                                key={index}
                                className="group bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
                            >
                                <div className="text-5xl sm:text-6xl mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3 sm:mb-4">{feature.title}</h3>
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">{feature.description}</p>
                                <button className="text-red-600 font-bold flex items-center group-hover:text-red-700 text-sm sm:text-base">
                                    Learn More 
                                    <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" size={20} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Upcoming Events */}
            <section className="py-12 sm:py-20 bg-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold mb-2">Upcoming Events</h2>
                            <p className="text-blue-200">Stay connected with our community</p>
                        </div>
                        <button className="mt-4 sm:mt-0 bg-red-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-red-700 transition-colors flex items-center text-sm sm:text-base">
                            View Calendar
                            <Calendar className="ml-2" size={20} />
                        </button>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {upcomingEvents.map((event, index) => (
                            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="bg-red-600 px-4 py-2 rounded-lg">
                                        <div className="text-2xl font-bold">{event.date.split(' ')[0]}</div>
                                        <div className="text-sm">{event.date.split(' ')[1]}</div>
                                    </div>
                                    <span className="text-xs bg-white/20 px-3 py-1 rounded-full">{event.type}</span>
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold mb-2">{event.title}</h3>
                                <button className="text-red-300 font-medium flex items-center hover:text-white transition-colors text-sm sm:text-base">
                                    Details <ChevronRight className="ml-1" size={16} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 sm:py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-4 sm:mb-6">
                        Ready to Join the GPLA Family?
                    </h2>
                    <p className="text-base sm:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto">
                        Applications for 2026 are now open. Secure your child's future with quality education and endless opportunities.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-blue-600 text-white px-8 sm:px-10 py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-blue-700 hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                            Apply Now
                        </button>
                        <button className="border-2 border-blue-600 text-blue-600 px-8 sm:px-10 py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-blue-50 transition-all duration-300">
                            Schedule a Visit
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;