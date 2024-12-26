import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { brandName } from "@/store/brand";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { z } from "zod";
import { UserAtom } from "@/store/user";
import { FaCircleArrowLeft } from "react-icons/fa6";
const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  displayName: z.string().min(2, {
    message: "",
  }),
});

export const SignUpDetails = ({ setIsDetailsEntered }) => {
  const setUser = useSetRecoilState(UserAtom);
  const brand = useRecoilValue(brandName);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      displayName: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsDetailsEntered(true);
    setUser((prev) => {
      return { ...prev, email: values.email, displayName: values.displayName };
    });
  }
  return (
    <>
      <section>
        <header className="flex justify-between items-center">
          <div>{brand.name}</div>
        </header>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field}></Input>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <FormField
              control={form.control}
              name="displayName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full name</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field}></Input>
                  </FormControl>
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
