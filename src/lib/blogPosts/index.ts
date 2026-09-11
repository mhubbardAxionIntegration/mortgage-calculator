import type { BlogPost } from "../blogTypes";
import { postsRatesAndAffordability } from "./rates-affordability";
import { postsLoanTypesGuides } from "./loan-types-guides-a";
import { postsGuidesRefi } from "./guides-refi";
import { postsNewHighValue } from "./new-posts-a";
import { postsPitfalls } from "./pitfalls";
import { postsCluster } from "./cluster-posts";

/** All published posts (order does not matter; consumers sort by date). */
export const ALL_BLOG_POSTS: BlogPost[] = [
  ...postsRatesAndAffordability,
  ...postsLoanTypesGuides,
  ...postsGuidesRefi,
  ...postsNewHighValue,
  ...postsPitfalls,
  ...postsCluster,
];
