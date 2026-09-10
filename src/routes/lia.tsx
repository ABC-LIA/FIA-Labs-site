import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/lia")({
  beforeLoad: () => {
    throw redirect({ to: "/work/$slug", params: { slug: "lia" }, statusCode: 308 });
  },
});
