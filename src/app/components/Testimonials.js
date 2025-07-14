import React from 'react';

export default function TestimonialsGrid() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      content: "Cloud Care Host has been an absolute game-changer for my online store.",
    //   avatar: "/assets/images/avatar1.jpg"
    },
    {
      name: "Michael Chen",
      role: "Lead Web Developer",
      content: "As a web developer, efficiency is key.",
      avatar: "/assets/images/avatar2.jpg"
    },
    {
      name: "Emily Rodriguez",
      role: "Professional Blogger",
      content: "After years of struggling with slow, unreliable hosting, I finally found a home with Cloud Care Host.",
      avatar: "/assets/images/avatar3.jpg"
    },
    {
      name: "David Lee",
      role: "E-commerce Specialist",
      content: "Migrating my e-commerce site to Cloud Care Host was the best decision. ",
      avatar: "/assets/images/avatar4.jpg"
    },
    {
      name: "Jessica White",
      role: "Digital Marketing Agency Owner",
      content: "We manage dozens of client websites, and Cloud Care Host provides the consistent performance and stellar support we need.",
      avatar: "/assets/images/avatar5.jpg"
    },
    {
      name: "Mark Thompson",
      role: "Startup Founder",
      content: "Cloud Care Host delivered on both fronts.",
      avatar: "/assets/images/avatar6.jpg"
    },
    {
      name: "Olivia Martinez",
      role: "Online Educator",
      content: "My online courses require a robust and reliable platform.",
      avatar: "/assets/images/avatar7.jpg"
    },
    {
      name: "Chris Evans",
      role: "Graphic Designer",
      content: "It needs to load quickly to showcase my work.",
      avatar: "/assets/images/avatar8.jpg"
    },
    // {
    //   name: "Sophia Miller",
    //   role: "Non-profit Organization Lead",
    //   content: "Managing a non-profit website means every dollar counts. Cloud Care Host offers incredible value for money without compromising on quality or support.",
    //   avatar: "/assets/images/avatar9.jpg"
    // },
    // {
    //   name: "Daniel Kim",
    //   role: "Freelance Consultant",
    //   content: "I recommend Cloud Care Host to all my clients. Their robust security, daily backups, and incredibly helpful support team mean I never have to worry about their online presence.",
    //   avatar: "/assets/images/avatar10.jpg"
    // },
    // {
    //   name: "Grace Taylor",
    //   role: "Travel Vlogger",
    //   content: "My travel blog relies heavily on high-resolution images and videos. Cloud Care Host handles the media load with ease, ensuring my global audience can always access my content quickly and clearly.",
    //   avatar: "/assets/images/avatar11.jpg"
    // },
    // {
    //   name: "Alex Ramirez",
    //   role: "SaaS Product Manager",
    //   content: "For our SaaS landing pages and marketing sites, we need absolute reliability.",
    //   avatar: "/assets/images/avatar12.jpg"
    // }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Abstract Background Patterns */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-48 h-48 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4 tracking-tight leading-tight">
            Trusted by Businesses and Creators Worldwide
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-light">
            Hear directly from our diverse community about how Cloud Care Host has powered their success and simplified their online journey.
          </p>
        </div>

        {/* Unique Design: Cascading Grid / Masonry-like Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6"> {/* Tailwind CSS Columns for masonry-like effect */}
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="break-inside-avoid mb-6" // Important for column layout to prevent breaking cards
            >
              <div
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border border-gray-200 flex flex-col"
                // Add data-aos attributes here if you integrate AOS library for scroll animations
                // data-aos="fade-up" data-aos-delay={index * 100}
              >
                <div className="flex items-center mb-6">
                  {/* <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-5 border-2 border-blue-400 shadow-md"
                  /> */}
                  <div>
                    <h4 className="font-bold text-xl text-blue-900">{testimonial.name}</h4>
                    <p className="text-md text-indigo-600 font-medium">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-800 italic text-lg mb-6 flex-grow">
                  <span className="text-blue-500 text-3xl mr-1 leading-none">"</span>{testimonial.content}<span className="text-blue-500 text-3xl ml-1 leading-none">"</span>
                </p>
                <div className="mt-auto flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-6">
            Ready to experience the Cloud Care Host difference yourself?
          </p>
          <a
            href="/signup"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
}