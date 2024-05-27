'use client'
import { LogoHeader } from '@/components/header'
import { IHeader } from '@/types/header'
import { cn } from '@/utils/classes'

export const Header = ({ className, ...props }: IHeader) => {
  return (
    <header
      className={cn(
        'flex flex-col items-center justify-center py-2 shadow-header max-h-[70px] fixed top-0 left-0 w-full bg-white z-[3]',
        className
      )}
      {...props}
    >
      <div className={cn('container md:px-4 flex flex-nowrap justify-center items-center')}>
        <LogoHeader href={'/'} logoText="Market Fruits List" logoImage={'/logo-default.png'} />
      </div>
    </header>
  )
}
