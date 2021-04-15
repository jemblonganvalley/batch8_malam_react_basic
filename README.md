# React JS

![react js](https://miro.medium.com/max/3840/1*vHHBwcUFUaHWXntSnqKdCA.png)

## Definisi

React Merupakan sebuah Libraray pada Javascript untuk membuat sebuah User Interface.

## Persiapan

untuk menggunakan react, teman membutuhkan beberapa hal berikut :

1. Nodejs
   bisa di install di [Link](https://nodejs.org/en/) ini
2. Vscode
   Vscode merupakan sebuah code editor yang kami rekomendasikan, silakan teman teman download [disini](https://code.visualstudio.com/)
3. Terminal / CMD
   Merupakan sebuah aplikasi untuk menjalankan console pada laptop atau komputer kita. Untuk user Windows, Kami merekomendasikan menggunakan [GitBash](https://git-scm.com/downloads) atau [cygwin](https://www.cygwin.com/).
   Instalasi paling mudah adalah dengan mengunakan gitbash, karena cygwin membutuhkan beberapa pengaturan tambahan.
4. Quota Internet
   Teman teman harus terhubung ke internet untuk bisa menggunakan react, karena react membutuhkan package yagn harus di download.

## Instalasi

Silakan install apa saja yang disebutkan di bagian persiaoan, apabila sudah, silakan buka terminal / gitbash / cygwin / cmd, dan jalankan syntax berikut :

`npx create-react-app [nama projectnya]`

contoh :

`npx create-react-app myapp`

Setlah proses installasi selesai akan ada message seperti berikut :
`\{><}/ Happy codding`

SIlakan teman teman masuk kedalam project foldernya dengan cara :
`cd myapp`

## Development

yeay saatnya kita ngoding.. silakan teman teman buka vscode di project kita dengan menjalankan syntax berikut pada terminal :
`code .`
Artinya adalah kita membuka VSCODE di folder kita berada pada terminal.

### Struktur Folder React

![react structur folder](https://i.ibb.co/RY27Kc3/Screen-Shot-2021-01-13-at-17-10-14.png)

## Struktur Folder React

Bisa teman teman lihat pada gambar diatas, merupakan struktur dasar project react, yagn dibuat dengan _create-react-app_.

### node_modules

Node modules merupakan sebuah folder yang berisi setiap module yang dibutuhkan untuk project react kita ini.
Folder ini dibentuk automatis setelah kita menginstall react menggunakan _create-react-app_

### public

Folder public adalah folder yang berisi setiap file static dalam project react kita. Disinilah terdapat satu satunya folder index.html. dan kebutuhan file lain seperti icon, robot.txt dan lain lain.

### src

Folder src merupakan folder yang berisi file file Js yang utama yang ada pada project react kita ini.
Component dan lain lain harus di letakan di dalam folder kita ini.

### _file .gitignore_

.gitignore merupakan file yang sudah disiapkan oleh create-react-app unutk mencegah file atau folder yang tidak diinginkan untuk di upload ke git, karena alasan keamanan dan lain lain.
Contoh file yang sebaiknya tidak di upload ke GIT :

- node_modules
- .env
- dan file creadentials lainnya

### _package.json_

Package.json merupakan sebuah file config yang berisi keterangan project kita, dependencies atau package apa aja yang di install dan lain lain.

## Konfigurasi awal project react

1. SIlakan teman teman buka file bernama manifest.json yang berada pada public folder dan isi data sesuai dengan nama project kita.

```json
"short_name": "nama aplikasi teman2",
"name": "COntoh Nama",
```

2. Silakan ganti file App.js menjadi App.jsx.
   Hal ini bertujuan agar kita dapat menggunakan JSX pada file tersebut.

> **JSX** Merupakan sebuah syntax extension untuk javascript, JSX memudahkan kita melakukan code berbentuk HTML di dalam React, karena dia support Snippets2 HTML, dan juga bila melakukan expresi langsung ke file tersebut.

3. Atur Global CSS pada project react kita, buka file index.css pada folder src dan atur seperti code dibawah ini.

```css
html {
  scroll-behavior: smooth;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: auto;
  min-height: 100vh;
  background-color: whitesmoke;
  overflow-x: hidden;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  padding: 0;
  margin: 0;
}

P {
  line-height: 2;
}

a {
  color: inherit;
  text-decoration: none;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
```

## Component

Salah satu fitur penting di react adalah reusable component, intinya kita hanya buat sebuah component, lalu bisa menggunakannya setiap dibutuhkan.

Baik, mari kita coba buat sebuah component pada react, silakan teman teman buat folder baru bernama **components** di dalam folder src.

Dan di dalam folder components tersebut buat folder lagi bernama **navbar**. silakan isi folder navbar dengan 2 file : **Navbar.jsx** dan navbar.css.

> Penamaan sebuah component pada react harus dimulai dengan huruf Capital ex : Navbar, Footer, Sidebar, Card dan lain lain.

> Peletakan file css pada react bisa bebas dimana saja, tapi untuk best practice kita letakan file css di dalam masing masing folder, proses penggunaannya juga mudah tinggal import css pada file compoennt tersebut.

Click [disini](https://github.com/jemblonganvalley/batch8_malam_react_basic/tree/master/src/components/navbar) untuk melihat code.

Penggunaan css pada masing masing component react adalah dengan cara :

```javascript
import "./namaFile.css";
```

## Pengunaan component

Component bisa dipanggil dimanapun kita membutuhkannya, prosesnya adalah dengan melakukan proses import dan tulis nama component di sebuah **SINGLE CLOSING TAG** ex :

```javascript
// import component
import Navbar from "./components/navbar/Navbar";
```

Dan di gunakan dengan cara :

```javascript
<Navbar />
```

## Component Props pada React

Props merupakan sebuah custom atribut yang bisa kita gunakan untuk melempar data ke component. Misalkan kita membuat sebuah compoennt Card, bisa saja isi dari component card tersebut bisa berubah ubah, nah kita bisa menggunakan Props ini untuk melempar data ke component, agar data pada component card bisa dinamis.

Contoh pembuatan props pada component card :

```javascript
import React from "react";
import "./card.css";

function Card({ title, image, content, date, author }) {
  return (
    <div className="card">
      <div className="card_header">
        <h3 className="ch_title">{title}</h3>
      </div>

      <div className="card_body">
        <img src={image} alt="" className="cd_image" />
        <p className="cb_content">{content}</p>
      </div>

      <div className="card_footer">
        <small className="cf_text">
          {date} - {author}
        </small>
      </div>
    </div>
  );
}

export default Card;
```

Bisa teman teman lihat, kita meletakan object pada parameter function Card, dan memberikan nama props. Dan pada content JSX kita concat sesuai penempatannya.

Pada saat Component di panggil, component harus dilengkapi dengan props yang berisi value,

```javascript
<Card
  title="ini card saya"
  image="https://picsum.photos/seed/150/500"
  content="ini adalah contoh content saya.."
  date="17-08-1945"
  author="Soekarno"
/>
```

Nah custom atribut tersebut di sebut props. Silakan panggil beberapa kali component yang sama, dan isi dengan props yang berbeda.

_Selamat, teman teman sudah berhasil membuat sebuah prototype Component pada react_
