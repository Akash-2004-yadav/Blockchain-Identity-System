function goToVerify() {
  window.location.href = "/verify";
}

async function verifyCertificate() {
  const id = document.getElementById("certId").value;
  const res = await fetch(`/api/verify?id=${id}`);
  const data = await res.json();
  document.getElementById("result").innerText = data.message;
}
