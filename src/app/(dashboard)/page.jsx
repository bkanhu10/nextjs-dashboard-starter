import GreetUser from "@/components/pages/Home/GreetUser";
import StatCard from "@/components/pages/Home/StatCard";
import { Eye, ShoppingBag, ShoppingCart, Users } from "lucide-react";

export const metadata = {
  title: "Dashboard | ",
};

const HomePage = () => {
  return (
    <>
      <GreetUser />
      <section className="w-full px-4 pt-2 md:px-20 lg:px-40">
        <div className="2xl:gap-7.5 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4">
          <StatCard
            number={456}
            title="Total Views"
            percentage={95}
            icon={<Eye className="h-12 w-12 p-1 text-brand-950" />}
          />
          <StatCard
            number={456}
            title="Total Product"
            percentage={95}
            icon={<ShoppingCart className="h-12 w-12 p-1 text-brand-950" />}
          />
          <StatCard
            number={456}
            title="Total Product"
            percentage={95}
            icon={<ShoppingBag className="h-12 w-12 p-1 text-brand-950" />}
          />
          <StatCard
            number={456}
            title="Total Users"
            percentage={95}
            icon={<Users className="h-12 w-12 p-1 text-brand-950" />}
          />
        </div>
      </section>
    </>
  );
};

export default HomePage;
