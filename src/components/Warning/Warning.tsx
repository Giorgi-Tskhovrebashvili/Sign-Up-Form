import { WarningType } from "../../types";

const Warning = ({ text, link, linkPath }: WarningType) => {
  return (
    <div className="w-[249px] text-center xl:w-[369px]">
      <p className="text-[#BAB7D4] text-[11px] font-medium leading-[21px]">
        {text}
        <a
          className="text-[11px] leading-[21px] font-bold text-[#FF7979]"
          href={link}
        >
          {linkPath}
        </a>
      </p>
    </div>
  );
};

export default Warning;
