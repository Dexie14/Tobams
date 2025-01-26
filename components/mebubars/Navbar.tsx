"use client";

import Image from "next/image";
import companyLogo from "@/public/images/companyLogo.svg";
import { Button } from "../ui/button";
import { DropdownIcon, MenuIcon, UserIcon } from "@/icons/svgComp/NavbarIcons";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const showNav = () => setOpen(!open);

  return (
    <header className="bg-white ">
      <div className="border-b border-[#DDD0DA]">
        <section className="py-4 flex justify-between items-center w-11/12 mx-auto ">
          <Image src={companyLogo} alt="companyLogo" />
          <div className="sm:flex hidden items-center gap-6">
            <Button className="text-lg font-semibold bg-primary rounded-[4px]">
              <UserIcon /> Account <DropdownIcon />
            </Button>
            <Button className="bg-secondary text-lg font-semibold rounded-[4px]">
              Take Assessment
            </Button>
          </div>
          <MenuIcon className="sm:hidden" onClick={showNav} />
        </section>
        {open && (
          <div
            className="flex z-[500] flex-col justify-center mx-auto left-0 right-0 items-center w-[100%] absolute top-[15%] bg-[#151515] shadow-sm  p-8 "
            style={{
              transform: open ? "translateY(0)" : "translateY(100%)",
              transition: "transform 0.95s ease-in-out",
            }}
          >
            <nav className="flex flex-col gap-5 text-white justify-between items-center w-full mb-[50px]">
              <p className="flex items-center font-semibold gap-2 border-b border-primary text-primary">
                About <DropdownIcon />
              </p>
              <p className="flex items-center gap-2">
                What We Do <DropdownIcon />
              </p>
              <p className="flex items-center gap-2">
                Jobs <DropdownIcon />
              </p>
              <p>Projects</p>
              <p>TG Academy</p>
              <p>Strategic Partnership</p>
              <p>Pricing</p>
              <p>Book a Consultation</p>
              <Button className="text-lg font-semibold bg-primary rounded-[4px]">
                <UserIcon /> Account <DropdownIcon />
              </Button>
              <Button className="bg-secondary text-lg font-semibold rounded-[4px]">
                Take Assessment
              </Button>
            </nav>
          </div>
        )}
      </div>
      <section className="sm:flex hidden flex-wrap items-center gap-8 py-3 w-[75%] mx-auto text-nowrap">
        <p className="flex items-center font-semibold gap-2 border-b border-primary text-primary">
          About <DropdownIcon />
        </p>
        <p className="flex items-center gap-2">
          What We Do <DropdownIcon />
        </p>
        <p className="flex items-center gap-2">
          Jobs <DropdownIcon />
        </p>
        <p>Projects</p>
        <p>TG Academy</p>
        <p>Strategic Partnership</p>
        <p>Pricing</p>
        <p>Book a Consultation</p>
      </section>
    </header>
  );
};

export default Navbar;
