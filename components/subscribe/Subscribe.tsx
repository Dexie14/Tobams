import InputField from "../input/InputField";
import { Button } from "../ui/button";

const Subscribe = () => {
  return (
    <div className="bg-fadedPrimary w-11/12 mx-auto rounded-[8px] sm:p-12 p-6">
      <h3 className="font-bold text-xl">Sign Up for Our Newsletter</h3>
      <p className="py-4">Subscribe to receive our latest company updates</p>
      <div className="sm:flex justify-between items-center gap-5">
        <div className="w-full">
          <InputField
            name="email"
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <Button className="w-[129px] bg-primary rounded-[4px] h-[50px] mt-5 sm:mt-0">
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default Subscribe;
