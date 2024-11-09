function displayKoreanTime() {
  const dateKr = new Date();
  const koreanTime = dateKr.toLocaleString("ko-KR", { timeZone: "Asia/Seoul" });
  document.getElementById("dateKr").innerHTML = koreanTime;
}
displayKoreanTime();

const inputid = document.getElementByclass(".checkInputid");
function checkInputid() {}
