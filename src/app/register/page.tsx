import { Suspense } from "react";
import { RegisterPageClient } from "./RegisterPageClient";

export const dynamic = "force-dynamic";

export default function RegisterPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[85vh] items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-50 p-4">
          <p className="text-sm text-gray-500">Loading registration…</p>
        </div>
      }
    >
      <RegisterPageClient />
    </Suspense>
  );
}
