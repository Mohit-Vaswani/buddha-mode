import AllFeatures from "@/components/Productivity/AllFeatures"
import MainHeader from "@/components/crafts/MainHeader"

export const metadata = {
  title: 'Productivity',
  description: 'A simple yet powerful productivity tool.',
};

const page = () => {
  return (
    <section className="w-full h-screen p-10">
      <MainHeader title={'Productivity'}/>
      <AllFeatures/>
    </section>
  )
}

export default page