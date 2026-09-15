import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Md. Habibur Rahman | Urology & Andrology" },
      {
        name: "description",
        content:
          "Dr. Md. Habibur Rahman provides specialist kidney, infertility, azoospermia and pediatric urology care in Dhaka, Cumilla and online.",
      },
      { property: "og:title", content: "Dr. Md. Habibur Rahman | Urology & Andrology" },
      { property: "og:description", content: "Senior urology and andrology specialist in Dhaka, Cumilla and online." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  beforeLoad: () => {
    throw redirect({ href: "/index.html" });
  },
  component: () => null,
});
