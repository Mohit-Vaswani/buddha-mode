import MainHeader from "@/components/crafts/MainHeader"

export const metadata = {
  title: 'Workout',
  description: 'A simple yet powerful productivity tool.',
};

const page = () => {
  return (
    <section className="w-full h-screen p-10">
      <MainHeader title={'Workout'}/>
    </section>
  )
}

export default page