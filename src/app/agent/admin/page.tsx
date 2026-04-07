"use client";

import { Suspense, useEffect } from "react";
import { useRouter } from "next/navigation";

function AdminPageContent() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/admin/login");
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <p className="text-gray-500">Redirecting to admin…</p>
    </div>
  );
}

export default function AgentAdminPage() {
  return (
    <Suspense fallback={<div>Loading admin page...</div>}>
      <AdminPageContent />
    </Suspense>
  );
}
