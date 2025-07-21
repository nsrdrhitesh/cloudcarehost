import Link from 'next/link';
import { FaPlay, FaSearch, FaFilter, FaYoutube } from 'react-icons/fa';

export default function TutorialsPage() {
  // Sample tutorial categories
  const categories = [
    { name: 'Getting Started', count: 12 },
    { name: 'WordPress', count: 8 },
    { name: 'cPanel', count: 15 },
    { name: 'Security', count: 7 },
    { name: 'Migration', count: 5 },
    { name: 'Performance', count: 9 },
  ];

  // Sample tutorial videos
  const tutorials = [
    {
      id: 1,
      title: 'How to Install WordPress in 5 Minutes',
      description: 'Step-by-step guide to installing WordPress on your hosting account with CloudCareHost.',
      category: 'WordPress',
      duration: '8:32',
      thumbnail: '/wordpress-install.jpg',
      youtubeId: 'dQw4w9WgXcQ'
    },
    {
      id: 2,
      title: 'cPanel Basics: Managing Your Hosting Account',
      description: 'Learn how to navigate cPanel and manage your hosting settings effectively.',
      category: 'cPanel',
      duration: '12:45',
      thumbnail: '/cpanel-basics.jpg',
      youtubeId: 'dQw4w9WgXcQ'
    },
    {
      id: 3,
      title: 'Securing Your Website with SSL',
      description: 'Complete guide to installing and configuring SSL certificates for your website.',
      category: 'Security',
      duration: '15:20',
      thumbnail: '/ssl-security.jpg',
      youtubeId: 'dQw4w9WgXcQ'
    },
    {
      id: 4,
      title: 'Website Migration Made Easy',
      description: 'Transfer your website to CloudCareHost without downtime or data loss.',
      category: 'Migration',
      duration: '18:10',
      thumbnail: '/website-migration.jpg',
      youtubeId: 'dQw4w9WgXcQ'
    },
    {
      id: 5,
      title: 'Optimizing Website Speed',
      description: 'Tips and tricks to make your website load faster and improve performance.',
      category: 'Performance',
      duration: '22:05',
      thumbnail: '/speed-optimization.jpg',
      youtubeId: 'dQw4w9WgXcQ'
    },
    {
      id: 6,
      title: 'Setting Up Email Accounts',
      description: 'How to create and manage professional email accounts with your domain.',
      category: 'Getting Started',
      duration: '10:15',
      thumbnail: '/email-setup.jpg',
      youtubeId: 'dQw4w9WgXcQ'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-950 to-blue-800 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 animate-fade-in">
            CloudCareHost <span className="text-blue-400">Tutorials</span>
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
            Learn how to get the most out of your hosting with our step-by-step video tutorials and guides.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="flex items-center bg-white rounded-lg overflow-hidden shadow-lg">
              <input
                type="text"
                placeholder="Search tutorials..."
                className="w-full py-4 px-6 text-gray-800 focus:outline-none"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 transition duration-300">
                <FaSearch className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Categories */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-xl font-bold text-blue-900 mb-6 flex items-center">
                <FaFilter className="mr-2 text-blue-600" />
                Categories
              </h2>
              <ul className="space-y-3">
                {categories.map((cat) => (
                  <li key={cat.name}>
                    <Link 
                      href="#" 
                      className="flex justify-between items-center py-2 px-3 rounded-lg hover:bg-blue-50 text-blue-800 hover:text-blue-600 transition duration-300"
                    >
                      <span>{cat.name}</span>
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">
                        {cat.count}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">Need More Help?</h3>
                <p className="text-gray-600 mb-4">
                  Can't find what you're looking for? Our support team is available 24/7.
                </p>
                <Link 
                  href="/contact" 
                  className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition duration-300"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>

          {/* Tutorial Videos Grid */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-blue-900">
                Featured Tutorials
              </h2>
              <div className="text-sm text-gray-600">
                Showing {tutorials.length} tutorials
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tutorials.map((tutorial) => (
                <div key={tutorial.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
                  {/* Video Thumbnail with Play Button */}
                  <div className="relative">
                    <div className="h-48 bg-gray-200 flex items-center justify-center">
                      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition duration-300">
                          <FaPlay className="text-white text-xl" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-3 right-3 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                      {tutorial.duration}
                    </div>
                  </div>
                  
                  {/* Video Details */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-blue-900 hover:text-blue-600 transition duration-300">
                        <Link href={`/tutorials/${tutorial.id}`}>
                          {tutorial.title}
                        </Link>
                      </h3>
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">
                        {tutorial.category}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{tutorial.description}</p>
                    
                    <div className="flex justify-between items-center">
                      <Link 
                        href={`https://www.youtube.com/watch?v=${tutorial.youtubeId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 flex items-center text-sm"
                      >
                        <FaYoutube className="mr-1 text-red-600" />
                        Watch on YouTube
                      </Link>
                      <Link 
                        href={`/tutorials/${tutorial.id}`}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        View Details →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="px-4 py-2 border rounded-lg text-blue-600 border-blue-300 hover:bg-blue-50 transition duration-300">
                  Previous
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                  1
                </button>
                <button className="px-4 py-2 border rounded-lg text-blue-600 border-blue-300 hover:bg-blue-50 transition duration-300">
                  2
                </button>
                <button className="px-4 py-2 border rounded-lg text-blue-600 border-blue-300 hover:bg-blue-50 transition duration-300">
                  3
                </button>
                <button className="px-4 py-2 border rounded-lg text-blue-600 border-blue-300 hover:bg-blue-50 transition duration-300">
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-950 to-blue-800 text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to take your website to the next level?</h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
            Our hosting solutions provide the perfect foundation for your online success.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/hosting" 
              className="bg-white text-blue-800 hover:bg-blue-100 px-8 py-3 rounded-full font-semibold shadow-lg transition duration-300"
            >
              Explore Hosting Plans
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 px-8 py-3 rounded-full font-semibold transition duration-300"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}