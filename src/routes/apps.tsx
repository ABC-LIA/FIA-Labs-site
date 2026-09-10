import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/apps")({
  beforeLoad: () => {
    throw redirect({ to: "/work", statusCode: 308 });
  },
});
