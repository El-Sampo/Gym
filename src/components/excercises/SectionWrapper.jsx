export default function SectionWrapper({children,header,title,id}) {
  return (
    <section id={id} className="min-h-screen flex flex-col gap-10">
        <div className="bg-gradient-to-b from-white via-gray-50 to-white py-12 sm:py-14 flex flex-col gap-3 sm:gap-4 justify-center items-center px-4">
            <p className="uppercase font-medium tracking-widest text-gray-500 text-xs sm:text-sm">
                {header}
            </p>
            <h2 className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 text-center tracking-tight">
                {title[0]} <span className="uppercase text-red-600">{title[1]}</span> {title[2]}
            </h2>
            <div className="mt-2 h-px w-24 sm:w-32 rounded bg-gray-200" />

        </div>
        <div className="w-full max-w-7xl flex flex-col mx-auto gap-10 px-4 sm:px-6 lg:px-8">
        {children}
        </div>

    </section>
  )
}

