// components/DomainCard.jsx
export default function DomainCard({ 
  domain, 
  status, 
  price, 
  discountedPrice, 
  discountPercent,
  whois,
  delay = 0 
}) {
  const isAvailable = status === 'available';
  const [name, ext] = (domain && domain.includes('.')) 
    ? domain.split('.') 
    : [domain || '', 'com'];

  return (
    <div 
      className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border ${
        isAvailable ? 'border-green-100 hover:border-green-200' : 'border-red-100 hover:border-red-200'
      } cursor-pointer animate-fadeIn`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900">
            {name}<span className="text-blue-600">.{ext}</span>
          </h3>
          <span className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-semibold ${
            isAvailable ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {isAvailable ? 'Available' : 'Taken'}
          </span>
        </div>
        
        {isAvailable && (
          <div className="text-right">
            <span className="line-through text-gray-500 text-sm">{price}</span>
            <div className="text-2xl font-bold text-blue-600">{discountedPrice}</div>
            <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full text-xs font-semibold">
              Save {discountPercent}
            </span>
          </div>
        )}
      </div>

      {isAvailable ? (
        <>
          <div className="flex justify-between items-center mt-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition">
              Add to Cart
            </button>
            <span className="text-sm text-gray-500">1 year registration</span>
          </div>
          
          {whois && (
            <div className="mt-4 p-3 bg-blue-50 rounded-lg flex items-start">
              <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-blue-800 text-sm">{whois}</p>
            </div>
          )}
        </>
      ) : (
        <div className="mt-4">
          <p className="text-gray-600 text-sm">This domain is already registered. Try these alternatives:</p>
          {/* You could add alternative suggestions here */}
        </div>
      )}
    </div>
  );
}