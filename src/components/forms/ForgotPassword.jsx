"use client";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import { toast } from "@/hooks/use-toast";
import { adminForgotPassword } from "@/lib/api";
import { useState } from "react";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handlePasswordReset = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      const res = await adminForgotPassword({ email: email });
      console.log(res);
      if (res.status === 200) {
        toast({
          title: "Success",
          description: res?.notify,
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: error?.response?.data?.notify,
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <form onSubmit={handlePasswordReset}>
        <div className="mb-4 space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <Button type="submit" className="w-full" disabled={isLoading}>
          Reset password
        </Button>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;
