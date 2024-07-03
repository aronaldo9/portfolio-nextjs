import AvatarPortfolio from "@/components/avatar-portfolio";
import CircleImage from "@/components/circle-image";
import ContainerPage from "@/components/container";
import PortfolioBox from "@/components/portfolio-box";
import Separator from "@/components/separator";
import TransitionPage from "@/components/transition-page";
import { dataPortfolio } from "@/data";

const PortfolioPage = () => {
  return (
    <ContainerPage>
      <TransitionPage />
      <div className="flex flex-col justify-center h-full">
        <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
          Mis últimos{" "}
          <span className="text-secondary font-bold">trabajos realizados</span>
        </h1>
        <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 sm:grid-cols-2 md:grid-cols-4">
          {dataPortfolio.map((data) => (
            <PortfolioBox key={data.id} data={data} />
          ))}
        </div>
      </div>
      {/* Separator with responsive height */}
      <Separator height={320} className="hidden md:block" />
      <Separator height={40} className="block md:hidden" />
      {/* Avatar and Circle Image */}
      <div className="relative mt-10 md:mt-0">
        <AvatarPortfolio />
        <CircleImage />
      </div>
    </ContainerPage>
  );
};

export default PortfolioPage;
