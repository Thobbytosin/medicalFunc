import {
  CloseOutlinedIcon,
  DoneOutlinedIcon,
  VisibilityOffOutlinedIcon,
  VisibilityOutlinedIcon,
} from "../../../app/icons/icons";
import React, { FC, useState } from "react";

type Props = {
  setMode: (value: string) => void;
};

const Login: FC<Props> = ({ setMode }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState<any>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section className=" w-full p-8">
      <h2 className=" text-text-primary text-xl md:text-2xl">
        Sign in to your account
      </h2>

      <form className=" ">
        {/* email */}
        <div className="md:mt-8 mt-4 w-full ">
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
        <div className=" md:mt-8 mt-4 relative">
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
      <p className=" text-center text-text-primary font-normal">
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
