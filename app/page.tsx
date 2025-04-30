import { Button } from "@/components/ui/button";
import { SignInButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <p>Hello Board!</p>
      <SignInButton mode="modal">
        <Button className="rounded group" size="sm">
          Login
        </Button>
      </SignInButton>
      <UserButton afterSwitchSessionUrl="/" />
    </div>
  );
}
