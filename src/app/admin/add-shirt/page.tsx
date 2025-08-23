"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Header } from "@/components/header";
import { useRouter } from "next/navigation";
import { db, storage } from "@/lib/firebase";
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters."),
  category: z.enum(["Graphic", "Minimalist", "Vintage"]),
  price: z.coerce.number().min(0, "Price must be a positive number."),
  description: z.string().min(10, "Description must be at least 10 characters."),
  imageUrl1: z.any().refine(file => file?.length == 1, "Image 1 is required."),
  imageUrl2: z.any(),
  availability: z.enum(["In Stock", "Sold Out"]),
});

export default function AddShirtPage() {
  const { toast } = useToast();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      category: "Graphic",
      price: 29.99,
      description: "",
      availability: "In Stock",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true);
      const imageUrls: string[] = [];

      // Upload image 1
      const file1 = values.imageUrl1[0] as File;
      const storageRef1 = ref(storage, `shirts/${Date.now()}_${file1.name}`);
      await uploadBytes(storageRef1, file1);
      const downloadUrl1 = await getDownloadURL(storageRef1);
      imageUrls.push(downloadUrl1);

      // Upload image 2 if it exists
      if (values.imageUrl2 && values.imageUrl2.length > 0) {
        const file2 = values.imageUrl2[0] as File;
        const storageRef2 = ref(storage, `shirts/${Date.now()}_${file2.name}`);
        await uploadBytes(storageRef2, file2);
        const downloadUrl2 = await getDownloadURL(storageRef2);
        imageUrls.push(downloadUrl2);
      }

      // Add shirt data to Firestore
      await addDoc(collection(db, "shirts"), {
        name: values.name,
        category: values.category,
        price: values.price,
        description: values.description,
        availability: values.availability,
        imageUrls: imageUrls,
      });

      toast({
        title: "Success!",
        description: `The "${values.name}" shirt has been added.`,
      });

    } catch (error) {
      console.error("Error adding shirt: ", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again.",
      });
    } finally {
        setIsSubmitting(false);
    }
  }

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12 md:py-16">
        <div className="mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-extrabold tracking-tight font-headline sm:text-5xl">
              Add a New T-Shirt
            </h1>
            <p className="mt-4 text-lg text-foreground/80">
              Fill out the form below to add a new product to the collection.
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Shirt Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Cyber Wave Tee" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Graphic">Graphic</SelectItem>
                          <SelectItem value="Minimalist">Minimalist</SelectItem>
                          <SelectItem value="Vintage">Vintage</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price</FormLabel>
                      <FormControl>
                        <Input type="number" step="0.01" placeholder="29.99" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="A detailed description of the shirt..."
                        className="resize-y"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormField
                    control={form.control}
                    name="imageUrl1"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Image 1</FormLabel>
                        <FormControl>
                           <Input type="file" accept="image/*" onChange={(e) => field.onChange(e.target.files)} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="imageUrl2"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Image 2 (Optional)</FormLabel>
                        <FormControl>
                           <Input type="file" accept="image/*" onChange={(e) => field.onChange(e.target.files)} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
              </div>

              <FormField
                  control={form.control}
                  name="availability"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Availability</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select availability" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="In Stock">In Stock</SelectItem>
                          <SelectItem value="Sold Out">Sold Out</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Adding..." : "Add Shirt"}
              </Button>
            </form>
          </Form>
        </div>
      </main>
    </>
  );
}
