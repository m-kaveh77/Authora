import { useState } from "react";
import { useFormik } from "formik";

import { Link } from "react-router";

import registerSchema from "../validations/register";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const form = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
      rememeberMe: false,
    },
    onSubmit: (values, { setSubmitting }) => {
      console.log("Register form data: ", values);

      setTimeout(() => {
        setSubmitting(false);
      }, 2000);
    },

    validationSchema: registerSchema,
  });

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F9F5F6] px-4 py-10">
      {/* Background Shapes */}
      <div className="absolute -left-32 -top-32 h-96 w-96 animate-float rounded-full bg-[#F2BED1]/40 blur-3xl" />
      <div className="absolute -bottom-40 -right-20 h-112.5 w-112.5 animate-float rounded-full bg-[#FDCEDF]/50 blur-3xl [animation-delay:2s]" />

      <div className="absolute left-[12%] top-[15%] hidden h-20 w-20 rotate-12 animate-float rounded-3xl border border-white/80 bg-[#FDCEDF]/30 backdrop-blur-md lg:block" />

      <div className="absolute bottom-[15%] right-[12%] hidden h-16 w-16 animate-float rounded-full border border-white bg-[#F2BED1]/40 backdrop-blur-md lg:block" />

      {/* Register Card */}
      <div className="relative z-10 my-auto w-full max-w-112.5 animate-fade-in rounded-4xl border border-white/80 bg-white/75 p-7 shadow-[0_25px_80px_-20px_rgba(190,120,150,0.22)] backdrop-blur-2xl sm:p-10">
        {/* Logo */}
        <div className="mb-7 flex flex-col items-center">
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
          <h2 className="text-2xl font-bold text-[#553747]">Create Account</h2>

          <p className="mt-2 text-sm text-[#A78B99]">
            Join us and start your journey today.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={form.handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-[#765666]">
              Full Name
            </label>

            <input
              type="text"
              name="fullname"
              value={form.values.fullname}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              placeholder="John Doe"
              className="w-full rounded-2xl border border-[#F2BED1]/60 bg-[#F9F5F6]/80 px-4 py-3.5 text-sm text-[#553747] outline-none transition-all duration-300 placeholder:text-[#C7AAB6] focus:border-[#E99CB9] focus:bg-white focus:ring-4 focus:ring-[#FDCEDF]/30"
            />
            {form.errors.fullname &&
              form.touched.fullname &&
              form.errors.fullname && (
                <span className="text-red-500">* {form.errors.fullname}</span>
              )}
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-[#765666]">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={form.values.email}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              placeholder="example@email.com"
              className="w-full rounded-2xl border border-[#F2BED1]/60 bg-[#F9F5F6]/80 px-4 py-3.5 text-sm text-[#553747] outline-none transition-all duration-300 placeholder:text-[#C7AAB6] focus:border-[#E99CB9] focus:bg-white focus:ring-4 focus:ring-[#FDCEDF]/30"
            />
            {form.errors.email && form.touched.email && form.errors.email && (
              <span className="text-red-500">* {form.errors.email}</span>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm font-medium text-[#765666]">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.values.password}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                placeholder="Create a password"
                className="w-full rounded-2xl border border-[#F2BED1]/60 bg-[#F9F5F6]/80 px-4 py-3.5 pr-16 text-sm text-[#553747] outline-none transition-all duration-300 placeholder:text-[#C7AAB6] focus:border-[#E99CB9] focus:bg-white focus:ring-4 focus:ring-[#FDCEDF]/30"
              />
              {form.errors.password &&
                form.touched.password &&
                form.errors.password && (
                  <span className="text-red-500">* {form.errors.password}</span>
                )}

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-[#C99AAD] hover:text-[#B76D8C]"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="mb-2 block text-sm font-medium text-[#765666]">
              Confirm Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              value={form.values.confirmPassword}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              placeholder="Repeat your password"
              className="w-full rounded-2xl border border-[#F2BED1]/60 bg-[#F9F5F6]/80 px-4 py-3.5 text-sm text-[#553747] outline-none transition-all duration-300 placeholder:text-[#C7AAB6] focus:border-[#E99CB9] focus:bg-white focus:ring-4 focus:ring-[#FDCEDF]/30"
            />
            {form.errors.confirmPassword &&
              form.touched.confirmPassword &&
              form.errors.confirmPassword && (
                <span className="text-red-500">
                  * {form.errors.confirmPassword}
                </span>
              )}
          </div>

          {/* Terms */}
          <label className="flex cursor-pointer items-start gap-2 text-xs leading-5 text-[#967989]">
            <input
              type="checkbox"
              name="terms"
              checked={form.values.rememeberMe}
              onChange={form.handleSubmit}
              className="mt-1 h-4 w-4 accent-[#E99CB9]"
            />

            <span>I agree to the Terms of Service and Privacy Policy.</span>
          </label>

          {/* Submit */}
          <button
            type="submit"
            disabled={form.isSubmitting || Object.keys(form.errors).length > 0}
            className={`group flex w-full items-center justify-center gap-2 rounded-2xl py-4 font-semibold transition-all duration-300 ${
              form.isSubmitting
                ? "cursor-not-allowed bg-[#F8E8EE] text-[#C99AAD] shadow-none"
                : Object.keys(form.errors).length > 0
                  ? "cursor-not-allowed border border-red-200 bg-red-50 text-red-400 shadow-none"
                  : "cursor-pointer bg-linear-to-r from-[#EAA8C0] to-[#E99CB9] text-white shadow-lg shadow-[#F2BED1]/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#F2BED1]/70 active:scale-[0.98]"
            }`}
          >
            {form.isSubmitting ? (
              <>
                <span className="size-5 animate-spin rounded-full border-2 border-[#C99AAD]/30 border-t-[#C99AAD]" />
                Loading...
              </>
            ) : Object.keys(form.errors).length > 0 ? (
              <>
                Fix the errors first
                <span>!</span>
              </>
            ) : (
              <>
                Sign Up
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </>
            )}
          </button>
        </form>

        {/* Login Link */}
        <div className="mt-7 border-t border-[#F2BED1]/40 pt-6 text-center">
          <p className="text-sm text-[#967989]">
            Already have an account?
            <Link
              to="/login"
              className="ml-1 font-bold text-[#CB829F] transition-colors hover:text-[#A95778]"
            >
              Sign In
            </Link>
          </p>
        </div>

        <p className="mt-6 text-center text-xs text-[#C3A7B3]">
          © 2026 Authora. All rights reserved.
        </p>
      </div>
    </main>
  );
};

export default Register;
