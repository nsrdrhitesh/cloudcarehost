import Link from 'next/link';
import { FaBriefcase, FaMapMarkerAlt, FaClock, FaDollarSign, FaUsers, FaChartLine, FaHandshake, FaLightbulb } from 'react-icons/fa';

export default function CareersPage() {
  // Demo job openings data
  const jobOpenings = [
    {
      id: 1,
      title: "Frontend Developer",
      type: "Full-time",
      location: "Remote",
      department: "Engineering",
      salary: "$70,000 - $90,000",
      description: "Develop responsive and interactive user interfaces for our hosting control panel and customer-facing applications.",
      posted: "2 days ago"
    },
    {
      id: 2,
      title: "Customer Support Specialist",
      type: "Full-time",
      location: "New York, NY",
      department: "Support",
      salary: "$45,000 - $55,000",
      description: "Provide exceptional technical support to our hosting customers via chat, email, and phone.",
      posted: "1 week ago"
    },
    {
      id: 3,
      title: "DevOps Engineer",
      type: "Full-time",
      location: "Remote",
      department: "Engineering",
      salary: "$90,000 - $120,000",
      description: "Design, implement and maintain our cloud infrastructure and deployment pipelines.",
      posted: "3 days ago"
    },
    {
      id: 4,
      title: "Marketing Manager",
      type: "Full-time",
      location: "San Francisco, CA",
      department: "Marketing",
      salary: "$65,000 - $85,000",
      description: "Develop and execute marketing strategies to promote our hosting services and increase brand awareness.",
      posted: "5 days ago"
    },
    {
      id: 5,
      title: "Sales Representative",
      type: "Part-time",
      location: "Remote",
      department: "Sales",
      salary: "$30/hr + commission",
      description: "Engage with potential customers, understand their needs, and recommend suitable hosting solutions.",
      posted: "1 day ago"
    },
    {
      id: 6,
      title: "System Administrator",
      type: "Full-time",
      location: "Chicago, IL",
      department: "Operations",
      salary: "$75,000 - $95,000",
      description: "Maintain and optimize our server infrastructure to ensure maximum uptime and performance.",
      posted: "2 weeks ago"
    }
  ];

  // Benefits data
  const benefits = [
    {
      icon: <FaDollarSign className="w-8 h-8 text-blue-600" />,
      title: "Competitive Salaries",
      description: "We offer industry-competitive compensation packages"
    },
    {
      icon: <FaClock className="w-8 h-8 text-blue-600" />,
      title: "Flexible Hours",
      description: "Work when you're most productive with our flexible scheduling"
    },
    {
      icon: <FaUsers className="w-8 h-8 text-blue-600" />,
      title: "Team Culture",
      description: "Collaborate with talented, passionate colleagues"
    },
    {
      icon: <FaChartLine className="w-8 h-8 text-blue-600" />,
      title: "Career Growth",
      description: "Opportunities for professional development and advancement"
    },
    {
      icon: <FaHandshake className="w-8 h-8 text-blue-600" />,
      title: "Health Benefits",
      description: "Comprehensive medical, dental, and vision coverage"
    },
    {
      icon: <FaLightbulb className="w-8 h-8 text-blue-600" />,
      title: "Innovation Time",
      description: "Dedicated time to work on creative projects and ideas"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-950 to-blue-800 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Join Our Team</h1>
          <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto mb-8">
            Help us build the future of web hosting while growing your career in a dynamic, supportive environment.
          </p>
          <Link 
            href="#openings" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:-translate-y-1"
          >
            View Open Positions
          </Link>
        </div>
      </div>

      {/* Why Join Us Section */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Why Work at CloudCareHost?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're more than just a hosting company - we're a team of innovators committed to making the web a better place.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100"
              >
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-center text-blue-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-center">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Job Openings Section */}
      <div id="openings" className="py-16 px-4 bg-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Current Openings</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Browse our available positions and find the perfect fit for your skills and aspirations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobOpenings.map((job) => (
              <div 
                key={job.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 border border-gray-100"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-blue-900">{job.title}</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                      {job.type}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center text-gray-600">
                      <FaMapMarkerAlt className="mr-2 text-blue-600" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaBriefcase className="mr-2 text-blue-600" />
                      <span>{job.department}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{job.description}</p>
                  
                  <div className="flex flex-wrap justify-between items-center mt-6">
                    <span className="text-blue-600 font-medium">{job.salary}</span>
                    <span className="text-sm text-gray-500">Posted {job.posted}</span>
                  </div>
                </div>
                
                <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
                  <Link 
                    href={`/careers/apply?id=${job.id}`}
                    className="inline-block w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded text-center transition duration-300"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Don't see a perfect match? We're always looking for talented individuals.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-8 rounded-full border border-blue-600 shadow-sm transition duration-300"
            >
              Contact Us About Future Opportunities
            </Link>
          </div>
        </div>
      </div>

      {/* Culture Section */}
      <div className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Culture</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe in fostering an environment where creativity, collaboration, and innovation thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Team working together" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full mr-4">
                    <FaUsers className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">Collaborative Environment</h3>
                    <p className="text-gray-600">
                      We work together across departments to solve problems and create the best solutions for our customers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full mr-4">
                    <FaLightbulb className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">Continuous Learning</h3>
                    <p className="text-gray-600">
                      We invest in our team's growth with training, conferences, and opportunities to work with new technologies.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full mr-4">
                    <FaHandshake className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">Work-Life Balance</h3>
                    <p className="text-gray-600">
                      We understand that our team members have lives outside work and support flexible schedules and remote work.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}