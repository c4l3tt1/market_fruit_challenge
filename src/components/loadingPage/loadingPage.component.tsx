import { cn } from '@/utils/classes'
import Image from 'next/image'
import logoFruitMarket from '../../../public/logo-default.png'
export const LoadingPage = () => {
  return (
    <div
      className={cn(
        'h-full object-cover bg-cover bg-center bg-no-repeat bg-opacity-90  fixed top-0 left-0 w-full flex items-center justify-center'
      )}
    >
      <div className="animate-bounce">
        <Image
          src={logoFruitMarket}
          width={300}
          height={300}
          loading="eager"
          alt="Logo Fruit Market"
          className="w-full h-auto max-w-52 mb-8 sm:max-w-40"
        />
      </div>
    </div>
  )
}

export default LoadingPage
