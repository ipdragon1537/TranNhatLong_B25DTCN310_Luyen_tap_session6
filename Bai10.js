let arr = [];

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

let choice;

do {
  choice = parseInt(
    prompt(
      `================== MENU ===================
1. Nhập số phần tử và giá trị các phần tử
2. In ra các phần tử đang quản lý
3. In ra các phần tử chẵn, tính tổng và sắp xếp giảm dần
4. In ra giá trị lớn nhất, nhỏ nhất và vị trí của chúng
5. In ra các số nguyên tố và tính tổng
6. Nhập một số và đếm số lần xuất hiện
7. Thêm một phần tử vào vị trí chỉ định
8. Xóa một phần tử theo giá trị
9. Sắp xếp mảng tăng dần hoặc giảm dần
0. Thoát
=============================================
Lựa chọn của bạn:`,
    ),
  );

  switch (choice) {
    case 1:
      let n = parseInt(prompt("Nhập số phần tử:"));
      arr = [];
      for (let i = 0; i < n; i++) {
        arr.push(parseInt(prompt("Nhập phần tử thứ " + (i + 1) + ":")));
      }
      break;

    case 2:
      alert("Mảng hiện tại: " + arr.join(", "));
      break;

    case 3:
      let evens = arr.filter((x) => x % 2 === 0);
      let sumEven = evens.reduce((s, x) => s + x, 0);
      evens.sort((a, b) => b - a);
      alert("Số chẵn giảm dần: " + evens.join(", ") + "\nTổng: " + sumEven);
      break;

    case 4:
      if (arr.length === 0) {
        alert("Mảng rỗng");
        break;
      }
      let max = arr[0],
        min = arr[0];
      let posMax = 0,
        posMin = 0;
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
          max = arr[i];
          posMax = i;
        }
        if (arr[i] < min) {
          min = arr[i];
          posMin = i;
        }
      }
      alert(
        "Max: " +
          max +
          " tại vị trí " +
          posMax +
          "\nMin: " +
          min +
          " tại vị trí " +
          posMin,
      );
      break;

    case 5:
      let primes = arr.filter(isPrime);
      let sumPrime = primes.reduce((s, x) => s + x, 0);
      alert("Số nguyên tố: " + primes.join(", ") + "\nTổng: " + sumPrime);
      break;

    case 6:
      let k = parseInt(prompt("Nhập số cần đếm:"));
      let count = arr.filter((x) => x === k).length;
      alert("Số " + k + " xuất hiện " + count + " lần");
      break;

    case 7:
      let value = parseInt(prompt("Nhập giá trị cần thêm:"));
      let pos = parseInt(
        prompt("Nhập vị trí chèn (0 đến " + arr.length + "):"),
      );
      if (pos >= 0 && pos <= arr.length) {
        arr.splice(pos, 0, value);
        alert("Mảng sau khi thêm: " + arr.join(", "));
      } else {
        alert("Vị trí không hợp lệ");
      }
      break;

    case 8:
      let delVal = parseInt(prompt("Nhập giá trị cần xóa:"));
      arr = arr.filter((x) => x !== delVal);
      alert("Mảng sau khi xóa: " + arr.join(", "));
      break;

    case 9:
      let type = prompt("Nhập 't' để tăng dần, 'g' để giảm dần:");
      if (type === "t") {
        arr.sort((a, b) => a - b);
      } else if (type === "g") {
        arr.sort((a, b) => b - a);
      }
      alert("Mảng sau khi sắp xếp: " + arr.join(", "));
      break;

    case 0:
      alert("Thoát chương trình");
      break;

    default:
      alert("Lựa chọn không hợp lệ");
  }
} while (choice !== 0);
