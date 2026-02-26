import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useContext, useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { routes } from "../../Routes/routes";
import { AuthContext } from "../../hooks/Context";
import API from "../../inceptors";

//=============================================================
const schema = z.object({
  email: z.string().email("invalid Email"),
  password: z.string().min(6, "Short Password"),
});
type UserData = z.infer<typeof schema>;
//=============================================================

//=============================================================

const Login = () => {
  const navigate = useNavigate();

  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("AuthContext must be used within AuthProvider");
  }
  const { Login, Logout } = authContext;
  // USEFORM
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<UserData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  //=============================================================

  // USE MUTATION
  const CheakDAta = async (info: UserData) => {
    const res = await API.get("/users");
    const users = res.data;
    const user = users.find((u: UserData) => u.email == info.email);
    if (!user) {
      setError("email", { message: "UsernotFound" });
      throw new Error("Uaer Not Found");
    }
    if (user.password !== info.password) {
      setError("password", { message: "Password is incorrect" });
      throw new Error("Password is incorrect");
    } else {
      return user;
    }
  };
  //=============================================================

  // MUTATION
  const mutation = useMutation({
    mutationFn: CheakDAta,
    onSuccess: (data) => {
      console.log("You WEre login");
      Login(data.password);
      navigate("/");
    },
    onError: (error) => {
      console.log(error.message);
      Logout();
    },
  });
  //=============================================================

  const sendData: SubmitHandler<UserData> = (data) => {
    mutation.mutate(data);
  };
  //=============================================================
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  return (
    <>
      <section
        className="md:h-[calc(100vh-89px)] h-[calc(100vh-71.1px)] flex justify-center items-center relative"
        style={{ backgroundImage: "url('/img/bg1.jpg')" }}
      >
        <div className="absolute w-full h-full bg-rich-black/40 top-0 left-0 "></div>
        <motion.div
          className="max-w-sm bg-rich-black/80 h-96 rounded-2xl m-auto mx-4 px-8 grid items-center z-10"
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <form
            action=""
            onSubmit={handleSubmit(sendData)}
            className="flex flex-col gap-4 "
          >
            {/* USERNAME */}
            <div>
              <label htmlFor="email" className="text-white font-bold text-xl">
                {" "}
                Email
              </label>
              <input
                id="email"
                type="text"
                {...register("email")}
                className="outline-3 text-white h-8 rounded-2xl px-2 w-full my-2"
              />
              <span className="text-red-500 text-xs ">
                {errors.email?.message}
              </span>
            </div>
            {/* PASSWORD */}
            <div>
              <label
                htmlFor="password"
                className="text-white font-bold text-xl"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                {...register("password")}
                className="outline-3 text-white h-8 rounded-2xl px-2 my-2 w-full"
                autoComplete="off"
              />
              <span className="text-red-500 text-xs">
                {errors.password?.message}
              </span>
            </div>

            {/* Submit Button */}
            <div className="flex items-center flex-col">
              <button
                type="submit"
                className="bg-shiny-red text-white px-4 py-2 rounded-3xl cursor-pointer w-50 mx-auto my-4"
              >
                Login
              </button>
            </div>
            <div className="flex justify-center items-center gap-1">
              <span className="text-white">You dont Have Account?</span>
              <Link
                to={routes.SIGNUP}
                className="text-shiny-red hover:underline cursor-pointer"
              >
                Singup
              </Link>
            </div>
          </form>
        </motion.div>
      </section>
    </>
  );
};

export default Login;
