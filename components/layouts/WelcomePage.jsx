import Image from "next/image"

const Main = () => {
  return (
    <main className="mainComponent w-9/12 flex gap-8 flex-col justify-center items-center border-l border-gray-700">
      <Image src="/assets/Buddha.svg" alt="Buddha logo" width={170} height={170} />
      <h1 className="text-5xl"> Happy to see you here 👋 </h1>
      <p className="text-2xl">What are your goals for today?</p>
    </main>
  )
}

export default Main