import React, { useState } from 'react';
import { Trophy, Award, Medal, Star, Filter } from 'lucide-react';

const Achievements = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        { id: 'all', label: 'All', icon: Star },
        { id: 'academic', label: 'Academic', icon: Award },
        { id: 'sports', label: 'Sports', icon: Trophy },
        { id: 'cultural', label: 'Cultural', icon: Medal }
    ];

    const achievements = [
        {
            year: "2024",
            title: "Matric Results Excellence",
            category: "academic",
            description: "Our Class of 2024 achieved an outstanding 98% pass rate with 75% bachelor's pass rate. Top achievers obtained distinctions in Mathematics, Physical Sciences, and Accounting, with several learners achieving 7+ distinctions.",
            image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            highlights: ["98% Pass Rate", "75% Bachelor's Pass", "7+ Distinctions"]
        },
        {
            year: "2024",
            title: "National Moot Court Victory",
            category: "cultural",
            description: "Our Moot Court team represented the district at the National Schools Moot Court Competition and secured 2nd place, showcasing exceptional legal reasoning and public speaking skills.",
            image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            highlights: ["2nd Place National", "District Champions", "Best Speaker Award"]
        },
        {
            year: "2024",
            title: "Science Fair Gold Medals",
            category: "academic",
            description: "Three of our learners won gold medals at the Regional Science Fair for their innovative project on renewable energy, advancing to the national competition.",
            image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            highlights: ["3 Gold Medals", "Innovation Award", "National Qualification"]
        },
        {
            year: "2024",
            title: "District Athletics Champions",
            category: "sports",
            description: "Our athletics team dominated the District Athletics Championship, bringing home 15 medals including 6 golds across various track and field events.",
            image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            highlights: ["15 Total Medals", "6 Gold Medals", "Team Champions"]
        },
        {
            year: "2023",
            title: "Provincial Debate Champions",
            category: "cultural",
            description: "GPLA debate team claimed the provincial championship title, demonstrating excellence in critical thinking and persuasive communication.",
            image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            highlights: ["Provincial Champions", "Best Speaker", "Undefeated Season"]
        },
        {
            year: "2023",
            title: "Mathematics Olympiad Success",
            category: "academic",
            description: "Five learners qualified for the national Mathematics Olympiad, with two achieving top 50 rankings nationally.",
            image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            highlights: ["5 Qualifiers", "Top 50 National", "District Winners"]
        }
    ];

    const filteredAchievements = selectedCategory === 'all' 
        ? achievements 
        : achievements.filter(a => a.category === selectedCategory);

    const getCategoryColor = (category) => {
        switch(category) {
            case 'academic': return 'blue';
            case 'sports': return 'green';
            case 'cultural': return 'red';
            default: return 'gray';
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="relative bg-blue-900 text-white py-16 sm:py-20 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img 
                        src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
                        alt="Achievements"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Trophy className="text-yellow-400 mx-auto mb-4" size={48} />
                    <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl mb-4">Our Achievements</h1>
                    <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto">
                        Celebrating excellence, dedication, and the outstanding accomplishments of our learners.
                    </p>
                </div>
            </div>

            {/* Stats Bar */}
            <div className="bg-white border-b border-gray-200 py-6 sm:py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
                        {[
                            { number: "98%", label: "Matric Pass Rate 2024" },
                            { number: "50+", label: "Awards This Year" },
                            { number: "15", label: "National Competitions" },
                            { number: "100+", label: "Top Achievers" }
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl sm:text-4xl font-bold text-blue-900 mb-1">{stat.number}</div>
                                <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Category Filter */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8">
                    <div className="mb-4 sm:mb-0">
                        <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-2">Hall of Fame</h2>
                        <p className="text-sm sm:text-base text-gray-600">Filter by category to explore our achievements</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Filter className="text-gray-400" size={20} />
                        <span className="text-sm text-gray-600">Filter:</span>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-12">
                    {categories.map((cat) => {
                        const Icon = cat.icon;
                        return (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                className={`flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
                                    selectedCategory === cat.id
                                        ? 'bg-blue-900 text-white shadow-lg scale-105'
                                        : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                                }`}
                            >
                                <Icon size={18} className="mr-2" />
                                {cat.label}
                            </button>
                        );
                    })}
                </div>

                {/* Achievements Grid */}
                <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                    {filteredAchievements.map((item, index) => {
                        const color = getCategoryColor(item.category);
                        return (
                            <div 
                                key={index} 
                                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group transform hover:-translate-y-2"
                            >
                                <div className="relative h-48 sm:h-64 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute top-4 right-4">
                                        <span className={`bg-${color}-600 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wide shadow-lg`}>
                                            {item.category}
                                        </span>
                                    </div>
                                    <div className="absolute bottom-4 left-4">
                                        <span className="bg-white/90 backdrop-blur-sm text-blue-900 px-4 py-2 rounded-full text-sm font-bold">
                                            {item.year}
                                        </span>
                                    </div>
                                </div>
                                
                                <div className="p-6 sm:p-8">
                                    <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3 sm:mb-4 group-hover:text-red-600 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                                        {item.description}
                                    </p>
                                    
                                    <div className="flex flex-wrap gap-2">
                                        {item.highlights.map((highlight, hIdx) => (
                                            <span 
                                                key={hIdx} 
                                                className={`bg-${color}-50 text-${color}-700 px-3 py-1 rounded-full text-xs sm:text-sm font-medium border border-${color}-200`}
                                            >
                                                {highlight}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {filteredAchievements.length === 0 && (
                    <div className="text-center py-12 sm:py-16">
                        <Trophy className="text-gray-300 mx-auto mb-4" size={64} />
                        <p className="text-lg sm:text-xl text-gray-500">No achievements found in this category.</p>
                    </div>
                )}

                {/* CTA Section */}
                <div className="mt-16 sm:mt-20 bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500 rounded-full filter blur-3xl"></div>
                    </div>
                    <div className="relative z-10">
                        <Star className="text-yellow-400 mx-auto mb-4" size={48} />
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Be Part of Our Success Story</h2>
                        <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
                            Join GPLA and unlock your potential. Our next achievement could be yours!
                        </p>
                        <button className="bg-red-600 text-white px-8 sm:px-10 py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-xl">
                            Apply for 2026
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievements;