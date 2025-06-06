import {
  FormField,
  FormItem,
  FormDescription,
  FormControl,
  FormMessage,
} from "./ui/form";
import { Textarea } from "./ui/textarea";

import type { UseFormReturn } from "react-hook-form";

export default function BioForm({ form }: { form: UseFormReturn }) {
  return (
    <div className="border-t-1 border-gray-200 px-16 py-8">
      <h3 className="text-[22px] font-bold mb-3">Short Bio</h3>
      <FormField
        control={form.control}
        name="shortbio"
        render={({ field }) => (
          <FormItem>
            <FormDescription className="mb-2">
              Be concise - The harsh is that hiring managers only spent an
              average of 6 seconds on each resume.
            </FormDescription>
            <FormControl>
              <Textarea
                placeholder="Tell us a little bit about you."
                className="resize-none h-48"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
