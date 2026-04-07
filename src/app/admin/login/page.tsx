import { Suspense } from "react";
import { AdminLoginPageClient } from "./AdminLoginPageClient";

export const dynamic = "force-dynamic";

export default function AdminLoginPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-gray-950 p-4">
          <p className="text-sm text-gray-500">Loading…</p>
        </div>
      }
    >
      <AdminLoginPageClient />
    </Suspense>
  );
}
