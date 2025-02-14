import { Hero } from "./Hero"
import { ViewPossibilities } from "./ViewPossibilities"
import { CustomizationOptions } from "./CustomizationOptions"
import { PastProjects } from "./PastProjects"
import { HowItWorks } from "./HowItWorks"

export function ProjectGallery() {
  return (
    <div>
      <Hero />
      <div className="container mx-auto px-62">
        <ViewPossibilities />
      </div>
        <CustomizationOptions />
      <div className="container mx-auto px-62">  
        <PastProjects />
        <HowItWorks />
      </div>
    </div>
  )
}

