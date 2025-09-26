/* src/components/AuthGoogle.jsx */
import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { ShieldAlert } from "lucide-react";

export default function AuthGoogle() {
  const { setUserFromIdToken } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#061226] via-[#08263a] to-[#05282e] p-6">
      <Card className="w-full max-w-md bg-[rgba(7,10,16,0.55)] backdrop-blur-sm border border-[rgba(255,255,255,0.04)] shadow-[0_30px_60px_-15px_rgba(3,12,20,0.8)] transform transition-transform duration-400 hover:-translate-y-1">
        <CardHeader className="text-center pt-8 px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Welcome to Dashit</h1>
          <p className="text-sm text-slate-300 mt-2">Sign in to access your Shopify analytics dashboard</p>

          <div className="mx-auto mt-4 h-1 w-28 rounded-full bg-gradient-to-r from-[rgba(34,197,94,0.95)] via-[rgba(16,185,129,0.65)] to-[rgba(6,95,70,0.25)] shadow-[0_6px_18px_rgba(16,185,129,0.12)]" />
        </CardHeader>

        <CardContent className="py-8 px-6">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 bg-[rgba(34,197,94,0.03)] border border-[rgba(34,197,94,0.06)] p-3 rounded-md">
              <ShieldAlert className="h-5 w-5 text-[rgba(34,197,94,0.85)]" />
              <div className="text-left">
                <div className="text-sm font-medium text-[rgba(34,197,94,0.95)]">Secure Authentication</div>
                <div className="text-xs text-slate-300">Your data is protected with enterprise-grade security</div>
              </div>
            </div>

            {/* Slimmed Google button: narrower container + medium size */}
            <div className="flex justify-center">
              <div className="w-full max-w-[260px]"> {/* <-- limits width so the button isn't huge */}
                <GoogleLogin
                  onSuccess={(cred) => {
                    const idToken = cred.credential!;
                    setUserFromIdToken(idToken);
                    navigate("/dashboard", { replace: true });
                  }}
                  onError={() => {
                    console.error("Google login failed");
                  }}
                  useOneTap
                  theme="filled_blue"
                  size="medium" /* reduced size */
                  text="signin_with"
                  shape="pill"
                  aria-label="Sign in with Google"
                />
              </div>
            </div>

            <div className="text-center text-xs text-slate-400">
              Use your Google account to sign in — no passwords, just good vibes.
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col items-center gap-2 py-4">
          <div className="text-xs text-slate-400 text-center">By signing in, you agree to our Terms of Service and Privacy Policy</div>
          <div className="text-xs text-slate-500 text-center">© {new Date().getFullYear()} Dashit. All rights reserved.</div>
        </CardFooter>
      </Card>
    </div>
  );
}
