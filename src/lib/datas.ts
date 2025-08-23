import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase"; // Assuming db is exported from a firebase config file
import { StaticImageData } from "next/image"; // Assuming you are using Next.js

// Defining the Shirt interface
export interface Shirt {
  id: string; // Changed id to string to match doc.id
  name: string;
  price: number;
  imageUrls: (string | StaticImageData)[];
  category: TShirtCategory;
  aiHint: string;
  description: string;
}

// Dummy TShirtCategory for demonstration
export type TShirtCategory = 'Graphic' | 'Minimalist' | 'Vintage';

// The corrected getShirts function
export async function getShirts(): Promise<Shirt[]> {
  try {
    const shirtsCollection = collection(db, "shirts");
    const shirtsSnapshot = await getDocs(shirtsCollection);

    const shirtsList = shirtsSnapshot.docs.map((doc) => {
      // Cast doc.data() to the Shirt type for correct typing
      const data = doc.data() as Omit<Shirt, "id">;
      return {
        id: doc.id,
        ...data,
      } as Shirt;
    });

    return shirtsList;
  } catch (error) {
    console.error("Error fetching shirts:", error);
    // Return an empty array or handle the error appropriately
    return [];
  }
}