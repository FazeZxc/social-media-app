import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { brandName } from "@/store/brand";
import { UserAtom } from "@/store/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export const SignUp = ({ setIsUserNameEntered }) => {
  const setUser = useSetRecoilState(UserAtom);
  const brand = useRecoilValue(brandName);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsUserNameEntered(true);
    setUser((prev) => {
      return { ...prev, username: values.username };
    });
  }

  return (
    <>
      <section>
        <header>
          <div>{brand.name}</div>
        </header>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel> What should we call you? </FormLabel>
                  <FormControl>
                    <Input placeholder="Username" {...field}></Input>
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <Button type="submit">Next</Button>
          </form>
        </Form>
      </section>
    </>
  );
};
