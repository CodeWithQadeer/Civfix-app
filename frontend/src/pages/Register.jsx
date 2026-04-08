import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerUser } from "../features/auth/authThunks";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { registerSchema } from "../validations/authSchema";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((s) => s.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(registerSchema) });

  const onSubmit = async (data) => {
    const res = await dispatch(registerUser(data));
    if (!res.error) navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-700 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="backdrop-blur-xl bg-white/60 dark:bg-gray-900/50 rounded-3xl shadow-2xl p-10 w-full max-w-md border border-gray-200/40 dark:border-gray-700/40"
      >
        <h2 className="text-3xl font-extrabold mb-6 text-center bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
          Create Your Account
        </h2>

        {error && (
          <p className="text-red-600 dark:text-red-400 text-center mb-4">{error}</p>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <input
              {...register("name")}
              placeholder="Full Name"
              className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-800/40 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              {...register("email")}
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-800/40 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <input
              {...register("password")}
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-800/40 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          <button
            disabled={loading}
            className="w-full py-3 rounded-xl font-semibold bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300 disabled:opacity-70"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <p className="text-center text-gray-600 dark:text-gray-400 mt-6 text-sm">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer font-medium"
          >
            Login
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;
