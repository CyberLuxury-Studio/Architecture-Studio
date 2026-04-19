import os

page_path = "src/app/page.tsx"
with open(page_path, "r") as f:
    content = f.read()

import_stmt = 'import { PortfolioGallerySection } from "@/components/sections/PortfolioGallerySection";'
content = content.replace('import { CtaSection } from "@/components/sections/CtaSection";', 
                         import_stmt + '\nimport { CtaSection } from "@/components/sections/CtaSection";')

content = content.replace('<div id="features">\n        <FeaturesSection />\n      </div>',
                         '<div id="features">\n        <FeaturesSection />\n      </div>\n      <div id="portfolio">\n        <PortfolioGallerySection />\n      </div>')

with open(page_path, "w") as f:
    f.write(content)
