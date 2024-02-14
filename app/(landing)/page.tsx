import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const LandingPage = () => {
  return (
    <div>
      landing page (Unprotected)
      <div className="">
        <Link href="sing-in">
          <Button>Login</Button>
        </Link>
        <Link href="sign-up">
          <Button>Register</Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
