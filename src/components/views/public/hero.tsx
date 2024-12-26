import { Button } from "@/components/ui/button";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { brandName } from "@/store/brand";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { HeroNavbar } from "./heroNavbar";
import { HeroFooter } from "./heroFooter";

export const Hero = () => {
  const navigate = useNavigate();
  const brand = useRecoilValue(brandName);
  return (
    <>
      <HeroHighlight>
        <div className="h-screen flex flex-col content-around">
          <div>
            <HeroNavbar />
          </div>
          <div className="h-[70rem] flex flex-col items-center justify-center">
            <div>
              <h1 className="text-white scroll-m-20 text-2xl font-semibold tracking-tight">
                {brand.name}
              </h1>
            </div>
            <h2 className="text-white scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Join today.
            </h2>
            <br />
            <Button onClick={() => navigate("/auth/sign-in")}>
              Create an account
            </Button>
            <Button variant="link">Log in with Google</Button>
          </div>
          <div>
            <HeroFooter />
          </div>
        </div>
      </HeroHighlight>
    </>
  );
};
