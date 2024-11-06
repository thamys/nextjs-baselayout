'use server';
import { getProviders } from "next-auth/react";

export async function getAuthProviders() {
  const providers = await getProviders();
  return providers;
}