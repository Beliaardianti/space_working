const getTitleStyle = (section: string) => {
  switch (section) {
    case 'hero':
      return 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[55px] leading-8 md:leading-8 lg:leading-[82.5px]';
    case 'header':
      return 'text-base sm:text-lg md:text-lg lg:text-base xl:text-base font-semibold leading-6 md:leading-7 lg:leading-6 xl:leading-6';
    case 'categories':
      return 'text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-xl font-semibold leading-6 md:leading-7 lg:leading-6 xl:leading-6';
    case 'facility':
      return 'text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-xl font-semibold leading-7 md:leading-8 lg:leading-[30px] xl:leading-8';
    case 'detail':
    case 'booking':
    case 'empty':
      return 'font-bold text-base sm:text-lg md:text-xl lg:text-lg xl:text-lg leading-7 md:leading-8 lg:leading-[27px] xl:leading-8 text-secondary text-center md:text-left';
    default:
      return 'text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-2xl leading-7 md:leading-8 lg:leading-9 xl:leading-7';
  }
}

const getSubtitleStyle = (section: string) => {
  switch (section) {
    case 'hero':
      return 'text-sm sm:text-base md:text-lg lg:text-base xl:text-lg leading-7 md:leading-8 lg:leading-7 xl:leading-8 text-secondary';
    case 'header':
      return 'text-xs sm:text-sm md:text-base lg:text-sm xl:text-base leading-6 md:leading-7 lg:leading-6 xl:leading-6 text-subtitle';
    case 'categories':
      return 'text-sm sm:text-base md:text-lg lg:text-base xl:text-lg leading-6 md:leading-7 lg:leading-6 xl:leading-6 text-subtitle';
    case 'facility':
      return 'text-sm sm:text-base md:text-lg lg:text-base xl:text-lg leading-6 md:leading-7 lg:leading-6 xl:leading-6 text-subtitle';
    case 'detail':
    case 'booking':
    case 'empty':
      return 'text-sm sm:text-base md:text-lg lg:text-base xl:text-lg leading-6 md:leading-7 lg:leading-6 xl:leading-7 text-subtitle';
    default:
      return 'text-sm sm:text-base leading-6 text-subtitle';
  }
}

function Title({
  title = '',
  subtitle,
  section = '',
  reverse = false
}: {
  title: string
  subtitle?: string | undefined
  section?: 'hero' | 'header' | 'categories' | 'detail' | 'facility' | 'booking' | 'admin' | 'overview' | 'empty' | ''
  reverse?: boolean
}) {
  return (
    <div data-reverse={reverse} className='flex data-[reverse=false]:flex-col data-[reverse=true]:flex-col-reverse data-[reverse=true]:text-right'>
      <h1 className={`font-bold text-secondary ${getTitleStyle(section)}`}>
        { title }  
      </h1>
      <h2 className={getSubtitleStyle(section)}>
        { subtitle }  
      </h2>   
    </div>
  )
}
export default Title
