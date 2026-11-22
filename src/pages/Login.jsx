import { useState } from "react";

import { Link } from "react-router";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F9F5F6] px-4 py-10">
      {/* Background Shapes */}
      <div className="absolute -left-32 -top-32 h-96 w-96 animate-float rounded-full bg-[#F2BED1]/40 blur-3xl" />
      <div className="absolute -bottom-40 -right-20 h-112.5 w-112.5 animate-float rounded-full bg-[#FDCEDF]/50 blur-3xl [animation-delay:2s]" />

      <div className="absolute left-[12%] top-[15%] hidden h-20 w-20 rotate-12 animate-float rounded-3xl border border-white/80 bg-[#FDCEDF]/30 backdrop-blur-md lg:block" />

      <div className="absolute bottom-[15%] right-[12%] hidden h-16 w-16 animate-float rounded-full border border-white bg-[#F2BED1]/40 backdrop-blur-md lg:block" />

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-112.5 animate-fade-in rounded-4xl border border-white/80 bg-white/75 p-7 shadow-[0_25px_80px_-20px_rgba(190,120,150,0.22)] backdrop-blur-2xl sm:p-10">
        {/* Logo */}
        <div className="mb-9 flex flex-col items-center">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-[#FDCEDF] to-[#F2BED1] text-2xl text-white shadow-lg shadow-[#F2BED1]/50 transition-transform duration-300 hover:rotate-12 hover:scale-110">
            ✦
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-[#553747]">
            Authora<span className="text-[#E99CB9]">.</span>
          </h1>

          <p className="mt-2 text-sm text-[#A78B99]">
            Your identity, your world.
          </p>
        </div>

        {/* Heading */}
        <div className="mb-7 text-center">
          <h2 className="text-2xl font-bold text-[#553747]">Welcome Back!</h2>

          <p className="mt-2 text-sm text-[#A78B99]">
            Enter your details to access your account.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-[#765666]">
              Email Address
            </label>

            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-[#C99AAD]">
                ✉
              </span>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com"
                required
                className="w-full rounded-2xl border border-[#F2BED1]/60 bg-[#F9F5F6]/80 py-3.5 pl-12 pr-4 text-sm text-[#553747] outline-none transition-all duration-300 placeholder:text-[#C7AAB6] focus:border-[#E99CB9] focus:bg-white focus:ring-4 focus:ring-[#FDCEDF]/30"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm font-medium text-[#765666]">
              Password
            </label>

            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-[#C99AAD]">
                ♙
              </span>

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
                className="w-full rounded-2xl border border-[#F2BED1]/60 bg-[#F9F5F6]/80 py-3.5 pl-12 pr-12 text-sm text-[#553747] outline-none transition-all duration-300 placeholder:text-[#C7AAB6] focus:border-[#E99CB9] focus:bg-white focus:ring-4 focus:ring-[#FDCEDF]/30"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-[#C99AAD] transition-colors hover:text-[#B76D8C]"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex cursor-pointer items-center gap-2 text-[#967989]">
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
                className="h-4 w-4 accent-[#E99CB9]"
              />
              Remember me
            </label>

            <a
              href="#forgot-password"
              className="font-medium text-[#CB829F] transition-colors hover:text-[#A95778]"
            >
              Forgot Password?
            </a>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-[#EAA8C0] to-[#E99CB9] py-4 font-semibold text-white shadow-lg shadow-[#F2BED1]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#F2BED1]/70 active:scale-[0.98] cursor-pointer"
          >
            Sign In
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </form>

        {/* Register Link */}
        <div className="mt-8 border-t border-[#F2BED1]/40 pt-6 text-center">
          <p className="text-sm text-[#967989]">
            Don't have an account?
            <Link
              to="/register"
              className="ml-1 font-bold text-[#CB829F] transition-colors hover:text-[#A95778]"
            >
              Sign Up
            </Link>
          </p>
        </div>

        <p className="mt-7 text-center text-xs text-[#C3A7B3]">
          © 2026 Authora. All rights reserved.
        </p>
      </div>
    </main>
  );
};

export default Login;
