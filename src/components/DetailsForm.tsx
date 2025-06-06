import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import type { FormData } from "../types/FormData";
import type { UseFormReturn } from "react-hook-form";

type onFormChange = (field: keyof FormData, value: string) => void;

export default function DetailsForm({
  form,
  formData,
  onFormChange,
}: {
  form: UseFormReturn;
  formData: FormData;
  onFormChange: onFormChange;
}) {
  return (
    <div className="border-t-1 border-gray-200 px-16 py-8">
      <h3 className="text-[22px] font-bold mb-7">Your details</h3>
      <FormField
        control={form.control}
        name="jobtitle"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Job title</FormLabel>
            <FormControl>
              <Input
                placeholder="Front-end developer"
                {...field}
                value={formData.subtitle}
                onChange={(e) => onFormChange("subtitle", e.target.value)}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="grid grid-cols-2 grid-rows-2 gap-7 mt-7">
        <FormField
          control={form.control}
          name="firstname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Joe"
                  {...field}
                  value={formData.firstname}
                  onChange={(e) => onFormChange("firstname", e.target.value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Smith"
                  {...field}
                  value={formData.lastname}
                  onChange={(e) => onFormChange("lastname", e.target.value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="adress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input
                  placeholder="1000 Brussels, rue de machin, 36"
                  {...field}
                  value={formData.address}
                  onChange={(e) => onFormChange("address", e.target.value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="joe.smith@gmail.com"
                  {...field}
                  value={formData.email}
                  onChange={(e) => onFormChange("email", e.target.value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
