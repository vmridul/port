import { GithubIcon, Link01Icon } from "hugeicons-react";

export default function Projects() {
  return (
    <div
      id="projects"
      className="[font-synthesis:none] flex overflow-clip flex-col items-start gap-0 w-full bg-[#141518] antialiased p-0"
    >
      <div className="flex overflow-clip items-start self-stretch">
        <div className="overflow-clip w-0 md:w-13.75 self-stretch shrink-0 bg-[#121415] border-b border-b-solid border-b-[#1C2129] border-r border-r-solid border-r-[#1C2129]" />
        <div className="overflow-clip w-4 md:w-27.5 self-stretch shrink-0 border-b border-b-solid border-b-[#1C2129] border-r border-r-solid border-r-[#1C2129]" />
        <div className="flex overflow-clip py-10 md:px-64.5 items-center flex-col h-10 justify-center flex-1 border-b border-b-solid border-b-[#1C2129] border-r border-r-solid border-r-[#1C2129]">
          <div className="w-fit font-['IBMPlexSerif-Regular','IBM_Plex_Serif',system-ui,sans-serif] text-[#8EC5FF] text-[26px]/8">
            Projects
          </div>
        </div>
        <div className="overflow-clip w-4 md:w-27.5 self-stretch shrink-0 border-b border-b-solid border-b-[#1C2129] border-r border-r-solid border-r-[#1C2129]" />
        <div className="overflow-clip w-0 md:w-13.75 self-stretch shrink-0 bg-[#121415] border-b border-b-solid border-b-[#1C2129]" />
      </div>
      <div className="flex overflow-clip items-start self-stretch">
        <div className="overflow-clip w-0 md:w-13.75 self-stretch shrink-0 bg-[#121415] border-b border-b-solid border-b-[#1C2129] border-r border-r-solid border-r-[#1C2129]" />
        <div className="overflow-clip w-4 md:w-27.5 self-stretch shrink-0 border-b border-b-solid border-b-[#1C2129] border-r border-r-solid border-r-[#1C2129]" />
        <div className="flex md:flex-row flex-col overflow-clip items-center justify-center flex-1 border-b border-b-solid border-b-[#1C2129] border-r border-r-solid border-r-[#1C2129]">
          <div className="flex overflow-clip flex-col items-start gap-5 px-4.5 py-4.5 self-stretch flex-1 border-r border-r-solid border-r-[#1D2129]">
            <div className="relative group overflow-clip h-62.5 self-stretch shrink-0 border border-dashed border-[#1C2129] hover:border-[#415b77]">
              <img
                src="/portal.png"
                alt="Portal"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-8 bg-[#090909]/90 border-t border-[#1C2129] md:translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center divide-x divide-[#1C2129]">
                <div
                  onClick={() =>
                    window.open("https://portalchat.vercel.app", "_blank")
                  }
                  className="flex-1 flex items-center justify-center gap-2 hover:bg-[#141518] cursor-pointer h-full transition-colors"
                >
                  <Link01Icon size={14} color="white" />
                  <span className="text-white text-xs font-['iAWriterQuattroS-Regular','iA_Writer_Quattro_S',system-ui,sans-serif]">
                    Live
                  </span>
                </div>
                <div
                  onClick={() =>
                    window.open("https://github.com/vmridul/portal", "_blank")
                  }
                  className="flex-1 flex items-center justify-center gap-2 hover:bg-[#141518] cursor-pointer h-full transition-colors"
                >
                  <GithubIcon size={14} color="white" />
                  <span className="text-white text-xs font-['iAWriterQuattroS-Regular','iA_Writer_Quattro_S',system-ui,sans-serif]">
                    Github
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-2.5 self-stretch">
              <div className="flex flex-col items-start">
                <div className="w-fit font-['IBMPlexSerif-Regular','IBM_Plex_Serif',system-ui,sans-serif] text-white text-sm/4.5">
                  Portal
                </div>
                <div className="w-full whitespace-normal font-['iAWriterQuattroS-Regular','iA_Writer_Quattro_S',system-ui,sans-serif] text-[#A2A5AD] text-sm/4.5">
                  Realtime Conversation Platform with group/personal
                  <br />
                  chats and voice/video calls with screen sharing.
                </div>
              </div>
              <div className="flex flex-wrap overflow-clip items-center gap-2.5">
                <div className="flex overflow-clip rounded-xs flex-col items-start px-2.25 py-1.25 bg-[#1D2129]">
                  <div className="w-fit font-['iAWriterQuattroS-Regular','iA_Writer_Quattro_S',system-ui,sans-serif] text-[#BCBCBC] text-xs/4">
                    Next.js
                  </div>
                </div>
                <div className="flex overflow-clip rounded-xs flex-col items-start px-2.25 py-1.25 bg-[#1D2129]">
                  <div className="w-fit font-['iAWriterQuattroS-Regular','iA_Writer_Quattro_S',system-ui,sans-serif] text-[#BCBCBC] text-xs/4">
                    Convex
                  </div>
                </div>
                <div className="flex overflow-clip rounded-xs flex-col items-start px-2.25 py-1.25 bg-[#1D2129]">
                  <div className="w-fit font-['iAWriterQuattroS-Regular','iA_Writer_Quattro_S',system-ui,sans-serif] text-[#BCBCBC] text-xs/4">
                    Clerk
                  </div>
                </div>
                <div className="flex overflow-clip rounded-xs flex-col items-start px-2.25 py-1.25 bg-[#1D2129]">
                  <div className="w-fit font-['iAWriterQuattroS-Regular','iA_Writer_Quattro_S',system-ui,sans-serif] text-[#BCBCBC] text-xs/4">
                    React
                  </div>
                </div>
                <div className="flex overflow-clip rounded-xs flex-col items-start px-2.25 py-1.25 bg-[#1D2129]">
                  <div className="w-fit font-['iAWriterQuattroS-Regular','iA_Writer_Quattro_S',system-ui,sans-serif] text-[#BCBCBC] text-xs/4">
                    Tailwind
                  </div>
                </div>
                <div className="flex overflow-clip rounded-xs flex-col items-start px-2.25 py-1.25 bg-[#1D2129]">
                  <div className="w-fit font-['iAWriterQuattroS-Regular','iA_Writer_Quattro_S',system-ui,sans-serif] text-[#BCBCBC] text-xs/4">
                    Typescript
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex overflow-clip flex-col items-start px-4.5 py-4.5 self-stretch flex-1 gap-5">
            <div className="relative group overflow-clip self-stretch h-62.5 shrink-0 border border-dashed border-[#1C2129] hover:border-[#415b77]">
              <img
                src="/wanderly.png"
                alt="Wanderly"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-8 bg-[#090909]/90 border-t border-[#1C2129] md:translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center divide-x divide-[#1C2129]">
                <div
                  onClick={() =>
                    window.open(
                      "https://wanderly-tripplanner.vercel.app/",
                      "_blank",
                    )
                  }
                  className="flex-1 flex items-center justify-center gap-2 hover:bg-[#141518] cursor-pointer h-full transition-colors"
                >
                  <Link01Icon size={14} color="white" />
                  <span className="text-white text-xs font-['iAWriterQuattroS-Regular','iA_Writer_Quattro_S',system-ui,sans-serif]">
                    Live
                  </span>
                </div>
                <div
                  onClick={() =>
                    window.open("https://github.com/vmridul/wanderly", "_blank")
                  }
                  className="flex-1 flex items-center justify-center gap-2 hover:bg-[#141518] cursor-pointer h-full transition-colors"
                >
                  <GithubIcon size={14} color="white" />
                  <span className="text-white text-xs font-['iAWriterQuattroS-Regular','iA_Writer_Quattro_S',system-ui,sans-serif]">
                    Github
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-2.5">
              <div className="flex flex-col items-start">
                <div className="w-fit font-['IBMPlexSerif-Regular','IBM_Plex_Serif',system-ui,sans-serif] text-white text-sm/4.5">
                  Wanderly
                </div>
                <div className="w-full whitespace-normal font-['iAWriterQuattroS-Regular','iA_Writer_Quattro_S',system-ui,sans-serif] text-[#A2A5AD] text-sm/4.5">
                  AI-Powered Trip Planning Platform with itinerary generator,
                  <br />
                  ticket prices, budget planner and interactive map.
                </div>
              </div>
              <div className="flex flex-wrap overflow-clip items-center gap-2.5">
                <div className="flex overflow-clip rounded-xs flex-col items-start px-2.25 py-1.25 bg-[#1D2129]">
                  <div className="w-fit font-['iAWriterQuattroS-Regular','iA_Writer_Quattro_S',system-ui,sans-serif] text-[#BCBCBC] text-xs/4">
                    Vite
                  </div>
                </div>
                <div className="flex overflow-clip rounded-xs flex-col items-start px-2.25 py-1.25 bg-[#1D2129]">
                  <div className="w-fit font-['iAWriterQuattroS-Regular','iA_Writer_Quattro_S',system-ui,sans-serif] text-[#BCBCBC] text-xs/4">
                    Express.js
                  </div>
                </div>
                <div className="flex overflow-clip rounded-xs flex-col items-start px-2.25 py-1.25 bg-[#1D2129]">
                  <div className="w-fit font-['iAWriterQuattroS-Regular','iA_Writer_Quattro_S',system-ui,sans-serif] text-[#BCBCBC] text-xs/4">
                    Gemini API
                  </div>
                </div>
                <div className="flex overflow-clip rounded-xs flex-col items-start px-2.25 py-1.25 bg-[#1D2129]">
                  <div className="w-fit font-['iAWriterQuattroS-Regular','iA_Writer_Quattro_S',system-ui,sans-serif] text-[#BCBCBC] text-xs/4">
                    Leaftlet.js
                  </div>
                </div>
                <div className="flex overflow-clip rounded-xs flex-col items-start px-2.25 py-1.25 bg-[#1D2129]">
                  <div className="w-fit font-['iAWriterQuattroS-Regular','iA_Writer_Quattro_S',system-ui,sans-serif] text-[#BCBCBC] text-xs/4">
                    Tailwind
                  </div>
                </div>
                <div className="flex overflow-clip rounded-xs flex-col items-start px-2.25 py-1.25 bg-[#1D2129]">
                  <div className="w-fit font-['iAWriterQuattroS-Regular','iA_Writer_Quattro_S',system-ui,sans-serif] text-[#BCBCBC] text-xs/4">
                    Firebase
                  </div>
                </div>
                <div className="flex overflow-clip rounded-xs flex-col items-start px-2.25 py-1.25 bg-[#1D2129]">
                  <div className="w-fit font-['iAWriterQuattroS-Regular','iA_Writer_Quattro_S',system-ui,sans-serif] text-[#BCBCBC] text-xs/4">
                    MongoDB
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-clip w-4 md:w-27.5 self-stretch shrink-0 border-b border-b-solid border-b-[#1C2129] border-r border-r-solid border-r-[#1C2129]" />
        <div className="overflow-clip w-0 md:w-13.75 self-stretch shrink-0 bg-[#121415] border-b border-b-solid border-b-[#1C2129]" />
      </div>
    </div>
  );
}
