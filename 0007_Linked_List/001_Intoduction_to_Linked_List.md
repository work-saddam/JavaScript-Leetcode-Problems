# Linked List

A **linked list** is a linear data structure where elements (called nodes) are connected using pointers (or links). Unlike arrays, linked lists don’t store elements in contiguous memory locations.

## Node Structure

A **node** is a container with two fields:

- **Value** (the data)
- **Next (Pointer)** — a reference to the next node, or `null` if it's the last one

**Structure:**

```
[Value | Next] -> [Value | Next] -> [Value | Next] -> NULL
```

---

## Types of Linked Lists

### 1. Singly Linked List

- Each node points to the next node only
- Traversal is one-directional

**Structure:**

```
[Value | Next] -> [Value | Next] -> [Value | Next] -> NULL
```

---

### 2. Doubly Linked List

- Each node has two links:
  - Previous node
  - Next node

- Traversal is possible in both directions

**Structure:**

```
NULL <- [Prev | Value | Next] <-> [Prev | Value | Next] -> NULL
```

---

### 3. Circular Linked List

- The last node points back to the first node
- Forms a loop (no `NULL`)

---

## Key Terminologies

- **Head**: First node of the linked list. It marks the entry point and points to the next node.
- **Tail**: Last node of the linked list. It points to `NULL` because there is no node after it.
- **Linked List Representation**: Typically represented using its head node.

---

## Array vs Linked List

| Feature               | Array                                     | Linked List                               |
| --------------------- | ----------------------------------------- | ----------------------------------------- |
| **Type**              | Linear structure using indexes            | Linear structure using nodes and pointers |
| **Memory Layout**     | Contiguous                                | Non-contiguous                            |
| **Access**            | Direct access (e.g., `arr[3]`) — **O(1)** | Sequential access — **O(n)**              |
| **Insert/Delete**     | Slow (requires shifting elements)         | Fast (pointer changes)                    |
| **Size**              | Fixed                                     | Dynamic                                   |
| **Memory Efficiency** | No extra pointer space                    | Extra memory for pointers                 |

---

## Use Cases

| Use Case                          | Prefer      |
| --------------------------------- | ----------- |
| Frequent insert/delete operations | Linked List |
| Need fast lookup/indexing         | Array       |
| Unknown or changing data size     | Linked List |
| Performance-critical applications | Array       |
| Building stack/queue manually     | Linked List |
| Sorting/searching large datasets  | Array       |
