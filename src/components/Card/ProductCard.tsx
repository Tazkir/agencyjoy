import Image, { StaticImageData } from "next/image";

type ProductCardProps = {
  title: string;
  icon: StaticImageData;
  className?: string;
  style?: React.CSSProperties; // Added type for style prop
};

export default function ProductCard({
  title,
  icon,
  className,
  style,
}: ProductCardProps) {
  return (
    <>
      <div
        className={`flex justify-center items-center px-5 py-3 bg-gradient-to-t from-[#141414] to-[#262626] rounded-2xl gap-3 ${className}`}
        style={style}
      >
        <div className="w-9 h-9 p-2 border rounded-full bg-gradient-to-tl from-[#141414] to-[#3D3D3D]">
          <Image
            src={icon}
            height={1000}
            width={1000}
            alt="Products Icon"
            className="w-full h-full"
          />
        </div>

        <h3 className="text-base sm:text-lg font-medium text-center">
          {title}
        </h3>
      </div>
    </>
  );
}
