// Bài Tập 1: Chuyển đổi từ Celsius sang Fahrenheit
function chuyenDoiCelsiusSangFahrenheit() {
  const celsius = parseFloat(document.getElementById('celsius').value);
  if (!isNaN(celsius)) {
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('tempResult').innerText = `${celsius}°C = ${fahrenheit}°F`;
  } else {
    document.getElementById('tempResult').innerText = "Vui lòng nhập một giá trị hợp lệ.";
  }
}

// Bài Tập 2: Tính diện tích

// Diện tích hình chữ nhật
function tinhDienTichHinhChuNhat() {
  const length = parseFloat(document.getElementById('length').value);
  const width = parseFloat(document.getElementById('width').value);
  if (!isNaN(length) && !isNaN(width)) {
    const area = length * width;
    document.getElementById('rectangleResult').innerText = `Diện tích hình chữ nhật là: ${area} m²`;
  } else {
    document.getElementById('rectangleResult').innerText = "Vui lòng nhập chiều dài và chiều rộng hợp lệ.";
  }
}

// Diện tích hình tam giác
function tinhDienTichHinhTamGiac() {
  const base = parseFloat(document.getElementById('base').value);
  const height = parseFloat(document.getElementById('height').value);
  if (!isNaN(base) && !isNaN(height)) {
    const area = (base * height) / 2;
    document.getElementById('triangleResult').innerText = `Diện tích hình tam giác là: ${area} m²`;
  } else {
    document.getElementById('triangleResult').innerText = "Vui lòng nhập cơ sở và chiều cao hợp lệ.";
  }
}

// Diện tích hình vuông
function tinhDienTichHinhVuong() {
  const side = parseFloat(document.getElementById('side').value);
  if (!isNaN(side)) {
    const area = side * side;
    document.getElementById('squareResult').innerText = `Diện tích hình vuông là: ${area} m²`;
  } else {
    document.getElementById('squareResult').innerText = "Vui lòng nhập cạnh hợp lệ.";
  }
}
