import Image from "next/image";

interface SkillSectionProps {
  title: string;
  data: SkillProps[];
}

interface SkillProps {
  title: string;
  description: string;
  image: string;
}

export default function SkillSection({ title, data }: SkillSectionProps) {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-medium mb-2 text-center">{title}</h1>
      <div className="flex flex-col bg-[#2A2927] shadow-lg shadow-[#2A292780] rounded-lg gap-2 w-96 px-2 py-2 ">
        {data.map((item, index) => (
          <div
            key={index}
            className="group w-full px-5 py-5 flex bg-[#181716] items-center justify-start gap-6 rounded-md text-2xl md:hover:scale-125 md:hover:-rotate-6 md:hover:z-50 transition-transform duration-200 hover:outline outline-[#2A2927]"
          >
            <Image src={item.image} alt={item.title} width={50} height={50} quality={25} priority={false} className="md:saturate-[.25] md:group-hover:saturate-100 transition-all duration-200" />

            <div className="flex gap-1 flex-col items-start justify-start">
              {item.title}
              <h1 className="text-xl font-light">{item.description}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
