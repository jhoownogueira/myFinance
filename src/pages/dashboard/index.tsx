import { AuthContext } from "@/context/authContext";
import { MenuHeaderLayout } from "@/layouts/menuLayout"
import { ContainerSpinner } from "@/styles/spinner/styles";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

export default function Dashboard() {
  const router = useRouter();
  const { user, loading, setLoading, refreshUser } = useContext(AuthContext);

  useEffect(() => {
    refreshUser().then((isUserAuthenticated) => {
      if (isUserAuthenticated) {
        setLoading(false);
      } else {
        setLoading(true);
        router.push("/login");
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <>
        <ContainerSpinner>
          <span className="loader"></span>
        </ContainerSpinner>
      </>
    );
  }

  return (
    <>
    <h1>Dashboard</h1>
    <h1>Dashboard</h1>
    <h1>Dashboard</h1>
    <h1>Dashboard</h1>
    </>
  )
}

Dashboard.PageLayout = MenuHeaderLayout