import SectionBadge from "@/components/CustomUI/SectionBadge/SectionBadge";
import { TitleText } from "@/components/CustomUI/Typography/text";
import Image, { StaticImageData } from "next/image";
import User1 from "../../../../public/user/1.jpg";
import User2 from "../../../../public/user/2.jpg";
import User3 from "../../../../public/user/3.jpg";
import User4 from "../../../../public/user/4.jpg";

interface TeamsProps {
  img: StaticImageData;
  name: string;
  role: string;
}

const teams: TeamsProps[] = [
  {
    img: User1,
    name: "Alif Kepanjen",
    role: "Ceo",
  },
  {
    img: User2,
    name: "Jennifer Sukun",
    role: "Business Development",
  },
  {
    img: User3,
    name: "David Pakis",
    role: "Tech Officer",
  },
  {
    img: User4,
    name: "Radu Klojen",
    role: "Infrastructure",
  },
];

export default function Teams() {
  return (
    <div
      id="teams"
      className="w-full relative flex flex-col justify-center items-center gap-14 py-14"
    >
      <div className="w-full flex flex-col justify-center items-center gap-4">
        <SectionBadge title="Our Creative Minds" />

        <TitleText title="The People Behind the Magic" />
      </div>

      <div className="w-full flex justify-center items-center">
        <div className="w-[90%] md:w-[70%] grid grid-cols-2 md:grid-cols-4 gap-8">
          {teams.map((team, index) => (
            <div
              className=" flex flex-col justify-center items-center gap-5"
              key={index}
            >
              <Image
                src={team.img}
                alt=""
                width={1000}
                height={1000}
                className="w-full h-full aspect-auto rounded-3xl "
              />
              <div className="flex flex-col justify-center items-center text-center gap-2">
                <h1 className="font-medium text-[#FFFFFF] text-[18px] sm:text-[21px] line-clamp-1">
                  {team.name}
                </h1>
                <h3 className="font-manrope font-normal text-[#919191] text-[15px] sm:text-[17px] line-clamp-1">
                  {team.role}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
