import type { BlogPost } from "../blogTypes";
import { postsRatesAndAffordability } from "./rates-affordability";
import { postsLoanTypesGuides } from "./loan-types-guides-a";
import { postsGuidesRefi } from "./guides-refi";
import { postsStateAffordability } from "./state-affordability";
import { postsNewHighValue } from "./new-posts-a";
import { postsNewHighValueB } from "./new-posts-b";
import { postsPitfalls } from "./pitfalls";

/** All published posts (order does not matter; consumers sort by date). */
export const ALL_BLOG_POSTS: BlogPost[] = [
  ...postsRatesAndAffordability,
  ...postsLoanTypesGuides,
  ...postsGuidesRefi,
  ...postsStateAffordability,
  ...postsNewHighValue,
  ...postsNewHighValueB,
  ...postsPitfalls,
];
