import { Button } from "@/components/atomics/button";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

function PhotoGallery({ photos, lat, lng }) {
  const [selectedPhoto, setSelectedPhoto] = useState(photos[0]);

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  return (
    <div className="mt-[30px] grid gap-5 sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4">
      <div className="col-span-1 md:col-span-2 xl:col-span-3 relative">
        <Image
          src={`${process.env.NEXT_PUBLIC_STORAGE_BASE_URL}/${selectedPhoto}`}
          alt="image-1"
          height={0}
          width={0}
          className="w-full h-[320px] sm:h-[400px] md:h-[520px] rounded-[30px] object-cover"
          unoptimized
        />
        {lat && lng && (
          <div className="absolute bottom-[30px] right-[30px]">
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href={`https://maps.google.com/maps?q=${lat},${lng}&hl=es;z=14&amp;output=embed`}
            >
              <Button className="flex" variant="third">
                <Image
                  src="/icons/direct-right.svg"
                  alt="direct-right"
                  height={24}
                  width={24}
                  className="mr-2.5"
                />
                Lihat Peta
              </Button>
            </Link>
          </div>
        )}
      </div>
      {photos?.length > 1 && (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 gap-5">
          {photos.slice(0, 3).map((photo, index) => (
            <div
              key={index}
              className="col-span-1 cursor-pointer"
              onClick={() => handlePhotoClick(photo)}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_STORAGE_BASE_URL}/${photo}`}
                alt={`image-${index + 2}`}
                height={0}
                width={0}
                className="w-full h-[100px] sm:h-[120px] md:h-[150px] xl:h-[200px] rounded-[20px] object-cover"
                unoptimized
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PhotoGallery;
