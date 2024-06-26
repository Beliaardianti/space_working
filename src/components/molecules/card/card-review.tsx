import Image from 'next/image';
import CardStar from '@/components/molecules/card/card-star';
import Title from '@/components/atomics/title';

interface CardReviewProps {
  rating: number;
  review: string;
  avatar: string;
  username: string;
  jobdesk: string;
}

const CardReview: React.FC<CardReviewProps> = ({ rating, review, avatar, username, jobdesk }) => {
  return (
    <figure className='bg-gray-light rounded-lg px-4 py-4 space-y-4 md:px-5 md:py-4 md:space-y-5'>
      <CardStar rating={rating} variant='review'/>
      <span className='block text-secondary text-sm md:text-base leading-7 md:leading-8'>
        {review}
      </span>
      <div className='flex items-center mt-3 md:mt-0 md:space-x-3'>
        <div className='relative h-12 w-12 md:h-16 md:w-16'>
          <Image
            src={avatar}
            alt='avatar'
            fill
            className='rounded-full object-cover'
          />
        </div>
        <div className='flex flex-col'>
          <Title
            title={username}
            subtitle={jobdesk}
            section='header'
            
          />
        </div>
      </div>
    </figure>
  );
}

export default CardReview;
