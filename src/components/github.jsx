import { GitHubCalendar } from "react-github-calendar";
import { DotGrid } from "@paper-design/shaders-react";

export default function Github() {
  return (
    <div className="[font-synthesis:none] flex overflow-clip flex-col items-start gap-0 w-full bg-[#141518] antialiased p-0">
      <div className="flex overflow-clip items-start self-stretch">
        <div className="overflow-clip w-13.75 self-stretch shrink-0 bg-[#121415] border-r border-r-dashed border-r-[#1C2129]" />
        <div className="overflow-clip w-27.5 relative self-stretch shrink-0 bg-[#141518] border-r border-r-solid border-r-[#1C2129]">
          <DotGrid
            size={1}
            gapY={20}
            gapX={20}
            strokeWidth={0}
            sizeRange={0}
            opacityRange={0}
            shape="circle"
            colorFill="#7C7C7C"
            colorStroke="#FFAA00"
            colorBack="#00000000"
            className="absolute h-full w-full left-0 top-0 opacity-20"
          />
        </div>
        <div className="flex overflow-clip flex-col items-center justify-center gap-7.5 flex-1 pt-20 pb-20 border-r border-r-solid border-r-[#1C2129]">
          <div className="w-fit font-['IBMPlexSerif-Regular','IBM_Plex_Serif',system-ui,sans-serif] text-[#8EC5FF] text-[26px]/8">
            Github Activity
          </div>
          <div className="overflow-clip shrink-0">
            <GitHubCalendar
              fontSize={12}
              blockMargin={4}
              theme={{
                light: ["hsl(0, 0%, 92%)", "firebrick"],
                dark: ["#121415", "#8EC5FF"],
              }}
              tooltips={{
                activity: {
                  text: (activity) =>
                    `${activity.level} activities on ${activity.date}`,
                },
              }}
              blockSize={11}
              className="text-white/60"
              username="vmridul"
            />
          </div>
        </div>
        <div className="overflow-clip w-27.5 relative self-stretch shrink-0 bg-[#141518] border-r border-r-dashed border-r-[#1C2129]">
          <DotGrid
            size={1}
            gapY={20}
            gapX={20}
            strokeWidth={0}
            sizeRange={0}
            opacityRange={0}
            shape="circle"
            colorFill="#7C7C7C"
            colorStroke="#FFAA00"
            colorBack="#00000000"
            className="absolute h-full w-full left-0 top-0 opacity-20"
          />
        </div>
        <div className="overflow-clip w-13.75 self-stretch shrink-0 bg-[#121415]" />
      </div>
    </div>
  );
}
