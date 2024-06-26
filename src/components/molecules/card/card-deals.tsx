import { DealsProps } from "@/interfaces/landing-page";
import { moneyFormat } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

function CardDeals({
  image,
  title,
  slug,
  price,
  wide,
  capacity,
  facility,
}: DealsProps) {
  return (
    <Link href={slug} className="block">
      <figure className="relative bg-white shadow-lg overflow-hidden transition-shadow duration-300 w-full rounded-xl card">
        {image && (
          <div className="hidden md:block">
            <Image
              src={`${process.env.NEXT_PUBLIC_STORAGE_BASE_URL}/${image}`}
              alt={title}
              width={500}
              height={300}
              className="w-full h-[280px] object-cover rounded-t-xl"
              unoptimized
            />
          </div>
        )}
        {/* Konten card */}
        <div className="p-4">
          <div className="text-gray-900">
            <h4 className="text-sm md:text-sm font-bold sm:text-xs">{title}</h4>
            <p className="mt-1 md:mt-2 text-sm md:text-base text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non provident adipisci odio iure 
            </p>
            <p className="text-sm md:text-base mt-2">
              <span className="font-semibold">{moneyFormat.format(price)}</span> /Hari
            </p>
          </div>

       <div className="flex flex-wrap items-center justify-between mt-3 md:mt-4 text-sm text-gray-700 space-y-2 md:space-y-0">
  <div className="flex items-center">
    <Image
      src="/icons/format-square.svg"
      alt="square-icon"
      height={20}
      width={20}
      className="mr-1 filter invert"
    />
    {wide} sqft
  </div>
  <div className="flex items-center">
    <Image
      src="/icons/profile-2user.svg"
      alt="profile-icon"
      height={20}
      width={20}
      className="mr-1 filter invert"
    />
    {capacity}
  </div>
  <div className="flex items-center">
    <Image
      src="/icons/wifi.svg"
      alt="wifi-icon"
      height={20}
      width={20}
      className="mr-1 filter invert"
    />
    {facility}
  </div>
</div>

          <div className="flex items-center text-sm mt-2 md:mt-3 text-gray-700">
            <Image
              src="/icons/star.svg"
              alt="star-icon"
              height={20}
              width={20}
              className="mr-1"
            />
            4/5
          </div>
        </div>
      </figure>
    </Link>
  );
}

export default CardDeals;
