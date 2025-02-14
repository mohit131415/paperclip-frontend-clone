import { Hero } from "./Hero"
import { ViewPossibilities } from "./ViewPossibilities"
import { CustomizationOptions } from "./CustomizationOptions"
import { HowItWorks } from "./HowItWorks"

export function ProjectGallery() {
  return (
    <div>
      <Hero />
      <div className="container mx-auto px-62">
        <ViewPossibilities />
      </div>
        <CustomizationOptions />
      <div className="container mx-auto px-62 mt-9">  
        <HowItWorks />
      </div>
    </div>
  )
}

