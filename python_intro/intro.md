```python
a = 5
print(a)
```

    5



```python
from math import *

```


```python
print(e)
print(pi)
```

    2.718281828459045
    3.141592653589793



```python
print(cos(pi))
```

    -1.0



```python
a = 5 
print(a)
a = 7.2
print(a)
a = "hello"
print(a)
```

    5
    7.2
    hello



```python
things = [5, 7.2, "hello"]
print(things)
print(things[0])
print(things[1])
print(things[-1])  # negative indices!
print(things[0:2])    # slices
```

    [5, 7.2, 'hello']
    5
    7.2
    hello
    [5, 7.2]



```python
for a in things:
    print(a)
    print("blah")
```

    5
    blah
    7.2
    blah
    hello
    blah



```python
if things[0] > 10:
    print("big")
elif things[0] > 4:    # else if
    print("medium")
else:
    print("small")
    
```

    medium



```python
print(2*3)
print(2+3)
print(2**3) # exponent
```

    6
    5
    8



```python
# print a geometric sequence
# 1, 2, 4, 8, 16, 32, ...

value = 1

for i in range(10):   #  [0, 1, ..., 9]
    print(value)
    value *= 2        # recursive definition


```

    1
    2
    4
    8
    16
    32
    64
    128
    256
    512



```python
# explicit definition

for i in range(10):
    print(2**i)

```

    1
    2
    4
    8
    16
    32
    64
    128
    256
    512



```python
# sum from 1 to n

n = 5
total = 0

for i in range(1, n+1):
    total += i
    
print(total)

```

    15



```python
# function

def sum(n):
    total = 0
    
    for i in range(1, n+1):
        total += i
        
    return total


print(sum(5))
print(sum(100))


```

    15
    5050



```python
# fizz buzz
# print a sequence
# Fibonacci sequence
# factorial function

```
