 // Lấy phần tử iframe video từ YouTube
 const player = document.getElementById('muplayer');
 // Lấy các nút điều khiển
 const playButton = document.getElementById('playButton');
 const pauseButton = document.getElementById('pauseButton');
 const stopButton = document.getElementById('stopButton');
 
 // Thêm sự kiện click cho các nút điều khiển
 playButton.addEventListener('click', playVideo);
 pauseButton.addEventListener('click', pauseVideo);
 stopButton.addEventListener('click', stopVideo);

 // Hàm để chơi video
 function playVideo() {
   player.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
 }

 // Hàm để tạm dừng video
 function pauseVideo() {
   player.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
 }

 // Hàm để dừng video
 function stopVideo() {
   player.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
 }