import { useRouter } from "next/router";


export default function DetailPage() {
  const router = useRouter();

  return <Detail id={router.query.id} />;
}
