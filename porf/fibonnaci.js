let a = 0, b = 1;
Porffor.numberLog(a); Porffor.numberLog(b);

for (let i = 2; i <= 45; i++) {
  let t = b + a;
  a = b;
  b = t;

  Porffor.numberLog(t);
}
