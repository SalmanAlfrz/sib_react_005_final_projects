# Website Shopping

# Tentang ini

> Pada projek ini kami ditugaskan untuk melakukan tugas akhir yang berbentuk website. Website ini bertemakan Website Shopping yang menggunakan API publik dari Fakestore API.
> 

---

# 👥 Kelompok kami terdiri dari

- **Effendi Prakoso | RCTN-KS05-016**
- **Salman Alfarizi | RCTN-KS05-018 (Lead)**
- **Moh. Aulia Miftakhurahmat | RCTN-KS05-021**

---

# Fungsionalitas

1. **Fungsi Login untuk admin ataupun user**
    
    Fungsi login ini dapat digunakan untuk admin dan akan menampilkan beberapa fitur untuk admin, sedangkan untuk login user menggunakan user yang sudah ada di fakestore api. fitur ini dibuat dengan bantuan menyimpan token pada localStorage. member tidak bisa menambahkan cart ataupun checkout ketika belum login. 
    
2. **Menampilkan List Item** 
    
    Fungsi ini menampilkan list item pada halaman home yang didapat dari fakestore api
    
3. **Menambahkan dan disimpan kedalam cart**
    
    Fungsi ini dibuat dengan redux. membuat state redux untuk melakukan penyimpanan pada cart dari hasil yang telah ditambahkan user
    
4. **Fungsi Update Stock untuk Admin**
    
    Fungsi ini untuk merubah stock item yang digunakan untuk admin. User tidak dapat menambahkan barang pada cart jika stok item nya habis. 
    
5. **Fungsi Rekap Penjualan untuk Admin**
    
    Fungsi rekap ini dibuat dengan redux. fungsi ini menyimpan hasil penjualan dan menampilkan barang yang telah terjual serta pendapatannya. 
    

---

# Library yang digunakan

### Library Utama

- [**React.JS**](https://reactjs.org/)
- [**React reduxjs/toolkit**](https://redux-toolkit.js.org/)
- [**React Router**](https://www.npmjs.com/package/react-router-dom)
- [**Axios**](https://chakra-ui.com/)

### Library styling

- [Tailwinds](https://tailwindcss.com/)

---

# Tampilan Mockup

[https://www.figma.com/file/7if8EF6fboDcSmynHmvknY/Final-Project-2-(E-commerce)?node-id=0%3A1&t=2Hf5YJP4Z59rSlA3-0](https://www.figma.com/file/7if8EF6fboDcSmynHmvknY/Final-Project-2-(E-commerce)?node-id=0%3A1&t=2Hf5YJP4Z59rSlA3-0)

---

## Panduan Menjalankan Secara Lokal

1. Pertama kita clone github nya terlebih dahulu
    
    <aside>
    💡 git clone [https://github.com/SalmanAlfrz/sib_react_005_fp1.git](https://github.com/SalmanAlfrz/sib_react_005_fp1.git)
    
    </aside>
    
2. Setelah berhasil. kita masuk ke folder nya terlebih dahulu dengan masuk ke terminal dan memasukan kode berikut
    
    <aside>
    💡 cd sib_react_005_fp1
    
    </aside>
    
3. Instalasi library yang digunakan dengan kode berikut
    
    <aside>
    💡 npm install
    
    </aside>
    
4. Setelah selesai, kita bisa menjalakan nya dengan kode berikut
    
    <aside>
    💡 npm start
    
    </aside>
    
5. Ada beberapa pages awal seperti yang dijelaskan pada Fungsionalitas. Disini disetiap pages akan menampilkan berita berita yang berbentuk card yang terdapat beberapa tombol yaitu:
    1. Tombol Read More 
        
        Tombol ini akan menampilakan berita secara lengkap dengan membawa kita ke browser tab baru dengan membuka berita tersebut
        
    2. Tombol Save
        
        Tombol save berfungsi akan menyimpan berita kedalam pages saved (dengan klik tombol save) dan setelah klik tombol tersebut maka tombol tersebut akan menjadi saved. 
        
6. Ada tempat pencarian dimana kita bisa mengetikan berita yang kita inginkan ke input search nya lalu klik tombol searchnya maka akan muncul berita yang diinginkan. 

---

# Panduan Penggunaan Website

1. Halaman Login
    
    Pada halaman ini user bisa login sebagai admin ataupun dengan user biasa. untuk melakukan dan menambahkan item ke cart, pengguna harus login sebagai user. list login user dapat dilihat di [https://fakestoreapi.com/users](https://fakestoreapi.com/users) dan jika login sebagai admin dengan username dan password ‘admin’. 
    
2. Halaman Home
    
    Pada halaman ini terdapat list item yang didapat dari fakestore api. disini pengguna dapat melihat detail item dan bisa nenambahkan item. item yang ditambahkan ada masuk kedalam halaman cart.
    
3. Halaman Cart
    
    Pada halaman ini akan memunculkan list item yang telah ditambahkan dari halaman home. disini pengguna dapat menambahkan jumlah item atau mengurangi item. disini ada error handling jika stok item tidak ada maka tidak bisa menambahkan jumlah item yang akan dibeli. pada halaman ini terdapat tombol checkout. 
    
4. Halaman Update
    
    Halaman ini dapat digunakan jika login sebagai admin. halaman ini digunakan untuk memperbaharui stok pada item. 
    
5. Halaman Rekap
    
    Halaman ini digunakan untuk menampilkan rekap penjualan. disini menampilkan penghasilan yang telah di checkout pada halaman cart.
    

---

# Penjelasan Struktur Folder *****Code*****

Pada folder src, ada beberapa folder yaitu 

1. Folder App
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b371fad7-038a-4a0b-9efa-c47b5ab3c10a/Untitled.png)
    
    Didalam folder app ada file store.js. File ini digunakan untuk keperluan menggunakan library redux. 
    
2. Folder Components
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c2b8b475-2a49-4512-8efc-2a0e9bada316/Untitled.png)
    
    Didalam folder components, terdapat beberapa komponen seperti yang tertera pada gambar. semua komponen ini akan digunakan untuk setiap pages yang ada. 
    
3. Folder Features
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/66399810-14cb-40f5-942d-022fe0214fad/Untitled.png)
    
    Didalam folder features terdapat dua file js. file ini digunakan untuk keperluan redux untuk membuat fungsi untuk menyimpan atau menghapus kedalam redux state tersebut. 
    
4. Folder Images
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b4bf8dcf-c53e-412d-a621-d0a01e384ea5/Untitled.png)
    
    Pada Folder ini terdapat beberapa gambar yang disimpan yang akan digunakan pada bagian navigasi di covid, indonesia, dan programming. 
    
5. Folder Pages
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c7baea1a-acfd-4267-aac0-607fe28ba835/Untitled.png)
    
    Pada folder ini digunakan untuk menyimpan beberapa pages, yaitu CovidPage untuk menyimpan halaman Covid, IndonesiaPage untuk menyimpan halaman indonesia, dan lainnya sesuai dengan penamaannya. Pages ini akan digunakan pada file utama yaitu pada app.js. 
    
6. Folder styles
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d0274903-4481-46ea-a9af-fc9824416bef/Untitled.png)
    
    Pada Folder ini digunakan untuk menyimpan satu file yaitu theme.js . digunakan untuk styling warna pada website ini.
