import { NotificationType } from "../../types";

const Notification = ({ time, price }: NotificationType) => {
  return (
    <div className="w-[327px] text-center rounded-[10px] text-white px-[67px] py-[17px] bg-[#5E54A4] xl:w-[540px]">
      <h4 className="text-[15px] font-bold leading-[26px] tracking-[0.27px]">
        {time}
        <small className="text-[15px] font-normal leading-[26px] tracking-[0.27px]">
          {price}
        </small>
      </h4>
    </div>
  );
};

export default Notification;
