import { Button } from "@/components/ui/button";
import { OrganizationSwitcher , UserButton } from "@clerk/nextjs";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
      <OrganizationSwitcher />
      <UserButton />
    </div>
  );
}
