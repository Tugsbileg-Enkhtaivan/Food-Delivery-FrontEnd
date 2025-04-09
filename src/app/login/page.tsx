import React from "react";
import { Button } from "../../components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Input } from "../../components/ui/input";
import { CldImage } from "next-cloudinary";

const Login = () => {
  return (
    <div className="grid grid-cols-3 w-full h-screen">
      <div className="w-[416px] h-[288px] space-y-6 col-span-1">
        <Button variant="outline">
          <ChevronLeft />
        </Button>
        <div>
          <h1 className="text-[24px] font-semibold">Create your account</h1>
          <h2 className="text-[16px] font-normal text-[#71717A]">
            Sign up to explore your favorite dishes.
          </h2>
        </div>
        <Input placeholder="Enter your email address" className="" />
        <Button className="w-full">Lets Go</Button>
        <div className="flex justify-center">
          <Button variant="link" className="text-[#71717A] text-[16px]">
            Already have an account?
          </Button>
          <Button variant="link" className="text-[#2563EB] text-[16px]">
            Log in
          </Button>
        </div>
      </div>
      <div className="col-span-2">
        <CldImage
          width="960"
          height="600"
          src="https://res.cloudinary.com/duuodnpdn/image/upload/v1744163343/kai-pilger-tL92LY152Sk-unsplash_1_m2nbf8.png"
          sizes="100vw"
          alt="Description of my image"
        />
      </div>
    </div>
  );
};

export default Login;
