---
title: "Go Cheatsheet"
publishedDate: 2024-02-01
publishedTime: "3:55 PM"
description: "My notes learning Go lang."
slug: "go-cheatsheet"
---

# [Go Documentation](https://go.dev/doc/)

---

# Go Syntax

```go
// Variable inference
var x int
var y = 10
z := 20

// Function declaration
func add(a, b int) int {
    return a + b
}

// Anonymous functions
func() {
    fmt.Println("Hello, World!")
}()

// Multiple return values
func swap(a, b int) (int, int) {
    return b, a
}

// Conditional statements
if x > y {
    fmt.Println("x is greater than y")
} else if x < y {
    fmt.Println("x is less than y")
} else {
    fmt.Println("x is equal to y")
}

// There are no while loops
for i < 5 {
    fmt.Println(i)
    i++
}

// Iterator
for index, value := range slice {
    fmt.Println(index, value)
}

// Looping
for i := 0; i < 5; i++ {
    fmt.Println(i)
}

// Arrays
var arr [5]int
arr[0] = 1
arr[1] = 2

// Slices
slice := []int{1, 2, 3, 4, 5}

// Maps
m := make(map[string]int)
m["one"] = 1
m["two"] = 2

// Structs
type Person struct {
name string
age int
}

p := Person{name: "John", age: 30}

// Pointers
var ptr *int
x := 10
ptr = &x // Address of x

// Error handling
if err != nil {
log.Fatal(err)
}

// Goroutines
go func() {
// Code to be executed concurrently
}()

// Channels
ch := make(chan int)
ch <- 10
x := <-ch
```
