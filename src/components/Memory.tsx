import { Memory as MemoryInterface } from "@/interfaces/Memory.interface";
import Image from "next/image";

type MemoryProps = MemoryInterface;

export default function Memory({
  date,
  title,
  src,
  alt,
  description,
}: MemoryProps) {
  return (
    <div className="mb-16 flex flex-col gap-4">
      <small className="cursor-default text-[14px] text-gray-100 md:text-xs">
        {date}
      </small>
      <h2 className="cursor-default text-xl text-gray-50 md:text-2xl">
        {title}
      </h2>
      <div className="h-[280px] w-full overflow-hidden rounded-lg">
        <Image
          className="rounded-lg object-cover transition-transform duration-300 hover:scale-110"
          src={src}
          alt={alt}
          height={280}
          width={1000}
          layout="responsive"
        />
      </div>
      <p className="text-md cursor-default text-gray-100 md:text-lg">
        {description}
      </p>
    </div>
  );
}
