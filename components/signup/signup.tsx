"use client";
import React from "react";
import { signupSchema } from "./signup.scheme";
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
import { FromFields } from "./fromfield";
import { FormFieldType } from "./type";

const Signup = () => {
  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof signupSchema>) => {
      console.log(data);
      try{
        const response = await fetch("/api/auth/register",{method:"POST",body:JSON.stringify(data)});
        const result = await response.json();
         if(!response.ok){
            throw new Error(result.message);
         }
        }
        catch(e){
            console.log("error", e);
        }
  };

  return (
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

        <Button type="submit" className="self-center">Submit</Button>
      </form>
    </Form>
  );
};

export default Signup;
