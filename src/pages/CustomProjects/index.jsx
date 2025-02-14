import { ProjectGallery } from "@/components/custom-projects/ProjectGallery"

export default function CustomProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <img
          src="https://www.paperclipstore.in/cdn/shop/files/Custom_Projects_Master06.jpg?v=1719082766&width=2400"
          alt="Custom Projects"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          
        </div>
      </section>

      {/* Possibilities Section */}
      <ProjectGallery />
    </div>
  )
}

