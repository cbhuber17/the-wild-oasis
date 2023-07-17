import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      // IMPORTANT! Remove the user (actually all queries) from the ReactQuery cache when logging out.
      queryClient.removeQueries();
      navigate("/login", { replace: true }); // Replace prevents browser back button; erases history
    },
  });

  return { logout, isLoading };
}
