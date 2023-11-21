export default function Feature(props: {
  colSpan?: boolean
  rowSpan?: boolean
  title: string
}) {
  return (
    <div
      className={`${props.colSpan && 'col-span-2'} ${
        props.rowSpan && 'row-span-2'
      } m-1 border p-2 text-left text-sm`}
    >
      {props.title}
    </div>
  )
}
