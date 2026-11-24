"use client";
import { useSyncExternalStore } from "react";

const noop = () => () => {};

/**
 * Inline <head> script that runs before first paint, from the server HTML only.
 * React warns when it creates a <script> on the client (it would never execute), which happens if
 * the root layout re-mounts in the browser (e.g. hot reload). During SSR and hydration this renders
 * the script; on any client-only mount it renders nothing. The script has already run by then.
 */
export const HeadScript = ({ code }: { code: string }) => {
  const fromServer = useSyncExternalStore(noop, () => false, () => true);
  return fromServer ? <script dangerouslySetInnerHTML={{ __html: code }} /> : null;
};
