import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/pricing-philosophy")({
  beforeLoad: () => {
    throw redirect({ to: "/company", statusCode: 308 });
  },
});
