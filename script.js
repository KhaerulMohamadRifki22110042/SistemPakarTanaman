const basisPengetahuan = {
  layu: {
    penyakit: "Fusarium",
    cf: 0.7,
    gambar: "nitrogen.jpg"
  },
  bercak: {
    penyakit: "Alternaria",
    cf: 0.8,
    gambar: "alternaria.jpg"
  },
  menguning: {
    penyakit: "Kekurangan Nitrogen",
    cf: 0.6,
    gambar: "kuning.jpg"
  },
  menggulung: {
    penyakit: "Virus atau kekeringan",
    cf: 0.65,
    gambar: "menggulung.jpg"
  },
  batang_busuk: {
    penyakit: "Rhizoctonia (Busuk Pangkal Batang)",
    cf: 0.75,
    gambar: "busuk.jpg"
  },
  berbintik: {
    penyakit: "Embun Tepung",
    cf: 0.8,
    gambar: "tepung.jpg"
  },
  lambat: {
    penyakit: "Kekurangan nutrisi atau cahaya",
    cf: 0.6,
    gambar: "lambat.jpg"
  },
  berlubang: {
    penyakit: "Serangan hama ulat",
    cf: 0.7,
    gambar: "lubang.jpg"
  },
  akar_hitam: {
    penyakit: "Phytophthora (Busuk Akar)",
    cf: 0.85,
    gambar: "akar.jpg"
  }
};

function diagnosa() {
  const gejala = document.getElementById("gejala").value;
  const hasilDiv = document.getElementById("hasil");
  const gambar = document.getElementById("gambarTanaman");

  if (!gejala) {
    hasilDiv.textContent = "⚠️ Silakan pilih gejala terlebih dahulu.";
    gambar.src = "";
    return;
  }

  const data = basisPengetahuan[gejala];
  hasilDiv.textContent = `🌿 Penyakit: ${data.penyakit}\n🧠 Keyakinan: ${data.cf * 100}%`;
  gambar.src = "images/" + data.gambar;
}