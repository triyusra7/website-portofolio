import Image from "next/image";

type SectionGifProps = {
  src: string;
  label: string;
};

export function SectionGif({ src, label }: SectionGifProps) {
  return (
    <div className="pointer-events-none flex justify-start lg:justify-end">
      <div className="relative h-28 w-28 md:h-32 md:w-32">
        <Image
          src={src}
          alt={label}
          fill
          unoptimized
          sizes="128px"
          className="object-contain"
        />
      </div>
    </div>
  );
}
