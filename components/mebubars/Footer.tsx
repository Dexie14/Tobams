import {
  InstaIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
  TwitterIcon,
} from "@/icons/svgComp/General";
import companyLogo from "@/public/images/companyLogo.svg";
import Image from "next/image";
import Link from "next/link";

const whatWeDo = [
  "Sustainability Services",
  "Strategy Planning and Implementation",
  "Tech Talent Solutions",
  "Training and Development",
  "IT Consulting Services",
  "Social Impact",
  "Talent Recruitment",
];

const Company = [
  "About",
  "Jobs",
  "Projects",
  "Our Founder",
  "Business Model",
  "The Team",
  "Contact Us",
  "Blog",
  "FAQs",
  "Testimonials",
];

const Solution = [
  "Tobams Group Academy",
  "Help a Tech Talent",
  "Campus Ambassadors Program",
  "Join Our Platform",
  "Pricing",
  "Book a Consultation",
  "Join Our Slack Community",
];

const Footer = () => {
  return (
    <footer className=" bg-[#11040E]">
      <section className="w-11/12 mx-auto text-white py-8">
        <main className="grid grid-cols-1 space-y-4 sm:space-y-0 sm:grid-cols-2 lg:grid-cols-[27.15%_22.50%_9.15%_18.30%] sm:gap-[90px]">
          <div>
            <Image src={companyLogo} alt="companyLogo" />
            <p className="text-[#F8F8F8] my-5  text-xs sm:text-sm">
              Tobams Group is an innovative consultancy firm reshaping the
              future of tech talent development in Africa, specializing in
              talent acquisition, internships, and skill development with a
              global perspective.
            </p>
            <div className="flex gap-5 items-center">
              <LinkedInIcon />
              <InstaIcon />
              <TwitterIcon />
            </div>
          </div>
          <div>
            <h4 className="mb-4 sm:text-lg font-bold">What We Do</h4>
            <div className="sm:text-sm text-xs space-y-3">
              {whatWeDo.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-4 sm:text-lg font-bold">Company</h4>
            <div className="sm:text-sm text-xs space-y-3">
              {Company.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-4 sm:text-lg font-bold">Solution</h4>
            <div className="sm:text-sm text-xs space-y-3">
              {Solution.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
        </main>
        <section className="bg-[#1F131C] px-6 py-3 rounded-[8px] my-5 flex lg:flex-row flex-col-reverse justify-between lg:items-center">
          <div className="lg:w-[75%] pb-5">
            <h4 className="sm:text-lg font-bold">Registered Offices</h4>
            <aside className="lg:flex justify-between items-center mt-2 sm:text-sm text-xs">
              <div>
                <p className="text-secondary">United Kingdom</p>
                <p>
                  07451196 (Registered by Company House) Vine Cottages, 215
                  North Street, Romford, Essex, United Kingdom, RM1 4QA
                </p>
              </div>
              <div className="lg:border-l border-[#DDD0DA] border-opacity-20 lg:pl-6 mt-8 lg:mt-8">
                <p className="text-secondary">Nigeria</p>
                <p>
                  RC 1048722 (Registered by the Corporate Affairs Commission) 4,
                  Muaz Close, Angwar-Rimi
                </p>
              </div>
            </aside>
          </div>
          <div className="lg:w-[25%] lg:border-l border-[#DDD0DA] border-opacity-20 pb-5 lg:pl-6">
            <h4 className="sm:text-lg font-bold">Contact Information</h4>
            <aside className="sm:text-sm text-xs mt-2">
              <div className="flex gap-4 items-center">
                <MailIcon />
                <p>theteam@tobamsgroup.com</p>
              </div>
              <div className="flex gap-4 items-center mt-3">
                <PhoneIcon />
                <p>+447886600748</p>
              </div>
            </aside>
          </div>
        </section>
        <hr className="border-[#DDD0DA] border-opacity-20 h-[1px]" />
        <div className="flex md:flex-row flex-col-reverse justify-between items-center py-4 sm:text-sm text-xs">
          <p>
            Copyright ⓒ Tobams Group, {new Date().getFullYear()}. All rights
            reserved.
          </p>
          <div className="flex sm:flex-row flex-col-reverse sm:gap-10 gap-5 mb-5 md:mt-0 sm:w-fit w-[80%] items-center ">
            <Link href={"/"} className="underline text-[#F8F8F8]">
              Terms and Conditions
            </Link>
            <div className="flex gap-10">
            <Link href={"/"} className="underline text-[#F8F8F8]">
              Privacy Policy
            </Link>
            <Link href={"/"} className="underline text-[#F8F8F8]">
              Cookies Policy
            </Link>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
