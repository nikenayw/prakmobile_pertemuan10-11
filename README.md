## Pertemuan 10
1. Halaman Login
   
   Pada halaman ini akan dilakukan login menggunakan akun Google. Ketika tombol ini diklik, aplikasi akan memanggil fungsi loginWithGoogle() yang ada pada store authStore.
   
   <img src="asstes10/login.png" alt="Halaman Login" width="300"/>
   <img src="asstes10/choose-acc.png" alt="Halaman Login" width="300"/>
3. Halaman Home

   Halaman home berfungsi sebagai tempat untuk menampilkan menu tab. Komponen TabsMenu diimpor dari folder components dan akan menampilkan berbagai dua navigasi, yaitu Home dan Profile.

   <img src="asstes10/home.png" alt="Home" width="300"/>
5. Halaman Profile

   Halaman Profile ini menampilkan informasi pengguna seperti foto profil, nama, dan email yang diambil dari data autentikasi. Di bagian atas, terdapat tombol Logout dan akan mengarahkan kembali ke halaman login. Foto profil pengguna ditampilkan dan data nama dan email ditampilkan dengan bersifat readonly. 

   <img src="asstes10/profil.png" alt="Profile" width="300"/>


## Pertemuan 11
1. Halaman Login

   Pada halaman ini akan dilakukan login menggunakan akun Google. Ketika tombol ini diklik, aplikasi akan memanggil fungsi loginWithGoogle() yang ada pada store authStore.

   <img src="assets11/login.png" alt="Halaman Login" width="300"/>
   <img src="assets11/choose-acc.png" alt="Halaman Login" width="300"/>
3. Halaman Home

   Halaman ini adalah halaman yang pertama muncul setelah pengguna melakukan login. Dan menampilkan Todo apabila terdapat todo yang sudah ditambahkan. Jika belum ada, terdapat keterangan "No active todos"

   <img src="assets11/home.png" alt="Home" width="300"/>
5. Add To Do

   Pada halaman Add Todo, pengguna dapat menambahkan todo baru. Pengguna dapat memasukkan judul dan deskripsi todo. Setelah itu dapat menyimpannya.
   
   <img src="assets11/add.png" alt="Halaman Login" width="300"/>
   <img src="assets11/add-success.png" alt="Halaman Login" width="300"/>
7. Edit To Do

   Saat pengguna melakukan swipe pada Todo, opsi edit muncul di sisi kanan. Pada halaman Edit, dapat diubah detail Todo yang sudah ada. Pengguna dapat mengubah judul dan deskripsi todo, lalu menyimpan perubahan edit todo

   <img src="assets11/tb-edit.png" alt="Halaman Login" width="300"/>
   <img src="assets11/edit.png" alt="Halaman Login" width="300"/>
9. Completed To Do

   Pada halaman Completed Todos, ditampilkan halaman yang sudah diselesaikan yang sebelumnya. Setiap tugas dengan status "completed" akan muncul di dalam bagian ini dan dapat dilihat pula mengenai judul, deskripsi, dan waktu pembaruan todo yang sudah selesai. Selain itu, ada opsi untuk mengubah status todo kembali menjadi aktif jika diperlukan. Jika tidak ada tugas yang selesai, akan muncul pesan "No completed todos". 
    
   <img src="assets11/completed.png" alt="Halaman Login" width="300"/>
11. Delete

    Saat pengguna melakukan swipe pada Todo, opsi delete muncul di sisi kiri. Ketika opsi ini dipilih, fungsi handleDelete akan dipanggil untuk menghapus tugas tersebut dari database Firestore.
    
    <img src="assets11/tb-deleted.png" alt="Delete" width="300"/>
    <img src="assets11/delete-success.png" alt="Delete" width="300"/>

13. Halaman Profile

    Halaman Profile ini menampilkan informasi pengguna seperti foto profil, nama, dan email yang diambil dari data autentikasi. Foto profil pengguna ditampilkan dan data nama dan email ditampilkan dengan bersifat readonly. 

    <img src="assets11/profil.png" alt="Halaman Profile" width="300"/>
15. Logout
   Di bagian atas, terdapat tombol Logout dan akan mengarahkan kembali ke halaman login.

    <img src="assets11/profil-logout.png" alt="Logout" width="300"/>
    <img src="assets11/login.png" alt="Halaman Login" width="300"/>
