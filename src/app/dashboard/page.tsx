import { getServerSession } from "next-auth";
import { Container } from "../../components/container";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/");
  }

  return (
    <Container>
      <h1>Página dashboard</h1>
    </Container>
  );
}
