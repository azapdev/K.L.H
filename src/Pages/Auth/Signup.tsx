import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import z from "zod";
import API from "../../inceptors";
import { routes } from "../../Routes/routes";

// ==============================================================
const schema = z
  .object({
    username: z.string().min(1, "Please Fill the Filled"),
    email: z.email("invailed Email"),
    password: z.string().min(6, "Weak Password"),
    confirmpass: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmpass, {
    message: " Password Is not the same",
    path: ["confirmpass"],
  });

type Userinfo = z.infer<typeof schema>;

// ==============================================================
const Signup = () => {
  const navigate = useNavigate();
  // ==============================================================
  // HOOK FORM
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Userinfo>({ resolver: zodResolver(schema) });

  //==============================================================
  // SEND DATA
  const mutation = useMutation({
    mutationFn: (data: Userinfo) => API.post("/users", data),
    onSuccess: (data) => {
      console.log("Data WAs Sent", data);
      navigate(routes.LOGIN);
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <section
        className="bg-slate-900 h-screen relative flex justify-center items-center flex-col"
        style={{ backgroundImage: "url('/img/bg1.jpg')" }}
      >
        <div className="absolute w-full h-full bg-rich-black/40 top-0 left-0 z-0 "></div>

        {/* Titel */}
        <div className="relative">
          <h1 className="text-center md:text-4xl text-2xl py-5 font-bold text-white capitalize">
            Hello, Welcome To Your Site
          </h1>
          <p className="text-center md:text-2xl font-bold text-white capitalize">
            Sign UP To have More News
          </p>
        </div>

        {/*Form  */}
        <motion.div
          className=" relative max-w-sm bg-rich-black/80 py-12  rounded-2xl m-auto mx-4 px-8 grid items-center z-10"
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <form
            action=""
            onSubmit={handleSubmit((info) => mutation.mutate(info))}
          >
            {/* USerName */}
            <div>
              <label htmlFor="name" className="text-white text-bold text-lg">
                Name
              </label>
              <input
                id="name"
                type="text"
                {...register("username")}
                className="outline-3 text-white h-8 rounded-2xl px-2 w-full my-2"
              />
              <span className="text-red-500">{errors.username?.message}</span>
            </div>

            {/* EMAIL */}
            <div>
              <label htmlFor="email" className="text-white text-bold text-lg">
                {" "}
                E-mail
              </label>
              <input
                id="email"
                type="text"
                {...register("email")}
                className="outline-3 text-white h-8 rounded-2xl px-2 w-full my-2"
              />
              <span className="text-red-500">{errors.email?.message}</span>
            </div>

            {/* PASSWORD */}
            <div>
              <label
                htmlFor="password"
                className="text-white text-bold text-lg"
              >
                Password
              </label>
              <input
                id="password"
                type="text"
                {...register("password")}
                className="outline-3 text-white h-8 rounded-2xl px-2 w-full my-2"
              />
              <span className="text-red-500">{errors.password?.message}</span>
            </div>

            {/* CONFRIMPASSWORD */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="text-white text-bold text-lg"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="text"
                {...register("confirmpass")}
                className="outline-3 text-white h-8 rounded-2xl px-2 w-full my-2"
              />
              <span className="text-red-500">
                {errors.confirmpass?.message}
              </span>
            </div>

            {/* Submit Button */}
            <div className="flex items-center flex-col">
              <button
                type="submit"
                className="bg-shiny-red text-white px-4 py-2 rounded-3xl cursor-pointer w-50 mx-auto my-4"
              >
                Singup
              </button>
            </div>
            <div className="flex justify-center items-center gap-1">
              <span className="text-white">You Have Account?</span>
              <Link
                to={routes.LOGIN}
                className="text-shiny-red hover:underline cursor-pointer"
              >
                Login
              </Link>
            </div>
          </form>
        </motion.div>
      </section>
    </>
  );
};

export default Signup;
