import { PostItem } from "@/components/PostItem";
import { posts } from "../../data";
import "./globals.css"

export default function Home() {


  return (
    <PostItem posts={posts}/>
    
  );
}
