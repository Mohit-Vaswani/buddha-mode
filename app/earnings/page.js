import EditableTable from "@/components/Earnings/EditableTable";
import MainHeader from "@/components/crafts/MainHeader"

export const metadata = {
  title: 'Earnings',
  description: 'A simple yet powerful productivity tool.',
};

const page = () => {
  return (
    <section className="w-full h-screen p-10">
      <MainHeader title={'Earnings'}/>
      <EditableTable/>
    </section>
  )
}

export default page