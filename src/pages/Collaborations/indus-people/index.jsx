export default function IndusCollaboration() {
    return (
      <div className="flex flex-col">
        {/* Main Content */}
        <main className="flex-1 px-4 pt-8">
          <div className="container mx-auto max-w-6xl">
            <div className="grid gap-10 md:grid-cols-2">
              {/* Image Section */}
              <div className="relative aspect-square">
                <img
                  src="https://www.paperclipstore.in/cdn/shop/files/IP_INDIA366_Coverscopy_2.jpg?v=1719471157&width=642"
                  alt="myPAPERCLIP X Indus People Planners"
                  className="h-[450px]! w-full object-cover"
                />
              </div>
  
              {/* Content Section */}
              <div className="flex flex-col justify-center px-12">
                <h1 className="mb-6 text-2xl font-bold">myPAPERCLIP X Indus People</h1>
                <p className="text-gray-600 text-sm">
                  The 3rd version of yearly planner INDIA 365 TWENTY TWENTY FIVE is in development and scheduled for
                  release by early August 2024. Stay tuned for details.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
  