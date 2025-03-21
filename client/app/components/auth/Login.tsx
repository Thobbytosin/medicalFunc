import { useMutateData } from "@/app/hooks/useApi";
import {
  VisibilityOffOutlinedIcon,
  VisibilityOutlinedIcon,
} from "../../../app/icons/icons";
import React, { FC, FormEvent, useState } from "react";
import { toast } from "sonner";
import Loader from "../global/Loader";

type Props = {
  setMode: (value: string) => void;
  setOpenModal: (value: boolean) => void;
};

const Login: FC<Props> = ({ setMode, setOpenModal }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState<any>({});
  const { mutate: loginUser, isPending } = useMutateData({
    method: "POST",
    mutationKey: "loginUser",
    url: "/login",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();

    loginUser(form, {
      onSuccess: async (data: any) => {
        toast.success("Welcome to Trust HealthCare!", {
          description: data.message,
          duration: 4000,
        });

        setOpenModal(false);
      },
      onError: (error: any) => {
        toast.error(`Oops! ${error.response.data.message}`, {
          description: "Something went wrong. Try again",
          duration: 4000,
        });
      },
    });
  };

  return (
    <section className=" w-full p-8 relative">
      {isPending && <Loader />}
      <h2 className=" text-text-primary text-lg md:text-2xl font-medium">
        Welcome Back
      </h2>
      <p className=" text-xs md:text-sm text-grayey font-light mb-8 md:mb-0">
        Sign in to access your account
      </p>

      <form onSubmit={handleLogin}>
        {/* email */}
        <div className="md:mt-8 mt-6 w-full ">
          <label
            htmlFor="email"
            className="block text-sm text-text-primary font-medium mb-1"
          >
            Email Address
          </label>
          <input
            aria-label="email input"
            id="email"
            name="email"
            type="email"
            placeholder="Email Address"
            required
            onChange={handleChange}
            className="bg-[#F8F7F7] border border-[#DCD7D7] p-2 rounded-lg text-sm outline-none text-[#9A9A9A] w-full"
          />
        </div>

        {/* password */}
        <div className=" md:mt-8 mt-6 relative">
          <label
            htmlFor="firstName"
            className="block text-sm text-text-primary font-medium mb-1"
          >
            Password
          </label>
          <input
            aria-label="password input"
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            required
            onChange={handleChange}
            className="bg-[#F8F7F7] border border-[#DCD7D7] p-2 w-full rounded-lg text-sm outline-none text-[#9A9A9A]"
          />
          <>
            {showPassword ? (
              <button
                type="button"
                className=" cursor-pointer absolute right-2 bottom-2 text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                <VisibilityOutlinedIcon color="inherit" fontSize="small" />
              </button>
            ) : (
              <button
                type="button"
                className=" cursor-pointer absolute right-2 bottom-2 text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                <VisibilityOffOutlinedIcon color="inherit" fontSize="small" />
              </button>
            )}
          </>
        </div>

        {/* button */}
        <button
          type="submit"
          className="my-6 mx-auto flex justify-self-center w-[144px] py-2 bg-primary text-white text-center rounded-lg cursor-pointer justify-center text-sm transition-all duration-700 hover:bg-transparent hover:text-primary hover:border hover:border-primary "
        >
          Sign In
        </button>
      </form>
      <p className=" text-center text-text-primary font-normal md:text-base text-sm">
        Not Registered?{" "}
        <span
          title="Log In"
          aria-label="Log In"
          className=" cursor-pointer text-primary font-medium transition-all duration-700 hover:underline"
          onClick={() => setMode("signup")}
        >
          Sign Up
        </span>
      </p>
    </section>
  );
};

export default Login;
