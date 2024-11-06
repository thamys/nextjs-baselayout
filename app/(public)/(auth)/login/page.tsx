"use client";
import React from "react";
import { Button, Flex, Typography } from "antd";
import { signIn, signOut, useSession } from "next-auth/react";
import GoogleIcon from "@images/google.svg";
import GithubIcon from "@images/github.svg";

export default function Page() {
  const { data: session } = useSession();

  return (
    <>
      <div>
        <Typography.Title level={1} className="text-center">
          Sign In
        </Typography.Title>

        <Typography.Title level={4} className="text-center">
          Sign in with your social account
        </Typography.Title>
      </div>
      {session && (
        <div className="flex flex-col justify-center">
          <Typography.Paragraph>
            You are signed in as {session?.user?.email}
          </Typography.Paragraph>
          <Button
            type="default"
            size="large"
            className="!p-4 !h-12"
            onClick={() => signOut()}
          >
            Sign out
          </Button>
        </div>
      )}
      {!session && (
        <Flex gap={16} className="justify-center">
          <Button
            type="default"
            size="large"
            className="!p-4 !h-12"
            onClick={() => signIn("google")}
          >
            <GoogleIcon className="!w-auto !h-10 mr-2" />
            Entrar usando Google
          </Button>
          <Button
            type="default"
            size="large"
            className="!p-4 !h-12"
            onClick={() => signIn("github")}
          >
            <GithubIcon className="!w-auto !h-6 mr-2" />
            Entrar usando Github
          </Button>
        </Flex>
      )}
    </>
  );
}

//http://localhost:3000/api/auth/callback/google flowName=GeneralOAuthFlow
