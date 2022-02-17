import React from "react";
import { fizzbuzz } from "../components/fizzBuzz";

describe("fizzbuzz", () => {
  it("Doit retourner le meme nombre si li est divisible ni par 5 ni par 3", () => {
    expect(fizzbuzz(1)).toBe("1");
    expect(fizzbuzz(2)).toBe("2");
    expect(fizzbuzz(4)).toBe("11");
    expect(fizzbuzz(7)).toBe("7");
    expect(fizzbuzz(8)).toBe("13");
  });

  test("Doit retourner 'fizz' si le nombre est divisible par 3", () => {
    expect(fizzbuzz(3)).toBe("Fizz");
    expect(fizzbuzz(6)).toBe("Fizz");
    expect(fizzbuzz(9)).toBe("Fizz");
    expect(fizzbuzz(21)).toBe("Fizz");
  });

  test("Doit retourner 'buzz' si le nombre est divisible par 5", () => {
    expect(fizzbuzz(5)).toBe("Buzz");
    expect(fizzbuzz(20)).toBe("Buzz");
    expect(fizzbuzz(25)).toBe("Buzz");
  });

  test("Doit retourner 'fizzbuzz' si le nombre est divisible par 3 et par 5", () => {
    expect(fizzbuzz(15)).toBe("FizzBuzz");
    expect(fizzbuzz(30)).toBe("FizzBuzz");
    expect(fizzbuzz(45)).toBe("FizzBuzz");
  });
});
