import React, { FC } from "react";
import Login from "../auth/Login";
import Signup from "../auth/Signup";
import doctors from "../../../public/assets/doctors.png";
import Image from "next/image";

type Props = {
  mode: string;
  setOpenModal: (value: boolean) => void;
  setMode: (value: string) => void;
};

const Modal: FC<Props> = ({ mode, setOpenModal, setMode }) => {
  return (
    <section className=" bg-yellow-400 ">
      <div
        onClick={() => setOpenModal(false)}
        className=" bg-black/50 fixed left-0 top-0 w-screen min-h-[300vh]  scrollbar-hide"
      />
      <div className="  bg-white absolute md:fixed top-[20px] md:top-[50px] h-fit md:h-[550px] left-[5%] w-[90%] xl:left-[15%] xl:w-[70%] md:left-[7.5%] md:max-w-[85%] z-20 rounded-3xl md:flex overflow-hidden">
        <div className=" md:w-[300px] xl:w-[548px] h-[10px] w-full md:h-full bg-primary rounded-tl-3xl rounded-bl-3xl relative overflow-clip">
          <div className=" absolute bottom-0 left-0 w-full h-[200px] bg-linear-to-b from-transparent to-primary/40 z-10" />
          <Image
            src={doctors}
            alt="doctors_image"
            className="lg:block hidden absolute -bottom-2 -right-1 object-cover  "
          />
        </div>

        <div className=" w-full md:min-h-fit  ">
          {mode === "signup" && <Signup setMode={setMode} />}
          {mode === "login" && <Login setMode={setMode} />}
        </div>
      </div>
    </section>
  );
};

export default Modal;
