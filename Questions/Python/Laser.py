from typing import List, Tuple

def is_valid(crow: int, ccol: int, lcount: int, board: List[List[int]], lasers: List[List[int]], path: List[List[bool]]) -> bool:

  n, m = len(board), len(board[0])
  if crow < 0 or crow >= n or ccol < 0 or ccol >= m:
    return False
  for i in range(lcount):
    if crow == lasers[i][0] or ccol == lasers[i][1]:
      return False
  return True

def func(crow: int, ccol: int, lcount: int, board: List[List[int]], lasers: List[List[int]], path: List[List[bool]], direction: int) -> int:

  directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]  
  drow, dcol = directions[direction - 1]
  steps = 0
  while is_valid(crow + drow, ccol + dcol, lcount, board, lasers, path):
    crow += drow
    ccol += dcol
    steps += 1
  return steps

def main():

  n, m = map(int, input().split())
  board = [[0 for _ in range(m)] for _ in range(n)] 

  crow, ccol = map(int, input().split())

  lcount = int(input())
  lasers = [[int(x) for x in input().split()] for i in range(lcount)]

  path = [[False for _ in range(m)] for _ in range(n)]

  up = func(crow, ccol, lcount, board, lasers, path, 1)
  down = func(crow, ccol, lcount, board, lasers, path, 2)
  left = func(crow, ccol, lcount, board, lasers, path, 3)
  right = func(crow, ccol, lcount, board, lasers, path, 4)

  print("Up:", up)
  print("Down:", down)
  print("Left:", left)
  print("Right:", right)

  max_possible_path = max(up, down, left, right)
  print("Max possible path:", max_possible_path)

if __name__ == "__main__":
  main()
