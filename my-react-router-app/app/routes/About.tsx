import React from "react";
import type { Route } from "./+types/About";

export async function loader({ params }: Route.LoaderArgs) {
  const id = params.id;
  return {
    id
  };
};

export default function About({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      <h1>About</h1>
      <p>{loaderData.id}</p>
    </div>
  );
}
