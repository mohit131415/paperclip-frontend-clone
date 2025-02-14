const options = [
    {
      level: "LEVEL 1 - BASIC",
      description: "The process involves imprint directly on the surface of the pre-fabricated notebook or planner. Screen print, blind embossing or foil stamping individually or in combination can be opted. Minimum order quantity for this option of customisation is 100 units."
    },
    {
      level: "LEVEL 2 - ADVANCED",
      description: "Add custom printed pages as the title page or inserts to the basic level of customization. Minimum order quantity for this option with title page is 300 units wherein with inserts it is 500 units."
    },
    {
      level: "LEVEL 3 - CUSTOM PROJECT",
      description: "We will be happy to take up your custom project beyond Level 2. If you know exactly what you want, we can follow your instruction. We are happy to make suggestions if you need them."
    }
  ]
  
  export function CustomizationOptions() {
    return (
      <section className="bg-black text-white py-12">
        <div className="container mx-auto px-62">
          <h2 className="mb-12 text-2xl font-medium">Customisation Options</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {options.map((option) => (
              <div key={option.level} className="space-y-1">
                <h3 className="text-sm font-bold text-gray-500">{option.level}</h3>
                <p className="text-sm text-white">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  