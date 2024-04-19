import ForgotPassword from "@/app/components/forgotPassword";

export default async function page({ searchParams}: {
  searchParams?: Record<string, string>;
}) {
  const email = searchParams?.email || "";

  return (
    <div className="flex justify-center items-center h-screen">
      <ForgotPassword email={email} />
    </div>
  )
}
