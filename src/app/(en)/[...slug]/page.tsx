import { notFound } from "next/navigation";

/** Any unknown URL renders the styled 404 from not-found.tsx (with a real 404 status). */
export default function CatchAll() {
  notFound();
}
