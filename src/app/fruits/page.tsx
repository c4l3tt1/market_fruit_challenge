import { ButtonAddFruits } from '@/app/fruits/add/addButton'
import { ButtonBackPage } from '@/components/buttonBack'
import { ListFruits } from '@/components/listFruits'
import { LoadingList } from '@/components/loadingList'
import { Suspense } from 'react'

const FruitsPage = () => {
  return (
    <section className="w-full">
      <div className="container md:px-4">
        <h2 className="text-3xl font-montserrat font-black mb-10 flex items-center gap-x-2">
          <ButtonBackPage />
          Fruits List
        </h2>
        <Suspense fallback={<LoadingList />}>
          <ListFruits />
        </Suspense>
        <ButtonAddFruits />
      </div>
    </section>
  )
}

export default FruitsPage
