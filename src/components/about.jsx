import { Copy01Icon } from "hugeicons-react";

export default function About() {
  return (
    <div className="font-['iAWriterQuattroS-Regular','iA_Writer_Quattro_S',system-ui,sans-serif] flex overflow-clip flex-col items-start gap-0 w-full bg-[#141518] antialiased p-0">
      <div className="flex overflow-clip items-start self-stretch">
        <div className="overflow-clip w-0 md:w-13.75 self-stretch shrink-0 bg-[#121415] border-r border-r-dashed border-r-[#1C2129]" />
        <div className="overflow-clip w-4 md:w-27.5 self-stretch shrink-0 bg-[#141518] border-r border-r-solid border-r-[#1C2129]" />
        <div className="flex overflow-clip flex-col items-start flex-1 gap-1.25 justify-center border-r border-r-solid border-r-[#1C2129] p-4 md:p-6">
          <div className="w-fit font-['iAWriterQuattroS-Regular','iA_Writer_Quattro_S',system-ui,sans-serif] text-[#A2A5AD] text-xs/4.5">
            Part developer, part designer, part professional “just one more
            small tweak” person. Love doing competive programming.
          </div>
          <div className="w-fit font-['iAWriterQuattroS-Regular',system-ui,sans-serif] text-[#A2A5AD] text-xs/4.5">
            Available for freelance and internship roles. Feel free to connect
            through{" "}
            <span
              onClick={() => {
                window.open("https://github.com/vmridul", "_blank");
              }}
              className="bg-[#2A2D35] cursor-pointer px-1 rounded-sm inline-flex items-center align-middle gap-1"
            >
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/github.svg"
                alt="GitHub"
                className="w-4 h-4 invert text-xs opacity-50"
              />
              Github
            </span>{" "}
            <span
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/mridul-verma-a875aa256",
                  "_blank",
                );
              }}
              className="bg-[#2A2D35] cursor-pointer px-1 rounded-sm inline-flex items-center align-middle gap-1"
            >
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/linkedin.svg"
                alt="LinkedIn"
                className="w-4 h-4 invert text-xs opacity-50"
              />
              LinkedIn
            </span>{" "}
            or{" "}
            <span
              onClick={() => {
                window.location.href = "mailto:vermamridul1302@gmail.com";
              }}
              className="bg-[#2A2D35] cursor-pointer px-1 rounded-sm inline-flex items-center align-middle gap-1"
            >
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/gmail.svg"
                alt="Email"
                className="w-4 h-4 invert text-xs opacity-50"
              />
              vermamridul1302@gmail.com
            </span>
            <Copy01Icon
              onClick={() => {
                navigator.clipboard.writeText("vermamridul1302@gmail.com");
              }}
              className="cursor-pointer inline-flex ml-2 w-3 h-3"
            />
          </div>
        </div>
        <div className="overflow-clip w-4 md:w-27.5 self-stretch shrink-0 h-0 bg-[#141518] border-r border-r-dashed border-r-[#1C2129]" />
        <div className="overflow-clip w-0 md:w-13.75 self-stretch shrink-0 bg-[#121415]" />
      </div>
    </div>
  );
}
