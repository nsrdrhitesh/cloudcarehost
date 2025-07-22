"use client"

export default function OrderItem({
  title,
  value,
  price,
  originalPrice,
  currency,
  description
}) {
  return (
    <div>
      <h3 className="font-medium text-gray-800">{title}</h3>
      <div className="flex justify-between mt-1">
        <span className="text-gray-600">{value}</span>
        <span className="font-medium">
          {currency?.symbol || '$'}{price.toFixed(2)}
        </span>
      </div>
      <div className="text-sm text-gray-500 mt-1">
        {description}
        {originalPrice && originalPrice > price && (
          <span className="line-through ml-2">
            {currency?.symbol || '$'}{originalPrice.toFixed(2)}
          </span>
        )}
      </div>
    </div>
  )
}