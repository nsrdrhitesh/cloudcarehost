export default function CTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Join thousands of satisfied customers who trust Cloud Care Host for their hosting needs.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="/signup" 
            className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-bold text-lg transition shadow-lg hover:shadow-xl"
          >
            Sign Up Now
          </a>
          <a 
            href="/contact" 
            className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-bold text-lg transition"
          >
            Contact Sales
          </a>
        </div>
      </div>
    </section>
  )
}