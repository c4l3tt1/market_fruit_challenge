import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

//type test = React.ComponentProps<'ul'>

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}
