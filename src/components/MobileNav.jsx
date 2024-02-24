import React, { Fragment } from "react";
import clsx from "clsx";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import MobileNavLink from "@/components/MobileNavLink";

function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          "origin-center transition",
          open && "scale-90 opacity-0"
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          "origin-center transition",
          !open && "scale-90 opacity-0"
        )}
      />
    </svg>
  );
}
/**旋转90度 横线交叉处理，这里一张图做角度变化 */

const MobileNav = () => {
  return (
    <Popover className="z-10 flex items-center justify-center w-8 h-8">
      {({ open }) => {
        // 这里用{}就等return，不然直接（），不然返回不了
        return (
          <>
            {/* 1，给一个Mobile的按钮 */}
            <Popover.Button className="focus:outline-none ">
              <MobileNavIcon open={open} />
            </Popover.Button>
            {/* 2. 给一个遮罩层 */}
            <Transition.Child
              as={Fragment}
              enter="duration-150 ease-out "
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="duration-150 ease-in"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
              {/* 300/50 的50是透明度, 这里的Overlay其实就是以前的遮罩层 */}
            </Transition.Child>
            {/* 3. 真正的penal */}
            <Transition.Child
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              length="duration-150 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {/* scale 放大缩小 */}
              <Popover.Panel
                as="div"
                className="absolute inset-x-0 flex flex-col p-4 mt-4 text-lg tracking-tight origin-top bg-white shadow-xl top-full rounded-2xl text-slate-900 ring-1 ring-slate-900/5"
              >
                <MobileNavLink href="#features">Features</MobileNavLink>
                <MobileNavLink href="#testimonials">Testimonials</MobileNavLink>
                <MobileNavLink href="#pricing">Pricing</MobileNavLink>
                <hr className="m-2 border-slate-300/40" />
                <MobileNavLink href="/login">Sign In</MobileNavLink>
              </Popover.Panel>
            </Transition.Child>
          </>
        );
      }}
    </Popover>
  );
};

export default MobileNav;
