import Sign from "@/app/components/sign";

export default async function page({ params, searchParams}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const {sign} = searchParams!;

  return (
    <div className="flex justify-center items-center h-screen">
      <Sign isSignUp={!!sign}  />
    </div>
  )
}
