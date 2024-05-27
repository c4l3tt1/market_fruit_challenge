'use client'
import { ILogoHeader } from '@/types/header'
import { cn } from '@/utils/classes'
import Image from 'next/image'
import Link from 'next/link'

export const LogoHeader = ({ href, logoImage, logoText, className, ...props }: ILogoHeader) => {
  const hasLogoText = logoText && logoText !== ''
  return (
    <Link
      href={href}
      className={cn('w-full max-w-[240px] gap-2 flex flex-nowrap items-center justify-center no-underline', className)}
    >
      <Image
        width={40}
        height={40}
        loading="eager"
        src={logoImage}
        className={cn('w-full max-w-[40px] flex-shrink-0 h-auto')}
        alt="Ícone Logo Market"
      />
      {hasLogoText && <span className={cn('text-black  uppercase font-blackBold whitespace-nowrap')}>{logoText}</span>}
    </Link>
  )
}
