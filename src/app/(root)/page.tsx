import CardIndicator from "@/components/molecules/card/card-indicator";
import { Button } from "@/components/atomics/button";
import { Input } from "@/components/atomics/input";
import { Separator } from "@/components/atomics/separator";
import Title from "@/components/atomics/title";
import categories from "@/json/categories.json";
import { CategoriesProps } from "@/interfaces/landing-page";
import Image from "next/image";
import CardBenefit from "@/components/molecules/card/card-benefit";
import CardPurpose from "@/components/molecules/card/card-purpose";
import CardReview from "@/components/molecules/card/card-review";
import ListingShowcase from "@/components/molecules/listing/listing-showcase";

function Home() {
  return (
    <main>
      <section
        id="hero-section"
        className={`bg-primary-foreground bg-cover lg:bg-contain bg-right bg-no-repeat bg-[url('/images/bg-image.svg')] min-h-[750px] max-h-[750px] xl:max-h-[850px]`}
      >
        <div className="pt-[226px] container mx-auto max-sm:px-8">
          <div className="max-w-[550px] lg:px-14 sm:px-0 sm:text-left md:text-left">
            <Title
              title="Ruang Kantor Eksklusif"
              subtitle="Kantor Premium & Ekslusif yang Ideal, Siap Pakai serta Fasilitas Lengkap. Cocok untuk anda dengan tim yang sedang berkembang dan produktif"
              section="hero"
            />

            <Button className="mt-[50px] mb-[50px]" variant="default" size="header">
              Lihat lebih lanjut
            </Button>

            <div className="pt-[50px] items-center hidden">
              <div className="grow">
                <Input
                  placeholder="Search by city or country..."
                  variant="hero"
                />
              </div>
              <Button variant="default" size="hero">
                Explore
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="indicator-section" className="container mx-auto -mt-16 pb-6 md:pb-8 p-5 lg:pb-9">
        <div className="h-auto flex flex-col md:flex-row justify-center md:justify-between items-center space-y-4 md:space-y-0 md:space-x-6 xl:space-x-12 bg-white shadow-indicator rounded-lg px-8 md:px-6 lg:px-9 py-4 md:py-5 xl:py-6">
          <CardIndicator
            icon="/icons/house-2.svg"
            title="382M"
            subtitle="Kos Available"
            variant="indicator"
          />
          <Separator orientation="vertical" className="bg-separator hidden md:block" />
          <CardIndicator
            icon="/icons/people-2.svg"
            title="9/10"
            subtitle="People Happy"
            variant="indicator"
          />
          <Separator orientation="vertical" className="bg-separator hidden md:block" />
          <CardIndicator
            icon="/icons/security-user.svg"
            title="100%"
            subtitle="High Security"
            variant="indicator"
          />
          <Separator orientation="vertical" className="bg-separator hidden md:block" />
          <CardIndicator
            icon="/icons/global.svg"
            title="183"
            subtitle="Countries"
            variant="indicator"
          />
        </div>
      </section>

      <ListingShowcase
        id="deals-section"
        title="Sewa kantor terbaru"
        subtitle="Lorem ipsum dolor sit amet conseqtetur adiscing elit"
      />

      <section id="categories-section" className="bg-gray-light">
        <div className="container mx-auto px-10 md:px-2 lg:px-8 xl:px-10 py-8 xl:py-12">
          <div className="flex items-center justify-between">
            <Title title="Categories" subtitle="We provide everything" />
            <div>
              <Button variant="default" size="button" className="shadow-button">
                Explore All
              </Button>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
            {categories.data.map((item: CategoriesProps, index: number) => (
              <CardIndicator
                key={index}
                icon={item.icon}
                title={item.title}
                subtitle={item.subtitle}
                section="categories"
              />
            ))}
          </div>
        </div>
      </section>

      <section id="benefits-section" className="container mx-auto px-10 sm:px-6 md:px-8 lg:px-10 mt-10">
        <div className="flex flex-col xl:flex-row justify-between gap-8">
          <div className="w-full xl:w-1/2">
            <h1 className="font-bold text-2xl md:text-3xl leading-snug max-w-full">
              Huge Benefits That Make You Feel Happier
            </h1>
            <ul className="mt-6 space-y-4">
              <CardBenefit benefit="Checking faster without depositing" />
              <CardBenefit benefit="24/7 security guarding your place" />
              <CardBenefit benefit="Fast-internet access without lagging" />
              <CardBenefit benefit="High standard of layout of room" />
              <CardBenefit benefit="All other benefits, we promise" />
            </ul>
            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-3">
              <Button
                variant="default"
                size="header"
                className="flex items-center"
              >
                <Image
                  src="/icons/message-notif.svg"
                  alt="message-notif"
                  height={0}
                  width={0}
                  className="h-5 w-5 mr-2.5"
                />
                Call Sales
              </Button>
              <Button variant="third" size="header">
                All Benefits
              </Button>
            </div>
          </div>
          <div className="hidden sm:grid w-full xl:w-1/2 grid-cols-1 sm:grid-cols-2 gap-6 xl:gap-8">
            <CardPurpose
              image="/images/image-benefit-1.svg"
              title="House for Office and Living"
              purpose="18,309"
            />
            <CardPurpose
              image="/images/image-benefit-2.svg"
              title="House Nearby with Mall"
              purpose="84,209"
            />
            <CardPurpose
              image="/images/image-benefit-3.svg"
              title="House Historical Building"
              purpose="22,409"
            />
            <CardPurpose
              image="/images/image-benefit-4.svg"
              title="Landed House with Park"
              purpose="47,584"
            />
          </div>
        </div>
      </section>

      <section id="review-section" className="container mx-auto my-8 md:my-16">
        <div className="flex justify-center text-center">
          <Title
            title="Happy Customers"
            subtitle="We’d love to come back again soon"
            section=""
           
          />
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-6">
            <CardReview
              rating={4}
              review="I was not so sure if there was a beautiful bedroom, but it was really great experience."
              avatar="/images/avatar-review.svg"
              username="Evelin Bie"
              jobdesk="Full-Time Traveler"
            />
            <CardReview
              rating={4}
              review="It’s just amazing, will be back."
              avatar="/images/avatar-review.svg"
              username="Evelin Bie"
              jobdesk="Full-Time Traveler"
            />
            <CardReview
              rating={4}
              review="I was not so sure if there was a beautiful bedroom, but it was really great experience."
              avatar="/images/avatar-review.svg"
              username="Evelin Bie"
              jobdesk="Full-Time Traveler"
            />
          </div>
          <div className="space-y-6">
            <CardReview
              rating={5}
              review="Price was too low yet luxury."
              avatar="/images/avatar-review.svg"
              username="Evelin Bie"
              jobdesk="Full-Time Traveler"
            />
            <CardReview
              rating={4}
              review="I was not so sure if there was a beautiful bedroom, but it was really great experience."
              avatar="/images/avatar-review.svg"
              username="Evelin Bie"
              jobdesk="Full-Time Traveler"
            />
            <CardReview
              rating={5}
              review="During covid I was stayed here and I got a lot of full of supports that I need to keep my body healthy."
              avatar="/images/avatar-review.svg"
              username="Evelin Bie"
              jobdesk="Full-Time Traveler"
            />
          </div>
          <div className="space-y-6">
            <CardReview
              rating={4}
              review="I was not so sure if there was a beautiful bedroom, but it was really great experience."
              avatar="/images/avatar-review.svg"
              username="Evelin Bie"
              jobdesk="Full-Time Traveler"
            />
            <CardReview
              rating={4}
              review="It’s just amazing, will be back."
              avatar="/images/avatar-review.svg"
              username="Evelin Bie"
              jobdesk="Full-Time Traveler"
            />
            <CardReview
              rating={4}
              review="I was not so sure if there was a beautiful bedroom, but it was really great experience."
              avatar="/images/avatar-review.svg"
              username="Evelin Bie"
              jobdesk="Full-Time Traveler"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
