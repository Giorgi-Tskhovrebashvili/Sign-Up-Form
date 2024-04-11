import { IntroType } from "../../types";

const Intro = ({ title, info }: IntroType) => {
  return (
    <div className="w-[327px] h-[226px] flex flex-col gap-[16px] text-white text-center xl:w-[525px] xl:h-[220px] xl:gap-[20px] xl:text-start">
      <h2 className="text-[28px] font-bold leading-[36px] tracking-[-0.29px] xl:text-[50px] xl:leading-[55px] xl:tracking-[-0.52px]">
        {title}
      </h2>
      <p className="text-[16px] font-medium leading-[26px]">{info}</p>
    </div>
  );
};

export default Intro;
