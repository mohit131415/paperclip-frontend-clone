export function NotebookDetails() {
    const notebooks = [
      {
        image: "https://www.paperclipstore.in/cdn/shop/files/ESP240A5-Master_ab590a3b-c97b-4f31-b0d9-11f8e898aeb8.jpg?v=1719516623&width=500",
        code: "ESP240A5-R",
        name: "EXECUTIVE SERIES NOTEBOOK - A5",
        colors: "Black | Blue | Orange | Red | Yellow",
        pages: "240 Pages, Ruled",
        dimensions: "A5, 148 X 210 Mm (5.83 X 8.27 In.)",
        mrp: "INR 395",
        qty: "Qty: 4 x 5 Colours",
        totalValue: "Total MRP Value: INR 7,900",
      },
      {
        image: "https://www.paperclipstore.in/cdn/shop/files/ESP192M.jpg?v=1719517324&width=500",
        code: "ESP192M-R",
        name: "EXECUTIVE SERIES NOTEBOOK - M",
        colors: "Black | Blue | Orange | Red | Yellow",
        pages: "192 Pages, Ruled",
        dimensions: "Medium, 127 X 210 Mm (5 X 8.25 In.)",
        mrp: "INR 335",
        qty: "Qty: 4 x 5 Colours",
        totalValue: "Total MRP Value: INR 6,700",
      },
      {
        image: "https://www.paperclipstore.in/cdn/shop/files/ESX192S-Master.jpg?v=1614372555&width=500",
        code: "ESP192S-R",
        name: "EXECUTIVE SERIES NOTEBOOK - S",
        colors: "Black | Blue | Orange | Red | Yellow",
        pages: "192 Pages, Ruled",
        dimensions: "Small, 90 X 140 Mm (3.5 X 5.5 In.)",
        mrp: "INR 295",
        qty: "Qty: 4 x 5 Colours",
        totalValue: "Total MRP Value: INR 5,900",
      },
    ]
  
    return (
      <div className="space-y-12 px-[315px] mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {notebooks.map((notebook) => (
            <div key={notebook.code} className="bg-gray-100 p-6 space-y-4">
              <div className="aspect-[4/3] overflow-hidden mb-6">
                <img
                  src={notebook.image || "/placeholder.svg"}
                  alt={notebook.name}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">{notebook.code}</p>
                <p className="text-sm">{notebook.name}</p>
                <p className="text-sm text-gray-600">{notebook.colors}</p>
              </div>
              <div className="space-y-1 text-sm text-gray-600">
                <p>{notebook.pages}</p>
                <p>{notebook.dimensions}</p>
                <p>{notebook.mrp}</p>
                <p>{notebook.qty}</p>
                <p className="font-medium">{notebook.totalValue}</p>
              </div>
            </div>
          ))}
        </div>
  
        <div className="text-center">
          <p className="text-2xl">Total MRP Value: Rs. 20,500</p>
          <p className="text-sm text-gray-500">INCLUSIVE OF ALL TAXES</p>
          <p className="text-sm text-gray-500">
            RESELLER'S MARGIN WILL BE APPLIED ON TOTAL MRP AND COLLECT THE PAYMENT NET OF MARGIN
          </p>
        </div>
      </div>
    )
  }
  
  