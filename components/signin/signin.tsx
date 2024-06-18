"use client";
import React from "react";
import { SigninScheme } from "./signin.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FromFields } from "./formFields";
import { FormFieldType } from "./types";
import { signIn } from "next-auth/react";
import { AlertDestructive } from "@/components/ui/alert";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const form = useForm<z.infer<typeof SigninScheme>>({
    resolver: zodResolver(SigninScheme),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [error, setError] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);

  const router = useRouter();

  const onSubmit = async (data: z.infer<typeof SigninScheme>) => {
    try {
      setLoading(true);
      const result = await signIn("credentials", {
        ...data,
        redirect: false,
      });

      if (result?.error && result?.error === "CredentialsSignin") {
        setError("Invalid email or password");
        return;
      }
      router.push("/");
    } catch (e) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {FromFields.map((input: FormFieldType) => (
            <FormField
              key={input.name}
              control={form.control}
              name={input.name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{input.label}</FormLabel>
                  <FormControl>
                    <Input placeholder={input.placeholder} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <Button type="submit" className="self-center" disabled={loading}>
            Submit
          </Button>
        </form>
      </Form>
      {error && (
        <AlertDestructive error="error" description={error}></AlertDestructive>
      )}
    </>
  );
};

export default SignIn;
