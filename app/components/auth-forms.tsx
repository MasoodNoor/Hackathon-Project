"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/app/components/ui/button"
import { Checkbox } from "@/app/components/ui/checkbox"
import { Input } from "@/app/components/ui/input"
import { Label } from "@/app/components/ui/label"
import Link from "next/link"

const signInSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
})

const signUpSchema = z
  .object({
    firstName: z.string().min(2, { message: "First name must be at least 2 characters" }),
    lastName: z.string().min(2, { message: "Last name must be at least 2 characters" }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters" }),
    confirmPassword: z.string(),
    newsletter: z.boolean().default(false),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  })

type SignInFormValues = z.infer<typeof signInSchema>
type SignUpFormValues = z.infer<typeof signUpSchema>

export function AuthForms() {
  const {
    register: registerSignIn,
    handleSubmit: handleSubmitSignIn,
    formState: { errors: errorsSignIn },
  } = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
  })

  const {
    register: registerSignUp,
    handleSubmit: handleSubmitSignUp,
    formState: { errors: errorsSignUp },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
  })

  const onSignIn = (data: SignInFormValues) => {
    console.log(data)
  }

  const onSignUp = (data: SignUpFormValues) => {
    console.log(data)
  }

  return (
    <div className="">
      <div className="bg-authparallax bg-cover h-[25vh]">
       
      </div>
      <div className="font-plusJakarta text-3xl sm:text-5xl p-8 flex justify-center items-center">
        <h1>Welcome</h1>
      </div>
      <div className="min-h-screen flex flex-col lg:flex-row  justify-center gap-8 p-4 ">
      {/* Sign In Form */}
      <div className="w-full max-w-md p-8 border rounded-lg">
        <h2 className="text-2xl text-center mb-6 font-plusJakarta">Sign In</h2>
        <form onSubmit={handleSubmitSignIn(onSignIn)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="signin-email">Email</Label>
            <Input
              id="signin-email"
              type="email"
              placeholder="Your email"
              {...registerSignIn("email")}
              className="w-full px-3 py-2 border rounded-full"
            />
            {errorsSignIn.email && <p className="text-sm text-red-500">{errorsSignIn.email.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="signin-password">Password</Label>
            <Input
              id="signin-password"
              type="password"
              placeholder="Your Password"
              {...registerSignIn("password")}
              className="w-full px-3 py-2 border rounded-full"
            />
            {errorsSignIn.password && <p className="text-sm text-red-500">{errorsSignIn.password.message}</p>}
          </div>
          <Button type="submit" className="w-full rounded-full bg-black text-white hover:bg-black/90">
            Sign In
          </Button>
          <div className="text-center">
            <Link href="/forgot-password" className="text-sm text-gray-600 hover:underline">
              Forgot your password?
            </Link>
          </div>
        </form>
      </div>

      {/* Sign Up Form */}
      <div className="w-full max-w-md p-8 border rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmitSignUp(onSignUp)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="signup-firstname">First Name</Label>
            <Input
              id="signup-firstname"
              placeholder="Your Name"
              {...registerSignUp("firstName")}
              className="w-full px-3 py-2 border rounded-full"
            />
            {errorsSignUp.firstName && <p className="text-sm text-red-500">{errorsSignUp.firstName.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="signup-lastname">Last Name</Label>
            <Input
              id="signup-lastname"
              placeholder="Your last name"
              {...registerSignUp("lastName")}
              className="w-full px-3 py-2 border rounded-full"
            />
            {errorsSignUp.lastName && <p className="text-sm text-red-500">{errorsSignUp.lastName.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="signup-email">Email</Label>
            <Input
              id="signup-email"
              type="email"
              placeholder="Your email"
              {...registerSignUp("email")}
              className="w-full px-3 py-2 border rounded-full"
            />
            {errorsSignUp.email && <p className="text-sm text-red-500">{errorsSignUp.email.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="signup-password">Password</Label>
            <Input
              id="signup-password"
              type="password"
              placeholder="Your Password"
              {...registerSignUp("password")}
              className="w-full px-3 py-2 border rounded-full"
            />
            {errorsSignUp.password && <p className="text-sm text-red-500">{errorsSignUp.password.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="signup-confirm-password">Confirm your Password</Label>
            <Input
              id="signup-confirm-password"
              type="password"
              placeholder="Confirm Password"
              {...registerSignUp("confirmPassword")}
              className="w-full px-3 py-2 border rounded-full"
            />
            {errorsSignUp.confirmPassword && (
              <p className="text-sm text-red-500">{errorsSignUp.confirmPassword.message}</p>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="newsletter" {...registerSignUp("newsletter")} />
            <Label htmlFor="newsletter">Subscribe to email newsletter</Label>
          </div>
          <Button type="submit" className="w-full rounded-full bg-black text-white hover:bg-black/90">
            Sign Up
          </Button>
        </form>
      </div>
    </div>
    </div>
  )
}

