import React, { FC } from "react";
import Ratings from "../global/Ratings";
import Image from "next/image";

type Props = {
  doctor: any;
};

const DoctorCard: FC<Props> = ({ doctor }) => {
  return (
    <div className=" w-[200px] h-[280px] bg-white shadow shadow-black/50 rounded-xl overflow-clip cursor-pointer transition-all duration-700 hover:scale-110">
      {/* image */}
      <div className=" w-full h-[180px] bg-gray-200 overflow-clip">
        <Image
          src={doctor.thumbnail.url}
          alt="doctor_image"
          className="object-cover w-full"
        />
      </div>

      {/* details */}
      <div className="mt-2 px-3">
        {/* available indicator */}
        <div className="w-fit flex justify-center items-center  gap-2 ">
          <div className=" w-[8px] h-[8px] rounded-full bg-green-600 " />
          <h4 className=" text-xs text-green-600">Available</h4>
        </div>

        <h4 className=" text-text-primary text-sm font-medium">
          {doctor.name}
        </h4>
        <p className=" text-text-light-gray mt-1 text-xs font-light">
          {doctor.specialization}
        </p>
        <div className=" mt-1 text-lg ">
          <Ratings color=" text-amber-400" rating={doctor.ratings} />
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
