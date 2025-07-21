import Link from 'next/link';
import { FaUsers, FaChartLine, FaServer, FaGlobeAmericas, FaAward, FaHandshake } from 'react-icons/fa';

export default function AboutPage() {
  const stats = [
    { value: "10,000+", label: "Happy Customers", icon: <FaUsers className="text-3xl text-blue-400" /> },
    { value: "99.9%", label: "Uptime Guarantee", icon: <FaChartLine className="text-3xl text-blue-400" /> },
    { value: "50+", label: "Global Locations", icon: <FaGlobeAmericas className="text-3xl text-blue-400" /> },
    { value: "15+", label: "Years Experience", icon: <FaAward className="text-3xl text-blue-400" /> },
  ];

  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      image: "/team1.jpg",
      bio: "Visionary leader with 20+ years in web hosting industry."
    },
    {
      name: "Sarah Williams",
      role: "CTO",
      image: "/team2.jpg",
      bio: "Technology expert specializing in cloud infrastructure."
    },
    {
      name: "Michael Chen",
      role: "Support Director",
      image: "/team3.jpg",
      bio: "Ensures our customers receive world-class support."
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Head",
      image: "/team4.jpg",
      bio: "Brings our message to customers worldwide."
    }
  ];

  const values = [
    {
      title: "Reliability",
      description: "We guarantee 99.9% uptime for all our services.",
      icon: <FaServer className="text-blue-500 text-2xl" />
    },
    {
      title: "Innovation",
      description: "Constantly evolving to bring you cutting-edge solutions.",
      icon: <FaChartLine className="text-blue-500 text-2xl" />
    },
    {
      title: "Integrity",
      description: "Honest and transparent in all our dealings.",
      icon: <FaHandshake className="text-blue-500 text-2xl" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-950 to-blue-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-5" style={{ backgroundImage: 'linear-gradient(45deg, rgba(0,0,0,0.1) 25%, transparent 25%, transparent 50%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.1) 75%, transparent 75%, transparent)' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 animate-fade-in">
              About <span className="text-blue-400">CloudCareHost</span>
            </h1>
            <p className="text-xl text-blue-200 mb-8 leading-relaxed">
              Empowering businesses worldwide with reliable, high-performance hosting solutions since 2010.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="px-8 py-3 bg-blue-600 rounded-md font-semibold hover:bg-blue-700 transition duration-300 transform hover:scale-105 shadow-lg">
                Contact Us
              </Link>
              <Link href="/hosting" className="px-8 py-3 bg-transparent border-2 border-blue-400 rounded-md font-semibold hover:bg-blue-900 transition duration-300 transform hover:scale-105">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-blue-50 rounded-xl p-6 text-center hover:shadow-lg transition duration-300">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold text-blue-900 mb-2">{stat.value}</h3>
                <p className="text-blue-700 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src="/about-hero.jpg" 
                    alt="Our Data Center" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-50"></div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-extrabold text-blue-900 mb-6">
                Our <span className="text-blue-600">Journey</span>
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Founded in 2010, CloudCareHost began as a small team of hosting enthusiasts with a vision to make web hosting simple, reliable, and accessible for everyone. What started as a single server in a garage has grown into a global infrastructure serving thousands of customers worldwide.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Today, we operate state-of-the-art data centers across three continents, employing cutting-edge technology to deliver exceptional performance and reliability. Our commitment to customer satisfaction has earned us numerous industry awards and the trust of businesses ranging from startups to Fortune 500 companies.
              </p>
              <div className="bg-blue-100 border-l-4 border-blue-500 p-4 mb-6">
                <p className="text-blue-800 italic">
                  "Our mission is to empower businesses by providing hosting solutions that just work - so you can focus on what really matters: growing your business."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-4">
              Our <span className="text-blue-600">Core Values</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do at CloudCareHost and define who we are as a company.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-md transition duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-blue-900">{value.title}</h3>
                </div>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-4">
              Meet Our <span className="text-blue-600">Team</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The talented individuals behind CloudCareHost's success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                <div className="h-64 bg-blue-100 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-700 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-950 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-6">Ready to experience the CloudCareHost difference?</h2>
          <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us with their online presence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/hosting" className="px-8 py-3 bg-blue-600 rounded-md font-semibold hover:bg-blue-700 transition duration-300 transform hover:scale-105 shadow-lg">
              Explore Our Plans
            </Link>
            <Link href="/contact" className="px-8 py-3 bg-transparent border-2 border-blue-400 rounded-md font-semibold hover:bg-blue-900 transition duration-300 transform hover:scale-105">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}