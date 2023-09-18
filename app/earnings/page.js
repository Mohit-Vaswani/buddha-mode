import FullFeaturedCrudGrid from "@/components/Earnings/EarningTable";
import MainHeader from "@/components/crafts/MainHeader"

export const metadata = {
  title: 'Earnings',
  description: 'A simple yet powerful productivity tool.',
};

const page = () => {
  return (
    <section className="w-full h-screen p-10">
      <MainHeader title={'Earnings'}/>
    </section>
  )
}

export default page