import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import InputField from "./InputField";

describe("InputField", () => {
  it("renders label, placeholder, and value", () => {
    const handleChange = vi.fn();

    render(
      <InputField
        label="Email"
        name="email"
        placeholder="Enter your email"
        value="test@example.com"
        onChange={handleChange}
      />,
    );

    const input = screen.getByLabelText(/email/i);
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("test@example.com");
    expect(
      screen.getByPlaceholderText(/enter your email/i),
    ).toBeInTheDocument();
  });

  it("calls onChange when typing and shows error text", () => {
    const handleChange = vi.fn();

    render(
      <InputField
        label="Name"
        name="name"
        placeholder="Full name"
        value="John"
        onChange={handleChange}
        error="Required field"
      />,
    );

    const input = screen.getByLabelText(/name/i);
    fireEvent.change(input, { target: { value: "John Doe" } });
    expect(handleChange).toHaveBeenCalled();
    expect(screen.getByText(/required field/i)).toBeInTheDocument();
  });
});
