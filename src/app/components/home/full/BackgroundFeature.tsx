export default function BackgroundFeature() {
  return (
    <div className='fixed bottom-0 left-0 right-0 top-0 -z-10 flex items-center justify-center'>
      <div className='flex gap-6 blur-3xl -rotate-45'>
        <div className='h-32 w-64 translate-x-16 rounded-full bg-gradient-to-b from-primary-600 to-primary-200' />
        <div className='h-32 w-64 translate-x-16 rotate-45 rounded-full bg-gradient-to-r from-accent-600 to-accent-200' />
      </div>
    </div>
  )
}
