export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="bg-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to My App</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            A modern Next.js application with Tailwind CSS styling
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="/web" 
              className="bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
            >
              Go to Web Section
            </a>
            <a 
              href="#features" 
              className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-700 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Fast Performance", desc: "Built with Next.js for optimal speed" },
            { title: "Responsive Design", desc: "Works on all devices with Tailwind" },
            { title: "Easy Navigation", desc: "Clear structure with header/footer" }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}