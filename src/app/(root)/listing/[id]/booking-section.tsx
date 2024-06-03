import { Button } from "@/components/atomics/button";
import Title from "@/components/atomics/title";
import CardBooking from "@/components/molecules/card/card-booking";
import { DatePickerDemo } from "@/components/molecules/date-picker";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BookingSectionProps {
  id: string;
  day: number;
  month: number;
  year: number;
}

function BookingSection({ id, day, month, year }: BookingSectionProps) {
  return (
    <div className="w-full max-w-[360px] xl:max-w-[400px] h-fit space-y-5 bg-white border border-border rounded-[20px] p-[30px] shadow-indicator">
      <h1 className="font-bold text-lg leading-[27px] text-secondary">
        Mulai Sewa
      </h1>
      <span className="leading-6">
        <span className="font-bold text-4xl leading-[54px]">Rp {day}</span>
        /hari
      </span>
      <div className="space-y-5">
        <span className="leading-6">atau</span>
      </div>
      <div className="space-y-5">
        <span className="font-bold text-4xl leading-[54px]">Rp {month}</span>
        /bulan
        <br />
        <span className="font-bold text-4xl leading-[54px]">Rp {year}</span>
        /tahun
      </div>
      <div className="space-y-5">
        <div className="text-base leading-[30px] text-secondary pt-2.5">
          Untuk penawaran dan pembayaran lebih lanjut. silahkan hubungi kami
        </div>
      </div>
      <Link href={`https://wa.me/+62816511982`}>
        <Button variant="default" className="mt-4">
          Hubungi Kami
        </Button>
      </Link>
    </div>
  );
}

export default BookingSection;
