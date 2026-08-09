const hasFriendAccess = () => localStorage.getItem("friendAccess") === "yes";
const hasHexAccess = () => localStorage.getItem("hexAccess") === "yes";

if (hasFriendAccess()) {
  document.documentElement.classList.add("friend-access");
}
if (hasHexAccess()) {
  document.documentElement.classList.add("hex-access");
}

document.addEventListener("DOMContentLoaded", () => {
  const operaLink = document.getElementById("operaLink");

  // was with: && hasFriendAccess()
  if (operaLink ) {
    operaLink.href = "Opera/index.html";
  }
  //if (!hasFriendAccess()) {
  //document.getElementById("operaMask")?.remove();
  //}

});