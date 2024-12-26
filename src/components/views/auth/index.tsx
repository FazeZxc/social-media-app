import { useState } from "react";
import { SignUp } from "./signup";
import { SignUpDetails } from "./signup.details";
import { SignUpPassword } from "./signup.password";

export const SignUpPage = () => {
  const [isUserNameEntered, setIsUserNameEntered] = useState(false);
  const [isDetailsEntered, setIsDetailsEnterd] = useState(false);
  const [isPasswordEntered, setIsPasswordEntered] = useState(false);

  return (
    <>
      <div className="h-screen flex justify-center items-center">
        {!isUserNameEntered ? (
          <SignUp setIsUserNameEntered={setIsUserNameEntered} />
        ) : null}
        {!isDetailsEntered && isUserNameEntered ? (
          <SignUpDetails setIsDetailsEnterd={setIsDetailsEnterd} />
        ) : null}
        {!isPasswordEntered && isDetailsEntered && isUserNameEntered ? (
          <SignUpPassword setIsPasswordEntered={setIsPasswordEntered} />
        ) : null}
      </div>
    </>
  );
};
