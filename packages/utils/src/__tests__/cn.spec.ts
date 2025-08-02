import { describe, it, expect } from "@jest/globals";
import { cn } from "../cn";

describe("cn utility function", () => {
  it("should merge class names correctly", () => {
    const result = cn("bg-red-500", "text-white", "p-4");
    expect(result).toBe("bg-red-500 text-white p-4");
  });
});
