export default function PriceCard(props: any) {
  return (
    <div className="flex flex-col justify-center basis-1/5 items-center rounded-2xl ">
      <div className=" justify-center flex flex-col items-center w-full px-3 pb-7 pt-9 rounded-t-2xl gap-3 bg-white">
        <div className="text-xl">{props.title}</div>
        <div className="flex items-start">
          <span className="text-lg">IDR</span>
          <h3 className="text-5xl">{props.price}</h3>
          <span className="text-lg">000</span>
        </div>
        <h5 className="text-sm">{props.pertemuan}</h5>
      </div>

      <div className="flex flex-col justify-center items-center bg-red-500 px-3 pt-7 pb-9 rounded-b-2xl w-full gap-4">
        <ul className="p-2 list-disc text-sm">
          <li>{props.li1}</li>
          <li>{props.li2}</li>
          <li>{props.li3}</li>
        </ul>
      </div>
    </div>
  )
}
