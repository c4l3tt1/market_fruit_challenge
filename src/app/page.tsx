import AppleIcon from '@mui/icons-material/Apple'
import StorefrontIcon from '@mui/icons-material/Storefront'
import Link from 'next/link'
const HomePage = () => {
  const buttonClasses =
    'h-12 w-full whitespace-nowrap max-w-56 text-lg bg-[#1975d2] font-montserrat rounded-md flex justify-center items-center p-4 no-underline text-white font-semibold gap-x-1 transition-all duration-500  hover:bg-blue-500'

  // const [loading, setLoading] = useState<boolean>(true)

  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 1000)
  // }, [])

  // if (loading) {
  //   return <LoadingPage />
  // }

  return (
    <section className="w-full">
      <div className="container md:px-4">
        <div className="bg-center bg-market bg-no-repeat bg-contain h-[380px] flex flex-col justify-center items-center w-full">
          <h1 className="text-3xl font-montserrat font-black text-center">Welcome to market!</h1>
          <h1 className="text-2xl font-montserrat font-normal mb-10 text-center">
            Choose a button to start the navigation
          </h1>
          <div className="flex gap-x-5 justify-center items-center w-full xs:flex-col xs:gap-y-5">
            <Link href="/fruits" className={buttonClasses}>
              <AppleIcon />
              Fruits List
            </Link>
            <Link href="/buckets" className={buttonClasses}>
              <StorefrontIcon />
              Buckets List
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage
