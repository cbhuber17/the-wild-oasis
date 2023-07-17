import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

// Get current user and store it in cache
export function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  // Determine boolean if authenticated here
  return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
}
