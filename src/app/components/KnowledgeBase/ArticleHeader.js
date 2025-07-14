export default function ArticleHeader({ title, excerpt }) {
  return (
    <section className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/assets/images/pattern.svg')] bg-repeat"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-fadeIn">{title}</h1>
          <p className="text-xl opacity-90 animate-fadeIn delay-100">{excerpt}</p>
        </div>
      </div>
    </section>
  )
}