from PIL import Image
from collections import deque
import sys

src = sys.argv[1]
dst = sys.argv[2]
tol = int(sys.argv[3]) if len(sys.argv) > 3 else 60

img = Image.open(src).convert("RGBA")
w, h = img.size
px = img.load()

seeds = [(0, 0), (w - 1, 0), (0, h - 1), (w - 1, h - 1),
         (w // 2, 0), (w // 2, h - 1), (0, h // 2), (w - 1, h // 2)]

visited = bytearray(w * h)
q = deque()

def similar(c1, c2, t):
    return abs(c1[0]-c2[0]) <= t and abs(c1[1]-c2[1]) <= t and abs(c1[2]-c2[2]) <= t

for sx, sy in seeds:
    seed = px[sx, sy]
    q.append((sx, sy))
    while q:
        x, y = q.popleft()
        idx = y * w + x
        if visited[idx]:
            continue
        cur = px[x, y]
        if not similar(cur, seed, tol):
            continue
        visited[idx] = 1
        # compute alpha based on similarity to dark seed; darker => more transparent
        brightness = (cur[0] + cur[1] + cur[2]) / 3
        if brightness < 40:
            px[x, y] = (cur[0], cur[1], cur[2], 0)
        else:
            # gradient fade
            a = max(0, min(255, int((brightness - 40) * 4)))
            px[x, y] = (cur[0], cur[1], cur[2], a)
        for nx, ny in ((x+1,y),(x-1,y),(x,y+1),(x,y-1)):
            if 0 <= nx < w and 0 <= ny < h and not visited[ny*w+nx]:
                q.append((nx, ny))

img.save(dst, "PNG")
print("done", dst)
