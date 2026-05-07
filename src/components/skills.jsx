function SkillCard({
  name,
  url,
  iconUrl,
  imageClassName = "w-6 h-6 shrink-0 grayscale",
}) {
  return (
    <div className="flex overflow-clip flex-row items-center justify-between flex-1 h-14.75 px-4.5 bg-[#141518] border-r border-r-solid border-r-[#1D2129]">
      <div className="flex overflow-clip flex-col items-start">
        <div className="w-fit font-['IBMPlexSerif-Regular','IBM_Plex_Serif',system-ui,sans-serif] text-white text-sm/4.5">
          {name}
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit font-['iAWriterQuattroS-Regular','iA_Writer_Quattro_S',system-ui,sans-serif] text-[#A2A5AD] text-xs/4 hover:underline"
        >
          {url.replace("https://", "").replace("www.", "")}
        </a>
      </div>
      <img src={iconUrl} alt={name} className={imageClassName} />
    </div>
  );
}

export default function Skills() {
  return (
    <div
      id="skills"
      className="[font-synthesis:none] flex overflow-clip w-full flex-col items-center gap-0 px-0 justify-center bg-[#141518] antialiased"
    >
      <div className="flex overflow-clip items-start self-stretch">
        <div className="overflow-clip w-13.75 self-stretch shrink-0 bg-[#121415] border-b border-b-solid border-b-[#1C2129] border-r border-r-solid border-r-[#1C2129]" />
        <div className="overflow-clip w-27.5 self-stretch shrink-0 border-b border-b-solid border-b-[#1C2129] border-r border-r-solid border-r-[#1C2129]" />
        <div className="flex overflow-clip py-10 px-64.5 items-center flex-col h-10 justify-center flex-1 border-b border-b-solid border-b-[#1C2129] border-r border-r-solid border-r-[#1C2129]">
          <div className="w-fit font-['IBMPlexSerif-Regular','IBM_Plex_Serif',system-ui,sans-serif] text-[#8EC5FF] text-[26px]/8">
            Skills
          </div>
        </div>
        <div className="overflow-clip w-27.5 self-stretch shrink-0 border-b border-b-solid border-b-[#1C2129] border-r border-r-solid border-r-[#1C2129]" />
        <div className="overflow-clip w-13.75 self-stretch shrink-0 bg-[#121415] border-b border-b-solid border-b-[#1C2129]" />
      </div>
      <div className="flex overflow-clip items-start self-stretch">
        <div className="overflow-clip h-15 w-13.75 shrink-0 bg-[#121415] border-r border-dashed border-r-[#1C2129]" />
        <div className="overflow-clip h-15 w-27.5 shrink-0 bg-[#141518] border-r border-r-solid border-r-[#1C2129]" />
        <div className="flex overflow-clip items-center flex-1 border-b border-b-solid border-b-[#1C2129] border-r border-r-solid border-r-[#1C2129]">
          <SkillCard
            name="C++"
            url="https://isocpp.org"
            iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
          />
          <SkillCard
            name="Clerk"
            url="https://clerk.com"
            iconUrl="https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logos/clerk-uvna1mxd54k50cohb8o2i.png/clerk-nzr7956knokwjx841f6yye.png?_a=DATAiZAAZAA0"
            imageClassName="w-6 h-6 shrink-0 grayscale invert opacity-60"
          />
          <SkillCard
            name="Convex"
            url="https://convex.dev"
            iconUrl="https://www.convex.dev/favicon.ico"
          />
          <SkillCard
            name="Docker"
            url="https://www.docker.com"
            iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
          />
        </div>
        <div className="overflow-clip h-15 w-27.5 shrink-0 bg-[#141518] border-r border-dashed border-r-[#1C2129]" />
        <div className="overflow-clip h-15 w-13.75 shrink-0 bg-[#121415] border-r border-r-solid border-r-[#1C2129]" />
      </div>
      <div className="flex overflow-clip items-start self-stretch">
        <div className="overflow-clip h-15 w-13.75 shrink-0 bg-[#121415] border-r border-dashed border-r-[#1C2129]" />
        <div className="overflow-clip h-15 w-27.5 shrink-0 bg-[#141518] border-r border-r-solid border-r-[#1C2129]" />
        <div className="flex overflow-clip items-center flex-1 border-b border-b-solid border-b-[#1C2129] border-r border-r-solid border-r-[#1C2129]">
          <SkillCard
            name="Express.js"
            url="https://expressjs.com"
            iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
            imageClassName="w-6 h-6 shrink-0 grayscale invert opacity-60"
          />
          <SkillCard
            name="Framer Motion"
            url="https://motion.dev"
            iconUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlUjjLKYIZutLTtxq5NM3x_sSwetGTa03guw&s"
          />
          <SkillCard
            name="Firebase"
            url="https://firebase.google.com"
            iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg"
          />
          <SkillCard
            name="Git"
            url="https://git-scm.com"
            iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          />
        </div>
        <div className="overflow-clip h-15 w-27.5 shrink-0 bg-[#141518] border-r border-dashed border-r-[#1C2129]" />
        <div className="overflow-clip h-15 w-13.75 shrink-0 bg-[#121415] border-r border-r-solid border-r-[#1C2129]" />
      </div>
      <div className="flex overflow-clip items-start self-stretch">
        <div className="overflow-clip h-15 w-13.75 shrink-0 bg-[#121415] border-r border-dashed border-r-[#1C2129]" />
        <div className="overflow-clip h-15 w-27.5 shrink-0 bg-[#141518] border-r border-r-solid border-r-[#1C2129]" />
        <div className="flex overflow-clip items-center flex-1 border-b border-b-solid border-b-[#1C2129] border-r border-r-solid border-r-[#1C2129]">
          <SkillCard
            name="Java"
            url="https://www.java.com"
            iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
          />
          <SkillCard
            name="MongoDB"
            url="https://www.mongodb.com"
            iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
          />
          <SkillCard
            name="MySQL"
            url="https://www.mysql.com"
            iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
          />
          <SkillCard
            name="Next.js"
            url="https://nextjs.org"
            iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
          />
        </div>
        <div className="overflow-clip h-15 w-27.5 shrink-0 bg-[#141518] border-r border-dashed border-r-[#1C2129]" />
        <div className="overflow-clip h-15 w-13.75 shrink-0 bg-[#121415] border-r border-r-solid border-r-[#1C2129]" />
      </div>
      <div className="flex overflow-clip items-start self-stretch">
        <div className="overflow-clip h-15 w-13.75 shrink-0 bg-[#121415] border-r border-dashed border-r-[#1C2129]" />
        <div className="overflow-clip h-15 w-27.5 shrink-0 bg-[#141518] border-r border-r-solid border-r-[#1C2129]" />
        <div className="flex overflow-clip items-center flex-1 border-b border-b-solid border-b-[#1C2129] border-r border-r-solid border-r-[#1C2129]">
          <SkillCard
            name="PostgreSQL"
            url="https://www.postgresql.org"
            iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
          />
          <SkillCard
            name="Python"
            url="https://www.python.org"
            iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
          />
          <SkillCard
            name="React"
            url="https://react.dev"
            iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          />
          <SkillCard
            name="Supabase"
            url="https://supabase.com"
            iconUrl="https://img.icons8.com/color/600/supabase.png"
          />
        </div>
        <div className="overflow-clip h-15 w-27.5 shrink-0 bg-[#141518] border-r border-dashed border-r-[#1C2129]" />
        <div className="overflow-clip h-15 w-13.75 shrink-0 bg-[#121415] border-r border-r-solid border-r-[#1C2129]" />
      </div>
      <div className="flex overflow-clip items-start self-stretch">
        <div className="overflow-clip h-15 w-13.75 shrink-0 bg-[#121415] border-r border-dashed border-r-[#1C2129]" />
        <div className="overflow-clip h-15 w-27.5 shrink-0 bg-[#141518] border-r border-r-solid border-r-[#1C2129]" />
        <div className="flex overflow-clip items-center flex-1 border-r border-r-solid border-r-[#1C2129]">
          <SkillCard
            name="Tailwind CSS"
            url="https://tailwindcss.com"
            iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
          />
          <SkillCard
            name="TypeScript"
            url="https://www.typescriptlang.org"
            iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          />
          <div className="flex overflow-clip flex-col items-start flex-1 h-14.75 justify-center px-4.5 bg-[#141518] border-r border-r-solid border-r-[#1D2129]">
            <div className="w-fit font-['IBMPlexSerif-Regular','IBM_Plex_Serif',system-ui,sans-serif] text-[#A2A5AD] text-sm/4.5">
              And learning...
            </div>
          </div>
          <div className="flex overflow-clip flex-col items-start flex-1 h-14.75 justify-center px-4.5 bg-[#141518]">
            <div className="w-fit font-['IBMPlexSerif-Regular','IBM_Plex_Serif',system-ui,sans-serif] text-white text-sm/4.5"></div>
          </div>
        </div>
        <div className="overflow-clip h-15 w-27.5 shrink-0 bg-[#141518] border-r border-dashed border-r-[#1C2129]" />
        <div className="overflow-clip h-15 w-13.75 shrink-0 bg-[#121415] border-r border-r-solid border-r-[#1C2129]" />
      </div>
    </div>
  );
}
