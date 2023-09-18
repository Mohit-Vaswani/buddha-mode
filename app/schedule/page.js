import MainHeader from "@/components/crafts/MainHeader"

export const metadata = {
  title: 'Schedule',
  description: 'A simple yet powerful productivity tool.',
};

const page = () => {
  return (
    <section className="w-full h-screen p-10">
      <MainHeader title={'Schedule'}/>
    </section>
  )
}

export default page