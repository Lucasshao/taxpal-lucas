import React from "react";
import Image from "next/image";
import backgroundImageDefault from "@/images/background-auth.jpg";

const LoginRegisterLayout = ({
  children,
  backgroundImage = backgroundImageDefault, //这里就是往里传图片，如果没有就用default当作你的图片，如果图片变了就能换掉
}) => {
  return (
    //min-h-full这里关键，不然顶不起来；然后中屏幕px-2，大屏幕px-0
    <div className="relative flex justify-center min-h-full md:px-2 lg:px-0">
      <div className="relative z-10 flex flex-col px-4 py-10 bg-white shadow-2xl flx-1 sm:justify-center md:flex-none md:px-28">
        <main className="w-full max-w-md mx-auto sm:px-4 md:w-96 md:max-w-sm md:px-0">
          {children}
        </main>
      </div>

      <div className="hidden sm:contents lg:relative lg:block lg:flex-1 ">
        <Image
          className="absolute inset-0 object-cover w-full h-full"
          src={backgroundImage}
          alt="background image"
          unoptimized={true}
        />
        {/* inset-0 上下左右都是0 高和宽占满, unoptimized就是不要让图片优化糊掉 */}
      </div>
    </div>
  );
};

export default LoginRegisterLayout;
