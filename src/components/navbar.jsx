import { GithubIcon, GoogleDocIcon, Linkedin01Icon } from "hugeicons-react";
import Marker from "./marker";

export default function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-9999 flex items-start self-stretch bg-[#141518]">
        <div className="relative h-13.75 w-13.75 shrink-0 bg-[#121415] border-b border-b-solid border-b-[#1C2129] border-r border-r-solid border-r-[#1C2129]">
          <Marker className="-top-1 -left-1" />
          <Marker className="-top-1 -right-1" />
          <Marker className="-bottom-1 -left-1" />
          <Marker className="-bottom-1 -right-1" />
        </div>
        <div className="relative h-13.75 w-27.5 shrink-0 border-b border-b-solid border-b-[#1C2129] border-r border-r-solid border-r-[#1C2129]">
          <Marker className="-top-1 -left-1" />
          <Marker className="-top-1 -right-1" />
          <Marker className="-bottom-1 -left-1" />
          <Marker className="-bottom-1 -right-1" />
        </div>
        <div className="relative h-13.75 flex-1 flex items-center justify-between px-6 border-b border-b-solid border-b-[#1C2129] border-r border-r-solid border-r-[#1C2129]">
          <Marker className="-top-1 -left-1" />
          <Marker className="-top-1 -right-1" />
          <Marker className="-bottom-1 -left-1" />
          <Marker className="-bottom-1 -right-1" />
          <div className="flex items-center gap-12">
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-6 opacity-80 grayscale w-auto cursor-pointer"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              />
            </div>

            <div className="flex items-center gap-8">
              <div
                onClick={() => scrollToSection("skills")}
                className="cursor-pointer font-['iAWriterQuattroS-Regular','iA_Writer_Quattro_S',system-ui,sans-serif] text-[#A2A5AD] text-xs hover:text-white transition-colors"
              >
                Skills
              </div>
              <div
                onClick={() => scrollToSection("projects")}
                className="cursor-pointer font-['iAWriterQuattroS-Regular','iA_Writer_Quattro_S',system-ui,sans-serif] text-[#A2A5AD] text-xs hover:text-white transition-colors"
              >
                Projects
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/mridul-verma-a875aa256/",
                  "_blank",
                )
              }
              className="cursor-pointer flex overflow-clip flex-col items-center rounded-sm justify-center bg-[#1B1D23] hover:bg-[#2A2D33] transition-colors duration-200 border border-solid border-[#8C8C8C1A]"
            >
              <div className="flex overflow-clip flex-col items-center px-2.5 py-1.5 rounded-[3px] justify-center [box-shadow:#373A43CC_0px_-1px_0px_inset]">
                <div className="flex items-center gap-2">
                  <Linkedin01Icon size={14} color="white" />
                </div>
              </div>
            </div>
            <div
              onClick={() =>
                window.open("https://github.com/vmridul", "_blank")
              }
              className="cursor-pointer flex overflow-clip flex-col items-center rounded-sm justify-center bg-[#1B1D23] hover:bg-[#2A2D33] transition-colors duration-200 border border-solid border-[#8C8C8C1A]"
            >
              <div className="flex overflow-clip flex-col items-center px-2.5 py-1.5 rounded-[3px] justify-center [box-shadow:#373A43CC_0px_-1px_0px_inset]">
                <div className="flex items-center gap-2">
                  <GithubIcon size={14} color="white" />
                </div>
              </div>
            </div>

            <div
              onClick={() => window.open("/resume.pdf", "_blank")}
              className="cursor-pointer flex overflow-clip flex-col items-center rounded-sm justify-center bg-[#1448DC] hover:bg-[#0640AC] transition-colors duration-200 hover:border-[#0640AC] border border-solid border-[#1448DC]"
            >
              <div className="flex overflow-clip flex-col items-center px-2.5 py-1.5 rounded-[3px] justify-center [box-shadow:#171A2166_0px_-1px_0px_inset]">
                <div className="flex items-center gap-2">
                  <GoogleDocIcon size={14} color="white" />
                  <div className="w-fit font-['iAWriterQuattroS-Regular','iA_Writer_Quattro_S',system-ui,sans-serif] text-white text-[11px]">
                    Resume
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-13.75 w-27.5 shrink-0 border-b border-b-solid border-b-[#1C2129] border-r border-r-solid border-r-[#1C2129]">
          <Marker className="-top-1 -left-1" />
          <Marker className="-top-1 -right-1" />
          <Marker className="-bottom-1 -left-1" />
          <Marker className="-bottom-1 -right-1" />
        </div>
        <div className="relative h-13.75 w-13.75 shrink-0 bg-[#121415] border-b border-b-solid border-b-[#1C2129]">
          <Marker className="-top-1 -left-1" />
          <Marker className="-top-1 -right-1" />
          <Marker className="-bottom-1 -left-1" />
          <Marker className="-bottom-1 -right-1" />
        </div>
      </div>
    </>
  );
}
