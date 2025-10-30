
export default function Button({text,fun}) {
  return (
    <button onClick={fun} className="rounded-md mx-auto bg-white font-semibold duration-200 px-8 py-4 border-2 border-gray-200 hover:border-red-600 text-gray-800">
    <p>{text}</p>
    </button>
  )
}


