import React from 'react';
import { Globe } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-border-subtle text-[#4c4c4c]">
      <div className="container mx-auto px-4 xl:px-8 max-w-[1400px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-16">
          
          {/* Left Column: Logo & Social */}
          <div className="lg:w-[300px] flex-shrink-0">
            <a href="https://www.esri.com" target="_blank" rel="noopener noreferrer" className="border-4 border-[#4c4c4c] p-4 inline-block mb-6 hover:border-primary transition-colors block group">
              <h2 className="font-display font-black text-2xl uppercase leading-tight tracking-[-0.05em] text-[#4c4c4c] group-hover:text-primary transition-colors">
                The<br />Science<br />Of<br />Where<span className="text-sm align-top ml-1">™</span>
              </h2>
            </a>
            <div className="grid grid-cols-3 gap-2 w-fit">
              <a href="https://www.facebook.com/esri" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#4c4c4c] text-white flex items-center justify-center font-bold font-serif italic text-lg hover:bg-primary transition-colors">f</a>
              <a href="https://twitter.com/Esri" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#4c4c4c] text-white flex items-center justify-center font-bold text-lg hover:bg-primary transition-colors">X</a>
              <a href="https://www.linkedin.com/company/esri" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#4c4c4c] text-white flex items-center justify-center font-bold text-sm tracking-tighter hover:bg-primary transition-colors">in</a>
              <a href="https://www.youtube.com/user/esritv" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#4c4c4c] text-white flex items-center justify-center font-bold hover:bg-primary transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5z"/></svg>
              </a>
              <a href="https://www.instagram.com/esrigram/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#4c4c4c] text-white flex items-center justify-center font-bold hover:bg-primary transition-colors">
                <div className="w-5 h-5 border-2 border-white rounded-md flex items-center justify-center"><div className="w-1.5 h-1.5 bg-white rounded-full"></div></div>
              </a>
              <a href="https://www.esri.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#4c4c4c] text-white flex items-center justify-center font-bold hover:bg-primary transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"/></svg>
              </a>
            </div>
          </div>

          {/* Right Side: Links Grid */}
          <div className="flex-1 grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 text-[13px] leading-8 font-medium">
            <div>
              <h4 className="font-bold text-black uppercase tracking-wider mb-4 border-b border-border-subtle pb-2">ArcGIS</h4>
              <ul className="flex flex-col space-y-2">
                <li><a href="https://www.esri.com/en-us/arcgis/about-arcgis/overview" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">ArcGIS Overview</a></li>
                <li><a href="https://www.esri.com/en-us/arcgis/products/mapping" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Mapping</a></li>
                <li><a href="https://www.esri.com/en-us/arcgis/products/arcgis-pro/overview" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">ArcGIS Pro</a></li>
                <li><a href="https://www.esri.com/en-us/arcgis/products/arcgis-enterprise/overview" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">ArcGIS Enterprise</a></li>
                <li><a href="https://www.esri.com/en-us/arcgis/products/arcgis-online/overview" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">ArcGIS Online</a></li>
                <li><a href="https://developers.arcgis.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-[#a15a22]">Developer Technology</a></li>
                <li><a href="https://www.esri.com/en-us/arcgis/products/arcgis-platform/overview" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">ArcGIS Location Platform</a></li>
                <li><a href="https://www.esri.com/en-us/store/overview" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Esri Store</a></li>
                <li><a href="https://architecture.arcgis.com/en/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">ArcGIS Architecture Center</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-black uppercase tracking-wider mb-4 border-b border-border-subtle pb-2">Community</h4>
              <ul className="flex flex-col space-y-2">
                <li><a href="https://community.esri.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-[#a15a22]">Esri Community</a></li>
                <li><a href="https://www.esri.com/arcgis-blog/overview/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">ArcGIS Blog</a></li>
                <li><a href="https://www.esri.com/about/newsroom/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Industry Blog</a></li>
                <li><a href="https://www.esri.com/en-us/about/user-research-testing" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-[#a15a22]">User Research and Testing</a></li>
                <li><a href="https://www.esri.com/en-us/about/yPN/overview" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-[#a15a22]">Esri Young Professionals Network</a></li>
                <li><a href="https://www.esri.com/en-us/about/events/index" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Events</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-black uppercase tracking-wider mb-4 border-b border-border-subtle pb-2">Understanding GIS</h4>
              <ul className="flex flex-col space-y-2">
                <li><a href="https://www.esri.com/en-us/what-is-gis/overview" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">What is GIS?</a></li>
                <li><a href="https://www.esri.com/en-us/location-intelligence" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Location Intelligence</a></li>
                <li><a href="https://www.esri.com/training/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-[#a15a22]">Training</a></li>
                <li><a href="https://www.esri.com/about/newsroom/arcuser/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">ArcUser</a></li>
                <li><a href="https://www.esri.com/about/newsroom/arcnews/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">ArcNews</a></li>
                <li><a href="https://www.esri.com/about/newsroom/arcwatch/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">ArcWatch</a></li>
                <li><a href="https://esripress.esri.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Esri Press</a></li>
                <li><a href="https://mediaspace.esri.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Esri Videos</a></li>
                <li><a href="https://support.esri.com/en/other-resources/gis-dictionary" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GIS Dictionary</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-black uppercase tracking-wider mb-4 border-b border-border-subtle pb-2">Company</h4>
              <ul className="flex flex-col space-y-2">
                <li><a href="https://www.esri.com/en-us/about/about-esri/overview" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">About Esri</a></li>
                <li><a href="https://www.esri.com/en-us/contact" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Contact Us</a></li>
                <li><a href="https://www.esri.com/en-us/about/careers/job-search" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="https://www.esri.com/en-us/about/open-vision/overview" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Open Vision</a></li>
                <li><a href="https://www.esri.com/en-us/about/partners/overview" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-[#a15a22]">Partners</a></li>
                <li><a href="https://www.esri.com/en-us/about/code-of-business-conduct" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Code of Business Conduct</a></li>
                <li><a href="https://www.esri.com/en-us/about/sustainability/overview" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Environmental & Sustainability Statement</a></li>
                <li><a href="https://www.esri.com/en-us/sitemap" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Sitemap</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-black uppercase tracking-wider mb-4 border-b border-border-subtle pb-2">Special Programs</h4>
              <ul className="flex flex-col space-y-2">
                <li><a href="https://www.esri.com/en-us/arcgis/products/arcgis-for-personal-use/buy" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">ArcGIS for Personal Use</a></li>
                <li><a href="https://www.esri.com/en-us/arcgis/products/arcgis-for-student-use/buy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline transition-colors font-semibold">ArcGIS for Student Use</a></li>
                <li><a href="https://www.esri.com/en-us/industries/conservation/overview" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Conservation</a></li>
                <li><a href="https://www.esri.com/en-us/disaster-response/overview" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Disaster Response</a></li>
                <li><a href="https://www.esri.com/en-us/industries/education/overview" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Education</a></li>
                <li><a href="https://www.esri.com/en-us/industries/nonprofit/overview" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Nonprofit</a></li>
                <li><a href="https://www.esri.com/en-us/racial-equity/overview" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Racial Equity</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-border-subtle/50 pt-8 flex flex-col xl:flex-row justify-between items-center gap-6 text-[13px] font-medium">
          <div className="flex items-center gap-2 font-bold text-black cursor-pointer hover:text-primary transition-colors">
            <Globe className="w-5 h-5" />
            <span>English (Global)</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <a href="https://www.esri.com/en-us/privacy/overview" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Privacy</a>
            <a href="https://www.esri.com/en-us/accessibility" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Accessibility</a>
            <a href="https://www.esri.com/en-us/legal/overview" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Legal</a>
            <a href="https://www.esri.com/en-us/legal/terms/web-terms" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Web Terms of Use</a>
            <a href="https://trust.arcgis.com/en/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Trust Center</a>
            <a href="https://www.esri.com/en-us/privacy/manage-privacy" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Manage Cookies</a>
            <a href="https://www.esri.com/en-us/privacy/privacy-choices" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-[#a15a22]">Do Not Share My Personal Information</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
