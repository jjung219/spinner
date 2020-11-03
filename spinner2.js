const animation = ["|", "/", "-", "\\", "|"];

let time = 100;
for (const el of animation) {
  setTimeout(() => {
    process.stdout.write(`\r${el}   `);
  }, time)
  time += 200;
}
