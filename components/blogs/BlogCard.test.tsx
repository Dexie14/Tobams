import { render, screen } from "@testing-library/react";
import type { BlogType } from "../api/queries/blogs/getBlogs";
import BlogCard from "./BlogCard";

import { describe, expect, it, vi } from "vitest";

const mockBlogData = {
  canonical_url: "",
  collection_id: null,
  comments_count: 0,
  cover_image: "",
  created_at: "2026-05-14T12:00:00Z",
  crossposted_at: null,
  description: "This is a sample description for the blog card component.",
  edited_at: "",
  id: 42,
  language: "en",
  last_comment_at: "",
  path: "",
  positive_reactions_count: 0,
  public_reactions_count: 0,
  published_at: "",
  published_timestamp: "",
  readable_publish_date: "",
  reading_time_minutes: 5,
  slug: "sample-blog",
  social_image: "",
  subforem_id: 0,
  tag_list: ["testing", "vitest"],
  tags: "testing, vitest",
  body_html: "",
  title: "Test Blog Title",
  type_of: "article",
  url: "",
} as BlogType;

describe("BlogCard", () => {
  it("renders blog title, description, date, and view post link", () => {
    render(<BlogCard blogData={mockBlogData} />);

    expect(screen.getByText(/Test Blog Title/i)).toBeInTheDocument();
    expect(
      screen.getByText(/This is a sample description/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/14th May, 2026/i)).toBeInTheDocument();
    expect(screen.getByText(/5 mins read/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /View Post/i })).toHaveAttribute(
      "href",
      "/blogs/42",
    );
  });

  it("truncates long title and description", () => {
    const longBlogData = {
      ...mockBlogData,
      title: "A".repeat(60),
      description: "B".repeat(80),
    } as BlogType;

    render(<BlogCard blogData={longBlogData} />);

    const expectedTitle = `${"A".repeat(50)}...`;
    const expectedDescription = `${"B".repeat(70)}...`;

    expect(screen.getByText(expectedTitle)).toBeInTheDocument();
    expect(screen.getByText(expectedDescription)).toBeInTheDocument();
  });
});
