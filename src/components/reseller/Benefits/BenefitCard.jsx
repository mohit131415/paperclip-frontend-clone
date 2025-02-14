export function BenefitCard({ title, description, icon: Icon }) {
    return (
      <div className="p-6 border border-gray-200">
        <div className="mb-4">{Icon && <Icon className="w-6 h-6 text-gray-700" />}</div>
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    )
  }
  
  