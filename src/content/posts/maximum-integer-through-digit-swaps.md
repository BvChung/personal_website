---
title: "Backtracking | Solving Backtracking HW Digit Swaps"
publishedDate: 2023-12-25
publishedTime: "4:55 PM"
description: "Backtracking algorithm."
slug: "maximum-integer-through-digit-swaps"
---

Consider a positive number, denoted as M. For instance, if M = 385, by swapping the first digit (3) with the second digit (8), we obtain a larger number M' = 835. Further, by swapping the second and third digits of M', we get M" = 853, which is the largest number that can be formed using the digits of M.

A) Provide a Backtracking Algorithm that for given two positive numbers, M and K, determine the highest possible number that can be obtained by performing at most K swap operations on the digits of M.

B) Provide a Backtracking Algorithm that for a given positive integer M, identify the minimum number of swaps, represented as K required to produce the maximum possible number using the digits of M.

Input Format

M = input integer

K = max number of swaps

---

# Approach

We can solve determining the highest possible number that can be obtained by performing at most K swap by using backtracking. We can use a helper function to swap the digits of the inputted integer using a list and recursively call the helper function keeping track of the current index of the digit we want to swap from left to right and the number of swaps performed. In our recursive helper function the base case is when the number of swaps performed `K` reaches 0 or when the current index of the digit we want to swap is out of bounds. At each level of our recursive call we find the largest digit that is greater than the current index's digit. If the largest digit is not the current index's digit than we want to swap it therefore decrementing k. We then iterate through the list starting from the current index + 1, swap the digits if `digit_list[i] = largest_digit` found, check if the combined integer is larger than the current max integer and then recursively call the helper function with the current index incremented by 1. We then backtrack and swap the digits back to their original position. We repeat this process until we reach the base case.

<br/>

Solving the minimum number of swaps required to produce the maximum possible number using the digits of `M` is similar to the previous problem. We can use a helper function to swap the digits of the inputted integer using a list and recursively call the helper function keeping track of the current index of the digit we want to swap from left to right and the number of swaps performed. In our recursive helper function the base case is when the current index of the digit we want to swap is out of bounds or when the current list of digits is equal to the sorted list of digits in descending order representing the largest integer possible. When we reach the base case we return the number of swaps performed. At each level of our recursive call we find the largest digit that is greater than the current index's digit. If the largest digit is not the current index's digit than we want to swap it therefore incrementing the number of swaps performed. We then iterate through the list starting from the current index, swap the digits if `digit_list[i] = largest_digit` found, and then the min of the current result and the recursive call. We then backtrack and swap the digits back to their original position. We repeat this process until we reach the base case and return the minimum number of swaps.

```python
def max_int_with_k_swaps(digit_list: list[int], K: int, starting_index: int, current_max: list[int]):
    if K == 0 or starting_index >= len(digit_list):
        return

    largest_digit = digit_list[starting_index]
    for i in range(starting_index + 1, len(digit_list)):
        if digit_list[i] > largest_digit:
            largest_digit = digit_list[i]

    if largest_digit != digit_list[starting_index]:
        K -= 1

    for i in range(starting_index + 1, len(digit_list)):
        if digit_list[i] == largest_digit:

            digit_list[starting_index], digit_list[i] = digit_list[i], digit_list[starting_index]

            str_list = map(str, digit_list)
            curr_val = int("".join(str_list))

            if curr_val > current_max[0]:
                current_max[0] = curr_val

            max_int_with_k_swaps(
                digit_list, K, starting_index + 1, current_max)

            digit_list[starting_index], digit_list[i] = digit_list[i], digit_list[starting_index]


def max_digit_with_min_swaps(digit_list: list[int], max_digit_list: list[int], curr_swaps: int, starting_index: int, max_swaps: int):
    if curr_swaps >= len(digit_list) or starting_index >= len(digit_list):
        return curr_swaps

    if digit_list == max_digit_list:
        return curr_swaps

    res = max_swaps

    largest_digit = digit_list[starting_index]
    for i in range(starting_index + 1, len(digit_list)):
        if digit_list[i] > largest_digit:
            largest_digit = digit_list[i]

    if digit_list[starting_index] != largest_digit:
        curr_swaps += 1

    for i in range(starting_index, len(digit_list)):
        if digit_list[i] == largest_digit:

            digit_list[starting_index], digit_list[i] = digit_list[i], digit_list[starting_index]

            res = min(res, max_digit_with_min_swaps(digit_list, max_digit_list, curr_swaps,
                                                    starting_index + 1, max_swaps))

            digit_list[starting_index], digit_list[i] = digit_list[i], digit_list[starting_index]

    return res


def main():
    M = input().strip()
    K = int(input().strip())

    maxNum = [int(M)]
    digit_list = [int(ch) for ch in M]
    max_digit_list = sorted(digit_list, reverse=True)

    max_int_with_k_swaps(digit_list, K, 0, maxNum)
    print(f'Maximum number with at most {K} swaps: {maxNum[0]}')

    print(
        f'Minimum number of swaps: {max_digit_with_min_swaps(digit_list, max_digit_list, 0, 0, len(max_digit_list))}')


main()
```

<br/>

### Test Cases

```md
Input:

129845
3

Expected output:

985241
4

Input:

40153299912991563499
22

Expected output:

99999996554433221110
11

Input:

129814999123456789129
4

Expected output:

999994982123456781121
12

Input:

7439812367854015320989
4

Expected output:

9998812367854015320743
13
```
