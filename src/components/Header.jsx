import React from "react";
import Container from "@/components/Container";
import Logo from "@/components/Logo";
import Link from "next/link";
import Button from "@/components/Button";
import NavLink from "@/components/NavLink";
import MobileNav from "@/components/MobileNav";

const Header = () => {
  return (
    <div className="py-10">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12 ">
            <Link href="#" aria-label="Home">
              <Logo className="w-auto h-10"></Logo>
            </Link>

            <div className="hidden md:flex md:gap-x-6">
              <div className="hidden md:flex md:gap-x-6">
                <NavLink href="#features">Features</NavLink>
                {/* 这里features前面的黄色是vscode 的bug */}
                <NavLink href="#testimonials">Testimonials</NavLink>
                <NavLink href="#pricing">Pricing</NavLink>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block ">
              <NavLink href="/login">Sign In</NavLink>
            </div>
            <Button href="/register" color="blue">
              <span>
                Get Started
                <span className="hidden lg:inline ">today</span>
              </span>
            </Button>
            <div className="-mr-1 md:hidden">
              {/* -mr 小形态时候超出 */}
              <MobileNav />
            </div>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Header;
