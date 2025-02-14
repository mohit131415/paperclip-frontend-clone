export default function CollaborationsPage() {
  const collaborations = [
    {
      id: "shivan-narresh",
      title: "myPAPERCLIP X Shivan & Narresh",
      description: `myPAPERCLIP and Shivan & Narresh have come together to create exclusive collaborative products range of Laptop Sleeve, Card Holder Wallet & Notebook. The collection has been handcrafted by myPAPERCLIP using illustrations titled "Iconomash", "Izu Juno" and "Palmera".`,
      image: "https://www.paperclipstore.in/cdn/shop/files/MPC235970_d5005641-3c64-47c1-b5da-c2e67b844e53.jpg?v=1688294433&width=535",
      link: "/shop",
      buttonText: "SHOP NOW",
      imageFirst: true
    },
    {
      id: "platinum-japan",
      title: "myPAPERCLIP x PLATINUM Japan",
      description: "This exclusive combo set from myPAPERCLIP & PLATINUM Japan includes limited edition notebook, PLAISIR Fountain Pen, & Card Holder Wallet.",
      image: "https://www.paperclipstore.in/cdn/shop/files/Combo_PlatinumxmyPAPERCLIPMastershot_c89cfc51-39ad-4678-a173-c16522a0369d.jpg?v=1719576641&width=535",
      link: "/shop",
      buttonText: "SHOP NOW",
      imageFirst: false
    },
    {
      id: "indus-people",
      title: "myPAPERCLIP X Indus People",
      description: "The 3rd version of yearly planner INDIA 365 TWENTY TWENTY FIVE is in development and scheduled for release by early August 2024. Stay tuned for details.",
      image: "https://www.paperclipstore.in/cdn/shop/files/IP_INDIA366_Coverscopy_1.jpg?v=1719470936&width=535",
      link: "/collaborations/indus-people",
      buttonText: "LEARN MORE",
      imageFirst: true
    },
    {
      id: "karl-joel-larsson",
      title: "myPAPERCLIP X Karl-Joel Larsson",
      description: "myPAPERCLIP and Karl-Joel Larsson have come together to create this exclusive notebook. This is a limited global release notebook and only 1,000 units of this notebook have been produced. Each notebook is numbered.",
      image: "https://www.paperclipstore.in/cdn/shop/files/myPC0976.jpg?v=1719649014&width=535",
      link: "/shop",
      buttonText: "SHOP NOW",
      imageFirst: false
    }
  ];

  return (
    <main className="py-6">
      <div className="container mx-auto px-60">
        {/* Header Section */}
        <section className="mb-16 text-center">
          <h1 className="text-2xl mb-6">COLLABORATIONS</h1>
          <p className="max-w-3xl mx-auto text-gray-600">
            myPAPERCLIP has forged several collaborations - INDIA365 yearly planner series with INDUS PEOPLE,
            collaborative gift set with LAMY, Germany and PLATINUM, Japan, Limited Global Release notebooks with
            Karl-Joel Larsson, Sweden and collaborative products range with Shivan & Narresh.
          </p>
        </section>

        {/* Grid of Collaborations */}
        <div className="mb-4">
          {collaborations.map((collab) => (
            <section key={collab.id} className="grid md:grid-cols-2 items-center h-[500px]! mb-2!">
              {/* Image Section */}
              <div className={`relative aspect-square ${!collab.imageFirst ? "order-1 md:order-2" : ""}`}>
                <img
                  src={collab.image || "/placeholder.svg"}
                  alt={`${collab.title} Collection`}
                  className="w-full h-[500px]! object-cover"
                />
              </div>

              {/* Content Section */}
              <div className={`flex flex-col justify-center ml-12 ${!collab.imageFirst ? "order-2 md:order-1" : ""}`}>
                <h2 className="text-2xl font-bold mb-4">{collab.title}</h2>
                <p className="text-gray-600 mb-8 text-sm">{collab.description}</p>
                <a
                  href={collab.link}
                  className="inline-block border border-black px-8 py-2 text-sm hover:bg-black hover:text-white transition-colors w-fit"
                >
                  {collab.buttonText}
                </a>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}

