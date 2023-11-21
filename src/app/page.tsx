import { getTitleFont } from './fonts'

export default function Home() {
  return (
    <main className='flex flex-col gap-4'>
      <div>
        <div className='grid h-screen grid-rows-3 p-5 md:grid-rows-1 md:grid-cols-2'>
          <div className='flex items-center justify-center'>
            <div className={getTitleFont().className}>
              <h1 className='text-[10vw]'>Uplogging</h1>
              <h2 className='ml-10 text-[3vw]'>Subtitle</h2>
            </div>
          </div>
          <div className='row-span-2 flex items-center'>
            <div className='mx-auto aspect-[9/19.5] w-1/3 -translate-y-1/4 translate-x-full border'></div>
            <div className='mx-auto aspect-[9/19.5] w-1/3 -translate-x-full translate-y-1/4 border'></div>
          </div>
        </div>
        <div className='h-8 w-full rounded-b-xl border-b' />
      </div>
    </main>
  )
}
