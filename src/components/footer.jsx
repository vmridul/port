import Marker from "./marker";
export default function Footer() {
  return (
    <div className="flex overflow-clip flex-col items-start gap-0 w-full bg-[#184ADC] p-0">
      <div className="flex overflow-clip items-start self-stretch h-82.5 shrink-0">
        <div className="relative w-13.75 self-stretch shrink-0 bg-[#184ADC] border-r border-r-dashed z-9999 border-r-[#4165E1]">
          <Marker className={"-top-1 -left-1"} />
          <Marker className={"-top-1 -right-1"} />
        </div>
        <div className="relative z-9999 w-27.5 self-stretch shrink-0 bg-[#184ADC] border-r border-r-solid border-r-[#4165E1]">
          <Marker className={"-top-1 -left-1"} />
          <Marker className={"-top-1 -right-1"} />
        </div>
        <div className="relative flex z-9999 flex-col items-center justify-center flex-1 h-full border-r border-r-solid border-r-[#4165E1]">
          <Marker className={"-top-1 -left-1"} />
          <Marker className={"-top-1 -right-1"} />

          <div
            className="
      absolute inset-0
      opacity-10
      bg-[repeating-linear-gradient(-60deg,transparent_0px,transparent_8px,#ffffff_8px,#1C2129_9px)]
    "
          />
          <div
            className="
      absolute inset-0
      opacity-10
      bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_8px,#ffffff_8px,#1C2129_9px)]
    "
          />
          <div className="absolute top-20 w-full flex flex-col">
            <div className="h-1 w-full border-t border-t-[#ffffff] opacity-10"></div>
            <div className="opacity-10 [font-synthesis:none] flex overflow-clip flex-col items-center justify-end flex-1 border-r border-r-solid border-r-[#4165E1] antialiased">
              <div className="w-fit font-['IBMPlexSerif-Regular','IBM_Plex_Serif',system-ui,sans-serif] [-webkit-text-stroke:1px_#FFFFFF] [paint-order:stroke] text-transparent text-[280px]/66">
                MRIDUL
              </div>
            </div>
            <div className="h-1 w-full border-t border-t-[#ffffff] opacity-10"></div>
          </div>
        </div>
        <div className="relative z-9999 w-27.5 self-stretch shrink-0 bg-[#184ADC] border-r border-r-dashed border-r-[#4165E1]">
          <Marker className={"-top-1 -left-1"} />
          <Marker className={"-top-1 -right-1"} />
        </div>
        <div className="relative z-9999 w-13.75 self-stretch shrink-0 bg-[#184ADC]">
          <Marker className={"-top-1 -left-1"} />
          <Marker className={"-top-1 -right-1"} />
        </div>
      </div>
    </div>
  );
}
