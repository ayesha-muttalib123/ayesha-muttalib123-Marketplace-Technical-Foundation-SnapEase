import HeroSection from "./home/page";

// pages/index.tsx
export default function Home() {
  // Example usage in your Next.js components

console.log('Sanity API Version:', process.env.NEXT_PUBLIC_SANITY_API_VERSION);
console.log('Sanity Project ID:', process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
console.log('Sanity Dataset:', process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET);
console.log('Sanity API Token:', process.env.SANITY_API_TOKEN);

  return (
   <HeroSection/>
  );
}
