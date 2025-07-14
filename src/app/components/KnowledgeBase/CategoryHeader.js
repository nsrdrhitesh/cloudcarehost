export default function CategoryHeader({ title, description, icon }) {
  return (
    <section className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/assets/images/pattern.svg')] bg-repeat"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center">
          <div className="text-4xl mr-6 animate-bounce">{icon}</div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-fadeIn">{title}</h1>
            <p className="text-lg md:text-xl opacity-90 animate-fadeIn delay-100">{description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}