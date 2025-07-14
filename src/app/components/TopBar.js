export default function TopBar() {
  const countries = [
    { code: 'US', name: 'United States', currency: 'USD' },
    { code: 'GB', name: 'United Kingdom', currency: 'GBP' },
    { code: 'EU', name: 'European Union', currency: 'EUR' },
    { code: 'IN', name: 'India', currency: 'INR' },
    { code: 'AU', name: 'Australia', currency: 'AUD' },
  ]

  const offers = [
    "Get 50% off on your first year of hosting!",
    "Free domain with annual plans",
    "24/7 Expert Support Available"
  ]

  return (
    <div className="bg-blue-900 text-white text-sm">
      <div className="container mx-auto px-4 py-2 flex flex-wrap justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <div className="relative group">
                <select className="bg-blue-800 text-white px-2 py-1 rounded text-xs appearance-none focus:outline-none">
                {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                    {country.currency} ({country.code})
                    </option>
                ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
          </div>
          <div className="flex items-center">
            <a href="/contact" className="hover:text-blue-200 transition">Contact Us</a>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* <div className="relative group">
            <select className="bg-blue-800 text-white px-2 py-1 rounded text-xs appearance-none focus:outline-none">
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.currency} ({country.code})
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div> */}
          
          {/* <a href="/contact" className="hover:text-blue-200 transition">Contact Us</a> */}
          
          <div className="hidden md:block">
            <div className="animate-marquee whitespace-nowrap">
              {offers.join(" • ")}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}