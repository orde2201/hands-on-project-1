let opt = 0;
let size = [];
let yes;
let now = 0; 

do {
  console.log("\nPilih Aksi:");
  console.log("1. Tambah Tugas");
  console.log("2. Lihat Daftar Tugas");
  console.log("3. Update Tugas");
  console.log("4. Hapus Tugas");
  console.log("5. Keluar");

  opt = prompt("Masukkan pilihan: ");

  switch (opt) {
    case "1":
      console.log("Tambah Tugas:");
      size[now] = prompt("Masukkan tugas:");
      now++;
      console.log("Tugas berhasil ditambahkan!");
      break;

    case "2":
      console.log("Daftar Tugas:");
      if (size.length === 0) {
        console.log("Daftar tugas kosong.");
      } else {
        for (let i = 0; i < size.length; i++) {
          console.log(`${i + 1}. ${size[i]}`);
        }
      }
      break;

    case "3":
      console.log("Update Tugas :");
      if (size.length === 0) {
        console.log("Daftar tugas kosong.");
      } else {
        let updateIndex = parseInt(prompt("Masukkan nomor tugas yang ingin diupdate : ")) - 1;
        if (updateIndex >= 0 && updateIndex < size.length) {
          let updatedTask = prompt("Masukkan tugas baru:");
          size[updateIndex] = updatedTask;
          console.log("Tugas berhasil diupdate!");
        } else {
          console.log("Nomor tugas tidak valid.");
        }
      }
      break;

    case "4":
      console.log("Hapus Tugas:");
      if (size.length === 0) {
        console.log("Daftar tugas kosong.");
      } else {
        let delIndex = parseInt(prompt("Masukkan nomor tugas yang ingin dihapus:")) - 1;
        if (delIndex >= 0 && delIndex < size.length) {
          size.splice(delIndex, 1);
          console.log("Tugas berhasil dihapus!");
        } else {
          console.log("Nomor tugas tidak valid.");
        }
      }
      break;

    case "5":
      console.log("Keluar dari program.");
      yes = "y";
      break;

    default:
      console.log("Pilihan tidak valid, coba lagi.");
      break;
  }

  if (opt !== "5") {
    yes = prompt("Apakah ingin keluar ? (y/n): ").toLowerCase();
  }
} while (yes !== "y");

console.log("Program selesai, sampai jumpa!");
