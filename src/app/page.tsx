import FeaturedPost from "@/components/FeaturedPost";
import RecentPosts from "@/components/RecentPost";

export default function Home() {
  return (
    <div className="min-h-screen">
      <FeaturedPost />
      <RecentPosts />
    </div>
  );
}
