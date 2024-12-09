type DescriptionTextProps = {
  title: string;
};

type TitleTextProps = {
  title: string;
};

export function DescriptionText({ title }: DescriptionTextProps) {
  return (
    <>
      <h3 className="font-manrope font-medium text-clamp-h3 text-[#AFAFAF] text-center">
        {title}
      </h3>
    </>
  );
}

export function TitleText({ title }: TitleTextProps) {
  return (
    <>
      <h2 className="text-clamp-h2 font-semibold text-center">{title}</h2>
    </>
  );
}
