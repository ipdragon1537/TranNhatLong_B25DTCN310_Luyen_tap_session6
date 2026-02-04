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
3. In ra các phần tử chẵn và tính tổng
4. In ra giá trị lớn nhất và nhỏ nhất
5. In ra các số nguyên tố và tính tổng
6. Nhập 1 số và đếm số lần xuất hiện
7. Thêm một phần tử vào vị trí chỉ định
8. Thoát
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
      let evenSum = 0;
      let evenArr = [];
      for (let x of arr) {
        if (x % 2 === 0) {
          evenArr.push(x);
          evenSum += x;
        }
      }
      alert("Số chẵn: " + evenArr.join(", ") + "\nTổng: " + evenSum);
      break;

    case 4:
      if (arr.length === 0) {
        alert("Mảng rỗng");
        break;
      }
      let max = arr[0];
      let min = arr[0];
      for (let x of arr) {
        if (x > max) max = x;
        if (x < min) min = x;
      }
      alert("Max: " + max + "\nMin: " + min);
      break;

    case 5:
      let primeSum = 0;
      let primeArr = [];
      for (let x of arr) {
        if (isPrime(x)) {
          primeArr.push(x);
          primeSum += x;
        }
      }
      alert("Số nguyên tố: " + primeArr.join(", ") + "\nTổng: " + primeSum);
      break;

    case 6:
      let k = parseInt(prompt("Nhập số cần thống kê:"));
      let count = 0;
      for (let x of arr) {
        if (x === k) count++;
      }
      alert("Số " + k + " xuất hiện " + count + " lần");
      break;

    case 7:
      let value = parseInt(prompt("Nhập giá trị cần thêm:"));
      let pos = parseInt(
        prompt("Nhập vị trí chèn (0 đến " + arr.length + "):"),
      );
      if (pos >= 0 && pos <= arr.length) {
        arr.splice(pos, 0, value);
        alert("Đã thêm. Mảng mới: " + arr.join(", "));
      } else {
        alert("Vị trí không hợp lệ");
      }
      break;

    case 8:
      alert("Thoát chương trình");
      break;

    default:
      alert("Lựa chọn không hợp lệ");
  }
} while (choice !== 8);
