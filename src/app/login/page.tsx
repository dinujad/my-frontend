import { Suspense } from "react";
import { LoginPageClient } from "./LoginPageClient";

export const dynamic = "force-dynamic";

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[80vh] items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-50 p-4">
          <p className="text-sm text-gray-500">Loading sign in…</p>
        </div>
      }
    >
      <LoginPageClient />
    </Suspense>
  );
}
