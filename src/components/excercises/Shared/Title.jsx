export default function Title({index,title,description}) {
  return (
    <div className="flex flex-col gap-3 sm:gap-4">
      <div className="flex justify-center items-baseline gap-3">
        <p className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-200">
          {index}
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
          {title}
        </h2>
      </div>
      <p className="text-sm sm:text-base mx-auto text-gray-600">
        {description}
      </p>
    </div>
  )
}


