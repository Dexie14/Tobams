import { render, screen, fireEvent } from "@testing-library/react";
import SearchInputComp from "./SearchInputComp";
import { describe, expect, it, vi } from "vitest";

describe("SearchInputComp", () => {
  it("renders placeholder and value", () => {
    const handleChange = vi.fn();

    render(
      <SearchInputComp
        placeholder="Search articles"
        value="query"
        onChange={handleChange}
      />,
    );

    const input = screen.getByPlaceholderText(/search articles/i);
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("query");
  });

  it("calls onChange and onClick handlers", () => {
    const handleChange = vi.fn();
    const handleClick = vi.fn();

    render(<SearchInputComp onChange={handleChange} onClick={handleClick} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "search" } });
    fireEvent.click(input);

    expect(handleChange).toHaveBeenCalled();
    expect(handleClick).toHaveBeenCalled();
  });
});
