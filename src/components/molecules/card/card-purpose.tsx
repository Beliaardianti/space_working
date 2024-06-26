import Image from 'next/image'

function CardPurpose({ image, title, purpose }: { image: string, title: string, purpose: string }) {
  return (
    <figure className='relative'>
      <Image
        src={image}
        alt={title}
        height={0}
        width={0}
        className='w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-3xl object-cover'
      />

      <div className='absolute flex flex-col p-5 top-0 rounded-3xl w-full h-full text-white bg-gradient-to-t from-gradient-black to-transparent to-[30%]'>
        <div className='mt-auto flex items-center justify-between'>
          <span className='font-bold text-base sm:text-lg lg:text-xl leading-tight sm:leading-[24px] lg:leading-[30px] max-w-[70%]'>
            {title}
          </span>
          <div className='flex items-center text-xs sm:text-sm lg:text-base leading-tight sm:leading-[18px] lg:leading-[21px]'>
            <Image
              src='/icons/profile-2user.svg'
              alt='profile-icon'
              height={0}
              width={0}
              className='w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-1'
            />
            {purpose}
          </div>
        </div>
      </div>
    </figure>
  )
}

export default CardPurpose
