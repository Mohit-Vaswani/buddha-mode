import MainHeader from "@/components/crafts/MainHeader"

export const metadata = {
  title: 'Reading',
  description: 'A simple yet powerful productivity tool.',
};

const page = () => {
  return (
    <section className="w-full h-screen p-10">
      <MainHeader title={'Reading'}/>
    </section>
  )
}

export default page