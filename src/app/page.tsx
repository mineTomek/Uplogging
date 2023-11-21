import Feature from './components/home/section/features/Feature'
import { getTitleFont } from './fonts'

export default function Home() {
  return (
    <main className='mb-16 flex flex-col gap-4'>
      <div>
        <div className='grid h-screen grid-rows-3 p-5 md:grid-cols-2 md:grid-rows-1'>
          <div className='flex items-center justify-center'>
            <div className={getTitleFont().className}>
              <h1 className='text-[10vw]'>Uplogging</h1>
              <h2 className='ml-10 text-[3vw]'>Subtitle</h2>
            </div>
          </div>
          <div className='row-span-2 flex items-center'>
            <div className='mx-auto aspect-[9/19.5] w-1/3 -translate-y-1/4 translate-x-full rounded-lg border bg-slate-50 shadow-lg dark:bg-black dark:shadow-primary-700'></div>
            <div className='mx-auto aspect-[9/19.5] w-1/3 -translate-x-full translate-y-1/4 rounded-lg border bg-slate-50 shadow-lg dark:bg-black dark:shadow-primary-700'></div>
          </div>
        </div>
        <div className='h-8 w-full rounded-b-xl border-b' />

        <div className={`${getTitleFont().className} mt-16 text-center`}>
          <h3 className='text-xl'>Features</h3>
          <div className='mx-auto mt-8 grid aspect-square w-1/2 grid-cols-3 grid-rows-3'>
            <Feature
              colSpan
              title='Jump Rope'
            />
            <Feature
              rowSpan
              title='Except Foot'
            />
            <Feature
              rowSpan
              title='President Contrast'
            />
            <Feature title='Accurate Correctly' />
            <Feature
              colSpan
              title='Slow Country'
            />
          </div>
        </div>
      </div>
    </main>
  )
}
