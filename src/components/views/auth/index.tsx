import { Timeline } from "@/components/ui/timeline";
import { SignUp } from "./signup";
import { SignUpDetails } from "./signup.details";
import { SignUpPassword } from "./signup.password";

export const SignUpPage = () => {
  const data = [
    {
      title: "Username",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Choose a name that is unique to you.
          </p>
          <SignUp />
        </div>
      ),
    },
    {
      title: "Tell us about yourself",
      content: (
        <div>
          <SignUpDetails />
        </div>
      ),
    },
    {
      title: "Password",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Choose a strong password.
          </p>
          <div>
            <SignUpPassword />
          </div>
        </div>
      ),
    },
  ];
  return (
    <>
      <Timeline data={data} />
    </>
  );
};
