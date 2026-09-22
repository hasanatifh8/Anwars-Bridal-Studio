import { MetadataRoute } from "next";
import { getAllPosts } from "@/utils/markdown";

export const dynamic = "force-static";

const siteUrl = "https://anwarbridalstudio.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts(["slug", "date"]);

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/services/`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/team/anwar/`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/team/afreen/`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/contact/`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/blog/`, changeFrequency: "weekly", priority: 0.7 },
  ];

  const postRoutes: MetadataRoute.Sitemap = posts.map((post: any) => ({
    url: `${siteUrl}/blog/${post.slug}/`,
    lastModified: post.date ? new Date(post.date) : undefined,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...postRoutes];
}
