---
title: "COSC 3320 | Algorithms Resources"
publishedDate: 2023-12-18
publishedTime: "3:55 PM"
description: "Aggregated leetcode problems and resources I used taking this course."
slug: "algorithms-resources"
---

# Resources | Videos and Readings

- <a href="https://www.youtube.com/playlist?list=PLUl4u3cNGP63EdVPNLG3ToM6LaEUuStEY" target="_blank">MIT Open Courseware Intro to Algorithms</a>
- <a href="https://www.youtube.com/playlist?list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp" target="_blank">MIT Open Courseware Algorithm Design and Analysis</a>
- <a href="https://neetcode.io/practice" target="_blank">Neetcode 150</a>
- <a href="https://www.people.vcu.edu/~rhammack/BookOfProof/Main.pdf" target="_blank">Book of Proof</a>
- <a href="https://www.youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O" target="_blank">Abdul Bari</a>
- <a href="https://www.youtube.com/@MichaelSambol/playlists" target="_blank">Michael Sambol</a>
- <a href="https://usaco.guide/CPH.pdf" target="_blank">UASCO Competitive Programming Handbook</a>

---

# Leetcode Problems

## Divide and Conquer

- <a href="https://leetcode.com/problems/search-in-rotated-sorted-array/description/" target="_blank">Search in Rotated Sorted Array</a>
- <a href="https://leetcode.com/problems/find-peak-element/description/?envType=list&envId=rszk0yyg" target="_blank">Find Peak Element</a>
- <a href="https://leetcode.com/problems/single-element-in-a-sorted-array/description/" target="_blank">Single Element in a Sorted Array</a>
- <a href="https://leetcode.com/problems/koko-eating-bananas/description/?envType=list&envId=rszk0yyg" target="_blank">Koko Eating Bananas</a>
- <a href="https://leetcode.com/problems/median-of-two-sorted-arrays/description/" target="_blank">Median of Two Sorted Arrays</a>
- <a href="https://leetcode.com/problems/balance-a-binary-search-tree/?envType=list&envId=rszk0yyg" target="_blank">Balance a Binary Search Tree</a>
- <a href="https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/" target="_blank">Construct Binary Tree from Preorder and Inorder Traversal</a>

---

## Backtracking

- <a href="https://leetcode.com/problems/generate-parentheses/description/" target="_blank">Generate Parentheses</a>
- <a href="https://leetcode.com/problems/target-sum/description/" target="_blank">Target Sum</a>
- <a href="https://leetcode.com/problems/letter-case-permutation/description/" target="_blank">Letter Case Permutation</a>
- <a href="https://leetcode.com/problems/path-sum-ii/description/" target="_blank">Path Sum II</a>
- <a href="https://leetcode.com/problems/n-queens/description/" target="_blank">N-Queens</a>

---

## Dynamic Programming

- <a href="https://leetcode.com/problems/longest-common-subsequence/description/" target="_blank">Longest Common Subsequence</a>
- <a href="https://leetcode.com/problems/edit-distance/description/" target="_blank">Edit Distance</a>
- <a href="https://leetcode.com/problems/interleaving-string/description/" target="_blank">Interleaving String</a>
- <a href="https://leetcode.com/problems/target-sum/description/" target="_blank">Target Sum</a>
- <a href="https://leetcode.com/problems/minimum-falling-path-sum/description/" target="_blank">Minimum Falling Path Sum</a>
- <a href="https://leetcode.com/problems/longest-increasing-subsequence/description/" target="_blank">Longest Increasing Subsequence</a>
- <a href="https://leetcode.com/problems/wiggle-subsequence/description/" target="_blank">Wiggle Subsequence</a>

---

## Graphs

### MST Prim & Kruskal

- <a href="https://leetcode.com/problems/min-cost-to-connect-all-points/description/" target="_blank">Min Cost to Connect All Points</a>

```python
class UnionFind:
    def __init__(self, n):
        self.parents = {}
        self.rank = {}

        for i in range(1, n + 1):
            self.parents[i] = i
            self.rank[i] = 0

    def find(self, nd):
        p = self.parents[nd]

        while p != self.parents[p]:
            self.parents[p] = self.parents[self.parents[p]]
            p = self.parents[p]

        return p

    def union(self, nd1, nd2):
        p1, p2 = self.find(nd1), self.find(nd2)

        if p1 == p2:
            return False

        if self.rank[p1] > self.rank[p2]:
            self.parents[p2] = p1
        elif self.rank[p2] > self.rank[p1]:
```

<div class="mb-2"></div>

### Djikstra Shortest Path

- <a href="https://leetcode.com/problems/network-delay-time/description/" target="_blank">Network Delay Time</a>
- <a href="https://leetcode.com/problems/swim-in-rising-water/description/" target="_blank">Swim in Rising Water</a>

### Bellman Ford Shortest Path

- <a href="https://leetcode.com/problems/cheapest-flights-within-k-stops/description/" target="_blank">Cheapest Flights Within K Stops</a>

### Topological Sort

- <a href="https://leetcode.com/problems/course-schedule/description/" target="_blank">Course Schedule</a>
- <a href="https://leetcode.com/problems/course-schedule-ii/description/" target="_blank">Course Schedule II
  </a>
- <a href="https://leetcode.com/problems/course-schedule-iv/description/" target="_blank">Course Schedule IV</a>
- <a href="https://www.codingninjas.com/studio/problems/alien-dictionary_630423" target="_blank">Alien Dictionary</a>
