export default function Feature(props: {
  colSpan?: boolean
  rowSpan?: boolean
  title: string
}) {
  return (
    <div
      className={`${props.colSpan && 'col-span-2'} ${
        props.rowSpan && 'row-span-2'
      } m-1 rounded-lg border p-2 text-left text-sm shadow-md dark:shadow-slate-500`}
    >
      {props.title}
    </div>
  )
}
