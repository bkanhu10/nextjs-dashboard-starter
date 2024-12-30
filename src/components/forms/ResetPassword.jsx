"use client";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import { toast } from "@/hooks/use-toast";
import { adminResetPassword } from "@/lib/api";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ResetPasswordForm = ({ id, resetToken }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (password !== confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
      });
      setIsLoading(false);
      return;
    }
    try {
      const res = await adminResetPassword(id, resetToken, {
        password: password,
      });
      console.log(res);
      if (res.status === 200) {
        toast({
          title: "Success",
          description: res?.notify,
        });
        setTimeout(() => {
          router.replace("/login");
        }, 4000);
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
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-4 space-y-2">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <Button type="submit" className="w-full" disabled={isLoading}>
          Reset password
        </Button>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
