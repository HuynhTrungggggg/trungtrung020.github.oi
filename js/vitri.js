function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Trình duyệt của bạn không hỗ trợ định vị địa lý!");
    }
  }
  
  function showPosition(position) {
    alert("Vị trí hiện tại của bạn là: " + position.coords.latitude + ", " + position.coords.longitude);
  }