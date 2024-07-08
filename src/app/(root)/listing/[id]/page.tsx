"use client";
import Breadcrumbs from "@/components/molecules/breadcrumbs";
import CardFacility from "@/components/molecules/card/card-facility";
import CardStar from "@/components/molecules/card/card-star";
import { Badge } from "@/components/atomics/badge";
import { Button } from "@/components/atomics/button";
import Title from "@/components/atomics/title";
import Image from "next/image";
import Map from "@/components/molecules/map";
import ListingShowcase from "@/components/molecules/listing/listing-showcase";
import PhotoGallery from "./photo-gallery";
import BookingSection from "./booking-section";
import CustomerReviews from "./customer-reviews";
import { useGetDetailListingQuery } from "@/services/listing.service";
import { useMemo } from "react";
import { Listing } from "@/interfaces/listing";
import Link from "next/link";

function Detail({ params }: { params: { id: string } }) {
  const { data } = useGetDetailListingQuery(params.id);
  const listing: Listing | undefined = useMemo(() => data?.data, [data]);
  return (
    <main>
      <section id="overview-section" className="bg-gray-light pt-[170px] pb-[50px]">
        <div className="px-6 md:px-8 xl:container xl:mx-auto">
          <Breadcrumbs />
          {listing?.attachments && (
            <PhotoGallery
              photos={listing?.attachments}
              lat={listing?.latitude}
              lng={listing?.longitude}
            />
          )}

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-x-5">
          <div className="col-span-2 xl:col-span-3 space-y-5 pr-0 lg:pr-5">
  <Badge className="text-xs py-1 rounded-md sm:py-5 md:py-4 px-2 sm:text-lg sm:px-4 md:px-5">
    Working Space
  </Badge>


              <div className="flex flex-col md:flex-row items-start justify-between">
                <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl leading-tight text-secondary max-w-full md:max-w-[300px]">
                  {listing?.title}
                </h1>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8">
                <div className="flex items-center font-semibold leading-6">
                  <Image
                    src="/icons/location-dark.svg"
                    alt="location-dark"
                    height={20}
                    width={20}
                    className="mr-1"
                  />
                  {listing?.address}
                </div>
                <div className="flex items-center font-semibold leading-6">
                  <Image
                    src="/icons/format-square-dark.svg"
                    alt="format-square-dark"
                    height={20}
                    width={20}
                    className="mr-1"
                  />
                  {listing?.sqft} sqft
                </div>
                <div className="flex items-center font-semibold leading-6">
                  <Image
                    src="/icons/profile-2user-dark.svg"
                    alt="profile-2user-dark"
                    height={20}
                    width={20}
                    className="mr-1"
                  />
                  {listing?.max_capacity} people
                </div>
                <div className="flex items-center font-semibold leading-6">
                  <Image
                    src="/icons/wifi-dark.svg"
                    alt="wifi-dark"
                    height={20}
                    width={20}
                    className="mr-1"
                  />
                  {"Internet Ready"}
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg px-5 py-4 mt-8 space-y-5">
              <span className="font-bold text-lg leading-[27px]">Host</span>
              <div className="flex items-center space-x-3">
                <Image
                  src="/images/avatar-review.svg"
                  alt="avatar"
                  height={50}
                  width={50}
                  className="rounded-full"
                />
                <div>
                  <h1 className="font-bold text-secondary">Benny</h1>
                  <div className="flex items-center text-sm leading-[21px] text-subtitle">
                    <Image
                      src="/icons/clock.svg"
                      alt="clock"
                      height={18}
                      width={18}
                      className="mr-[0.5px]"
                    />
                    3 mins response
                  </div>
                </div>
              </div>
              <Link href="https://wa.me/+62816511982">
                <Button variant="third">Send Message</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about-booking-section"
        className="px-5 md:px-10 sm:px-8 xl:container xl:mx-auto py-[50px] flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8 xl:space-x-[80px]"
      >
        <div className="w-full max-w-full lg:max-w-[600px] xl:max-w-[650px] space-y-[30px]">
          <Title
            section="detail"
            title="Deskripsi Kantor"
            subtitle={listing?.description}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <CardFacility
              icon="/icons/security.svg"
              title="24/7 Supports"
              subtitle="Best People"
            />
            <CardFacility
              icon="/icons/weight.svg"
              title="Gym Space"
              subtitle="Complete"
            />
            <CardFacility
              icon="/icons/coffee.svg"
              title="Mini Cafe"
              subtitle="Western"
            />
            <CardFacility
              icon="/icons/video-play.svg"
              title="Cinema"
              subtitle="All Movies Included"
            />
          </div>
          <Map lat={listing?.latitude ?? 0} lng={listing?.longitude ?? 0} />
        </div>
        <div className="flex justify-center w-full">
      <BookingSection
        id={params?.id}
        day={listing?.price_per_day ?? 0}
        month={listing?.price_per_month ?? 0}
        year={listing?.price_per_year ?? 0}
      />
    </div>
      </section>

      <ListingShowcase
        id="deals-section"
        title="Similar Places"
        subtitle="Beauty in comparison of models"
      />
    </main>
  );
}

export default Detail;
