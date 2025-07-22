import { createContext, useContext } from "react";
import { useLang } from "../LanguageContext";
import woman1 from '../../images/femalefoto2.jpg'
import woman2 from '../../images/femalefoto3.jpg'
import woman3 from '../../images/femalefoto4.jpg'
import woman4 from '../../images/female4.jpg'
import woman5 from '../../images/female5.jpg'
import woman6 from '../../images/female6.jpg'
import woman8 from '../../images/woman8.jpg'
import woman9 from '../../images/woman9.jpg'
import woman7 from '../../images/female7.jfif'
import men1 from '../../images/men1.jpg'
import men2 from '../../images/men2.jpg'
import men3 from '../../images/men3.jpg'
import men4 from '../../images/men4.jpg'
import men5 from '../../images/men5.jpg'
import men6 from '../../images/men6.jpg'
import kid1 from '../../images/kid1.jpeg'
import kid2 from '../../images/kid2.jpeg'
import kid3 from '../../images/kid3.jpeg'
import kid4 from '../../images/kid4.jpg'
import kid5 from '../../images/kid5.jpeg'
import kid6 from '../../images/kid6.jpeg'
import jew1 from '../../images/jew1.jfif'
import jew2 from '../../images/jew2.jpg'
import jew3 from '../../images/jew3.jfif'
import jew4 from '../../images/jew4.jfif'
import jew5 from '../../images/jewfive.jfif'
import jew6 from '../../images/jew6.jpg'
import home1 from '../../images/home1.jpg'
import home2 from '../../images/home2.jfif'
import home3 from '../../images/home3.jfif'
import home4 from '../../images/home4.jfif'
import home5 from '../../images/home5.jfif'
import home6 from '../../images/home6.jfif'
import ph1 from '../../images/comph1.jpg'
import ph2 from '../../images/comph2.jpg'
import ph4 from '../../images/ph4.jfif'
import ph5 from '../../images/ph5.jfif'
import ph3  from '../../images/ph3.jfif'
import ph8 from '../../images/ph8.jfif'
import ph9  from '../../images/ph9.webp'
import ph10  from '../../images/ph10.webp'
import ph6 from '../../images/ph6.jfif'
import ph11 from '../../images/ph11.jfif'
import ph12 from '../../images/ph12.jfif'
import ph13 from '../../images/ph13.jfif'
import ph14 from '../../images/ph14.jfif'
import ph15 from '../../images/ph15.jpg'
import ph16 from '../../images/ph16.jfif'
import ph17 from '../../images/ph17.jfif'
import ph18 from '../../images/ph18.jfif'
import ph19 from '../../images/ph19.jfif'
import ph20 from '../../images/ph20.jpg'
import ph21 from '../../images/ph21.jpg'
import ph22 from '../../images/ph22.jfif'
import ph24 from '../../images/ph24.webp'
import ph23 from '../../images/ph23.jfif'
import ph25 from '../../images/ph25.webp'
import ph26 from '../../images/ph26.webp'
import ph27 from '../../images/ph27.jpg'
import ph28 from '../../images/ph28.jfif'
import ph30 from '../../images/ph30.jfif'
import ph29  from  '../../images/ph29.jpg'
import ph32 from '../../images/ph32.jfif'
import ph31 from '../../images/ph31.jfif'




const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const { locale } = useLang(); 
  const products = {
    pr1: {
      id: 1, 
      fav:4130,
      stock:{
        xs:17,
        s:10,
        m:5,
        l:53,
        xl:34,
        
      },
     
      image: woman1,
        comments:{
        comm1:{question:"rengi fotoğraftaki gibi mi", answer:"evet, efendim."},
        comm2:{question:"en fazla ne kadar siparis edebiliyoruz", answer:"stoklarımız sınırlıdır,efendim." },
        comm3 :{question:"yazısız hali var mı?" , answer:"hayır, efendim."},
        comm4 :{question:"stoklar yenilenecek mi" , answer:"tabii ki efendim."},
        comm5 :{question:"iyi aksamlar , small bedenı kalmamıs." , answer:"iyi akşamlar efendim,stoklar yenilenir"},
      },
    feedbacks: {
  photoComments: [
    
   { name: "ayse.k", comment: "Çok şık ve kaliteli, bayıldım!", star: 5, photo: ph4 },
  { name: "mehmet23", comment: "Rengi görseldeki gibi değildi, iade ettim.", star: 1, photo: ph5 },
 
    
  ],
  comments: [
  { name: "selda.yilmaz", comment: "Ürün beklediğim gibi geldi, çok memnunum.", star: 5 },
  { name: "okan.durmus", comment: "Kalitesi orta düzeyde ama kullanılabilir.", star: 3 },
  { name: "nazli.karaca", comment: "Beden tam uydu, rengi de çok güzel.", star: 4 },
  ]
},

      wideness:"tight",
      brand:"lewis",
      material:"cotton",
      style:"spor",
      color:"white",
      rating: 4.5,
      kind:"woman",
      price : 250  ,
      type:"shirt",

      title: {
        en: "Woman Lewis-Tshirt",
        tr: "Lewis Tshirt-Kadın",
        fr: "Maison moderne au cœur de Los Angeles historique",
        es: "Casa moderna en el corazón de Los Ángeles histórico",
      },
    
      description : {
        en: "Material: Cotton Color: White Stock is limited. You can order maximum 3 of the same product.",
        tr:"Materyal: Pamuk Renk: Kırmızı Stok sınırldır. Aynı üründen en fazla 3 tane sipariş veribilir.",
        fr: "Matière : Coton Couleur : Rouge Le stock est limité. Vous pouvez commander un maximum de 3 articles du même produit.",
        es:"Material: Algodón Color: Rojo Stock limitado. Puedes pedir un máximo de 3 artículos del mismo producto.",

      },
      imageAlt: {
        
        en: "Woman-Shirt",
        tr: "Kadın-Gömlek",
        fr: "Vue arrière de la maison moderne avec piscine",
        es: "Vista trasera de la casa moderna con piscina"
      },

    },
    pr2: {
      id: 2,
      fav: 4000,
         stock:{
        xs:17,
        s:10,
        m:5,
        l:53,
        xl:34,  
      },
       feedbacks: {
  photoComments: [
   { name: "murat.y", comment: "Biraz geç geldi ama ürün güzel.", star: 3, photo: ph1 },
  { name: "zeynep_aktas", comment: "Deseni beklediğimden daha güzel!", star: 5, photo: ph2 },
  { name: "kaan34", comment: "Kalıbı çok dar, hiç memnun kalmadım.", star: 1, photo: ph3 },
  ],
  comments: [
   { name: "tamer.aslan", comment: "Kargo biraz geç geldi ama sorun olmadı.", star: 3 },
  { name: "melis.ozcan", comment: "Fiyatına göre gayet iyi bir ürün.", star: 4 },
  { name: "berat.kurt", comment: "Ürün açıklamadaki gibi değil, beğenmedim.", star: 1 },
  { name: "aysun.demir", comment: "Her detay düşünülmüş, paketleme harikaydı.", star: 5 },
  ]
},

      brand:"bershka",
      material:"cotton",
        comments:{
        comm1:{question:"rengi fotoğraftaki gibi canlı mı", answer:"evet,efendim"},
        comm2:{question:"beden kalmamıs", answer:"stok yenilenir,efendim"},
        comm2:{question:"beden yokk", answer:"stok yenilenir,efendim"},
        comm2:{question:"small beden yok mu?", answer:"stok yenilenir,efendim"},
      },
      wideness:"normal",
      style:"spor",
      color:"red",
      image: woman2,
      kind:"woman",
      rating: 8.5,
      price : 150  ,
      type:"shirt",
      title: {
        en: "Woman Red Tshirt",
        tr: "Kırmızı Tshirt ",
        fr: "T-shirt Rouge",
        es: "Camiseta Roja"
      },
 
  
      description : {
        en: "Material: Cotton Color: Red Stock is limited. You can order maximum 5 of the same product.",
        tr:"Materyal: Pamuk Renk: Kırmızı Stok sınırldır. Aynı üründen en fazla 5 tane sipariş veribilir.",
        fr: "Matière : Coton Couleur : Rouge Le stock est limité. Vous pouvez commander un maximum de 5 articles du même produit.",
        es:"Material: Algodón Color: Rojo Stock limitado. Puedes pedir un máximo de 5 artículos del mismo producto.",
      },
      imageAlt: {
        en: "Woman-Shirt",
        tr: "Kadın-Tshirt",
        fr: "Vue arrière de la maison moderne avec piscine",
        es: "Vista trasera de la casa moderna con piscina"
      },
 
    },

    pr3: {
      id: 3,
      fav: 1070,
       stock:{
        xs:17,
        s:10,
        m:5,
        l:53,
        xl:34,
        
      },
       feedbacks: {
  photoComments: [
 { name: "buraktt", comment: "Bir yıkamada rengi soldu. Hayal kırıklığı.", star: 2, photo: ph6 },
  { name: "deniz.er", comment: "Fotoğraftakinden daha kaliteli, çok beğendim.", star: 5, photo: ph8 },
  { name: "yagmur.s", comment: "Normal, ne çok iyi ne kötü.", star: 3, photo: ph9 },
  ],
  comments: [
  { name: "kenan.sari", comment: "İlk yıkamada biraz çekti, dikkat edin.", star: 2 },
  { name: "cansu.tuna", comment: "Rahat ve kaliteli, tavsiye ederim.", star: 5 },
  ]
},

      brand:"koton",
      material:"pongee",
      style:"casual",
      wideness:"wide",
      color:"white",
      image: woman3,
      comments:{
        comm1:{question:"ürününüz görseldeki gibi mi", answer:"evet ,efendim"},
        comm2:{question:"gömlek kuması nedir", answer:"saten efendim"},
        comm2:{question:" kuması?", answer:"saten efendim"},
        comm2:{question:"terleten kumaş mdıır?", answer:"hayır , efendim"},
      },
      kind:"woman",
      rating: 4.9,
      price : 134  ,
      type:"tunic",
    
      title: {
        en: "White Satin Shirt",
        tr: "Beyaz Saten Gömlek",
        fr: "Chemise en satin blanc",
        es: "Camisa de satén blanca"
      },
      description : {
        en: "Material: Cotton Color: White Stock is limited. You can order maximum 5 of the same product.",
        tr:"Materyal: Pamuk Renk: Beyaz Stok sınırldır. Aynı üründen en fazla 5 tane sipariş veribilir.",
        fr: "Matière : Coton Couleur : Blanc Le stock est limité. Vous pouvez commander un maximum de 5 articles du même produit.",
        es:"Material: Algodón Color: Blanco Stock limitado. Puedes pedir un máximo de 5 artículos del mismo producto.",
  
      },
      imageAlt: {
        en: "White Satin Shirt",
        tr: "Beyaz Saten Gömlek",
        fr: "Chemise en satin blanc",
        es: "Camisa de satén blanca"
      },

    },
    pr4: {
      id: 4,
      fav: 1013,
      feedbacks: {
  photoComments: [

  { name: "fatma_oz", comment: "Çok rahat bir ürün, sürekli giyiyorum.", star: 5, photo: ph10 },
  ],
  comments: [
{ name: "furkan.altun", comment: "Ne iyi ne kötü, ortalama diyebilirim.", star: 3 },
  { name: "sibel.celik", comment: "Ürün kusurlu geldi, değişim istedim.", star: 1 },
  { name: "yusuf.bayrak", comment: "Sürekli giydiğim favori ürünüm oldu.", star: 5 },
  ]
},

       stock:{
        xs:17,
        s:10,
        m:5,
        l:53,
        xl:34,
        
      },
        comments:{
        comm1:{question:"uzunluğu nasıl", answer:"bedeninize göre değişir,efendim"},
        comm2:{question:"rengi fotoğraftaki gibi mi", answer:"evet,efendim"},
          comm2:{question:"stok kalmamış", answer:"yenilenir,efendim"},
      },
      color:"white",
      wideness:"wide",
      brand:"mavi",
      material:"pongee",
      style:"bohem",
      price : 500  ,
      type:"tunic",
      rating: 8.5,
      image: woman4,
      kind:"woman",
      title: {
        en: "White Dress",
        tr: "Beyaz Elbise",
        fr: "robe blanche",
        es: "vestido blanco"
      },
      description : {
        en: "Material: Cotton Color: White Stock is limited. You can order maximum 2 of the same product.",
        tr:"Materyal: Pamuk Renk: Kırmızı Stok sınırldır. Aynı üründen en fazla 2 tane sipariş veribilir.",
        fr: "Matière : Coton Couleur : Rouge Le stock est limité. Vous pouvez commander un maximum de 2 articles du même produit.",
        es:"Material: Algodón Color: Rojo Stock limitado. Puedes pedir un máximo de 2 artículos del mismo producto.",

      },
      imageAlt: {
           en: "White Dress",
        tr: "Beyaz Elbise",
        fr: "robe blanche",
        es: "vestido blanco",
      },
 
      
    },
    pr5: {
      id: 5, 
      fav: 8050,
       feedbacks: {
  photoComments: [
    { name: "cem.t", comment: "Beklentimi karşılamadı, iade ettim.", star: 2, photo: ph11},

  ],
  comments: [
   { name: "gizem.aksoy", comment: "Beklentimi pek karşılamadı.", star: 2 },
  { name: "ramazan.ergen", comment: "Anneme aldım, o da çok beğendi.", star: 5 },
  { name: "nurgul.ates", comment: "Fena değil ama biraz pahalı.", star: 3 },
  { name: "serhat.kaya", comment: "Kesimi çok hoşuma gitti.", star: 4 },
  { name: "derya.ozdemir", comment: "Hafif bir dikiş hatası vardı ama sorun etmedim.", star: 3 },
  ]
},

       stock:{
        xs:17,
        s:10,
        m:5,
        l:53,
        xl:34,
        
      },
        comments:{
        comm1:{question:"naber", answer:"iyiyim"},
        comm2:{question:"naber", answer:"iyiyim"},
      },
      image: woman5,
      wideness:"tight",
      brand:"lewis",
      material:"cotton",
      style:"spor",
      color:"white",
      rating: 4.5,
      kind:"woman",
      price : 90  ,
      type:"shirt",

      title: {
        en: "Woman-shirt",
        tr: "Tshirt-Kadın",
        fr: "T-shirt - Femme",
        es: "Camiseta-Mujer",
      },

      description : {
        en: "Material: Cotton Color: White Stock is limited. You can order maximum 3 of the same product.",
        tr:"Materyal: Pamuk Renk: Kırmızı Stok sınırldır. Aynı üründen en fazla 3 tane sipariş veribilir.",
        fr: "Matière : Coton Couleur : Rouge Le stock est limité. Vous pouvez commander un maximum de 3 articles du même produit.",
        es:"Material: Algodón Color: Rojo Stock limitado. Puedes pedir un máximo de 3 artículos del mismo producto.",

      },
      imageAlt: {
        
        en: "Woman-shirt",
        tr: "Tshirt-Kadın",
        fr: "T-shirt - Femme",
        es: "Camiseta-Mujer",
      },

    },
    pr6: {
      id: 6,
      fav: 1110,
       feedbacks: {
  photoComments: [
    { name: "selin.sel", comment: "Tam beden, kaliteli kumaş. Tavsiye ederim.", star: 4, photo: ph12},
  { name: "arda_ylz", comment: "Kargoda sorun yaşadım ama ürün güzel.", star: 3, photo: ph13 },
  { name: "irem.ak", comment: "Bayıldım! Renkler canlı ve şık.", star: 5, photo: ph14 },
  { name: "halil.c", comment: "Dikiş hataları vardı, hiç memnun kalmadım.", star: 1, photo: ph15 },

  ],
  comments: [
    { name: "enes.tok", comment: "Tam aradığım gibi bir ürün, teşekkürler!", star: 5 },
  { name: "ilayda.cavus", comment: "Kalite kontrol yapılmamış gibi.", star: 1 },
  { name: "baris.soylu", comment: "Renk canlı, dokusu yumuşak.", star: 5 },
  ]
},

       stock:{
        xs:17,
        s:10,
        m:5,
        l:53,
        xl:34,
        
      },
        comments:{
        comm1:{question:"stok yeniletin lütfen!", answer:"yenilenecektir,efendim."},
        comm2:{question:"çok sevdim ama stok yok..", answer:"en kısa zamanda yenilenir,efendim."},
        comm3:{question:"büyük beden gelecek mi?", answer:"bu üründe büyük beden yok efendim"},
        comm4:{question:"kampanya gelecek mi ürün hakkında", answer:"takipte kalın lütfen."},
      },
      brand:"bershka",
      material:"cotton",
      wideness:"normal",
      style:"spor",
      color:"red",
      image: woman6,
      kind:"woman",
       rating: 3.5,
      price : 272  ,
      type:"pants",
      title: {
        en: "Beige pants-woman",
        tr: "Krem pantolon-kadın ",
        fr: "Pantalon beige-femme",
        es: "Pantalón beige-mujer"
      },

      description : {
        en: "Material: Cotton Color: Beige tock is limited. You can order maximum 5 of the same product.",
        tr:"Materyal: Pamuk Renk: Krem Stok sınırldır. Aynı üründen en fazla 5 tane sipariş veribilir.",
        fr: "Matière : Coton Couleur : Beige Le stock est limité. Vous pouvez commander un maximum de 5 articles du même produit.",
        es:"Material: Algodón Color: Beige Stock limitado. Puedes pedir un máximo de 5 artículos del mismo producto.",
      },
      imageAlt: {
          en: "Beige pants-woman",
        tr: "Krem pantolon-kadın ",
        fr: "Pantalon beige-femme",
        es: "Pantalón beige-mujer"
      },
 
    },

    pr7: {
      id: 7,
      fav: 9110,
      feedbacks: {
  photoComments: [
 { name: "okan.dmr", comment: "Görseldeki kadar kaliteli durmuyor.", star: 2, photo: ph18 },
  { name: "okan.dmr", comment: "Görseldeki kadar kaliteli durmuyor.", star: 2, photo: ph16 },
  { name: "esra.n", comment: "Boyutu tam, kumaşı güzel.", star: 4, photo: ph17 },
  ],
  comments: [
   { name: "betul.guler", comment: "Daha iyi bekliyordum açıkçası.", star: 2 },
  { name: "ibrahim.oz", comment: "Güzel ürün ama kargo süresi uzundu.", star: 3 },
  ]
},

       stock:{
        xs:17,
        s:10,
        m:5,
        l:53,
        xl:34,
        
      },
        comments:{
        comm1:{question:"bedenler yenilenecek mi?", answer:"evet, efendim"},
        comm2:{question:"ürün çok dar mı?", answer:"hayr,efendim "},
        comm3:{question:"görsldeki gibi durmuyor fotoğraflı yorumlar", answer:"kalıba göre değişir,efendim."},
        comm4:{question:"bedenler yenilenecek mi?", answer:"evet, efendim"},
      },
      brand:"koton",
      material:"pongee",
      style:"casual",
      wideness:"tight",
      color:"white",
      image: woman7,
      kind:"woman",
      rating: 3.5,
      price : 140  ,
      type:"tunic",
  
      title: {
        en: "Black-Dress",
        tr: "Siyah-Elbise",
        fr: "Robe noire",
        es: "Vestido negro"
      },
      description : {
        en: "Material: Cotton Color: Black Stock is limited. You can order maximum 5 of the same product.",
        tr:"Materyal: Pamuk Renk: Siyah Stok sınırldır. Aynı üründen en fazla 5 tane sipariş veribilir.",
        fr: "Matière : Coton Couleur : Noire Le stock est limité. Vous pouvez commander un maximum de 5 articles du même produit.",
        es:"Material: Algodón Color: Negro. Stock limitado. Puedes pedir un máximo de 5 artículos del mismo producto.",
  
      },
      imageAlt: {
        en: "Black-Dress",
        tr: "Siyah-Elbise",
        fr: "Robe noire",
        es: "Vestido negro"
      },
    
    },
    pr8: {
      id: 8,
      fav: 4340,
        feedbacks: {
  photoComments: [
    { name: "tugce_u", comment: "Kesimi farklı duruyor, iade ettim.", star: 2, photo: ph19 },

  ],
  comments: [
 { name: "betul.guler", comment: "Daha iyi bekliyordum açıkçası.", star: 2 },
  { name: "ibrahim.oz", comment: "Güzel ürün ama kargo süresi uzundu.", star: 3 },
  { name: "zeliha.cetin", comment: "Aynı modelin başka rengini de alacağım.", star: 4 },
  ]
},

       stock:{
        xs:17,
        s:10,
        m:5,
        l:53,
        xl:34,
        
      },
        comments:{
        comm1:{question:"acdc yazısı büyük mü", answer:"görseldeki gibi,efendim"},
        comm2:{question:"iyi akşamlar,ürün görseldeki gibi mi?", answer:"evet,efendim"},
           comm3:{question:"acdc yazısı nasıl", answer:"görseldeki gibi,efendim"},
        comm4:{question:"ürün yenilenir mi?", answer:"evet,efendim"},
      },
      color:"black",
      wideness:"normal",
      brand:"mavi",
      material:"pongee",
      style:"casual",
      price : 320  ,
      type:"shirt",
      rating: 2.5,
      image: woman8,
      kind:"woman",
     
      title: {
        en: "Woman Tshirt",
        tr: "Tshirt-Kadın",
        fr: "t-shirt femme",
        es: "camiseta de mujer"
      },
      description : {
        en: "Material: Cotton Color: Black Stock is limited. You can order maximum 2 of the same product.",
        tr:"Materyal: Pamuk Renk: Siyah Stok sınırldır. Aynı üründen en fazla 2 tane sipariş veribilir.",
        fr: "Matière : Coton Couleur : Nevro Le stock est limité. Vous pouvez commander un maximum de 2 articles du même produit.",
        es:"Material: Algodón Color: Negro Stock limitado. Puedes pedir un máximo de 2 artículos del mismo producto.",

      },
      imageAlt: {
        en: "Woman Tshirt",
        tr: "Tshirt-Kadın",
        fr: "t-shirt femme",
        es: "camiseta de mujer"
      },
  
      
    },
    pr9: {
      id: 9,
      fav: 2030,
      feedbacks: {
  photoComments: [
  { name: "sevgi.ak", comment: "Renk solması oldu, biraz hayal kırıklığı.", star: 2, photo: ph20},
  { name: "fulya.bz", comment: "Kargo hızlıydı, ürün de kaliteli.", star: 5, photo: ph21 },
   { name: "cansu", comment: "sevdimmm.", star: 5, photo: ph22 },
  ],
  comments: [
   { name: "halil.yaman", comment: "Fiyat/performans açısından mükemmel.", star: 5 },
  { name: "necla.yurt", comment: "Daha önce de almıştım, yine memnun kaldım.", star: 5 },
  ]
},

       stock:{
        xs:17,
        s:10,
        m:5,
        l:53,
        xl:34,
        
      },
        comments:{
        comm1:{question:"çok bol mu", answer:"footğraftaki gibi,efendim."},
        comm2:{question:"büyük beden olur mu?", answer:"olur,efendim"},
         comm3:{question:"bedenler tam oluyor mu", answer:"evet,efendim."},
        comm4:{question:"büyük beden olur mu?", answer:"olur,efendim"},
      },
      color:"green",
      wideness:"wide",
      brand:"mavi",
      material:"pongee",
      style:"bohem",
      price : 460  ,
      type:"pants",
      rating: 8.5,
      image: woman9,
      kind:"woman",
    
      title: {
        en: "pants-green",
        tr: "pantolon-yeşil",
        fr: "pantalon vert",
        es: "pantalones verdes"
      },
        imageAlt: {
        en: "pants-green",
        tr: "pantolon-yeşil",
        fr: "pantalon vert",
        es: "pantalones verdes"
      },
  

      
    },
    pr10: {
      id: 10, 
      fav: 3020,
       feedbacks: {
   photoComments: [
    { name: "leyla.ergen", comment: "Renk canlı ama biraz kısa geldi bana.", star: 3, photo: ph23 },
    { name: "bora.aksoy", comment: "Gerçekten kaliteli, tam beden oldu.", star: 5, photo: ph24 }
  ],
  comments: [
    { name: "pelin.kaya", comment: "Paketleme çok iyiydi, ürünü sevdim.", star: 4 },
    { name: "hakan.ar", comment: "Beklediğimden daha iyi çıktı.", star: 5 },
    { name: "selma.boz", comment: "Kumaşı biraz sert, rahat değil.", star: 2 }
  
  ],
  comments: [
    {
      name: "Ensyl",
      writtenComment: "Sevdim"
    },
    {
      name: "Zeynep",
      writtenComment: "Rahat ve kaliteli"
    }
  ]
},

       stock:{
        xs:17,
        s:10,
        m:5,
        l:53,
        xl:34,
        
      },
        comments:{
        comm1:{question:"oversize mı?", answer:"evet,efendim ürün oversizedır."},
        comm2:{question:"stokalr yenilenir mi?", answer:"evet,efendim"},
        comm3:{question:"unisex mi?", answer:"evet,efendim"},
        comm4:{question:"beden nasıl", answer:"görseldeki gibidir."},
      },
      image: men1,
      wideness:"wide",
      brand:"lewis",
      material:"cotton",
      style:"spor",
      color:"black",
      rating: 4.5,
      kind:"men",
      price : 152  ,
      type:"shirt",

      title: {
        en: "White Tshirt",
        tr: "Beyaz Tshirt",
        fr: "T-shirt Blanc",
        es: "Camiseta Blanco",
      },
  
      description : {
        en: "Material: Cotton Color: White Stock is limited. You can order maximum 3 of the same product.",
        tr:"Materyal: Pamuk Renk: Kırmızı Stok sınırldır. Aynı üründen en fazla 3 tane sipariş veribilir.",
        fr: "Matière : Coton Couleur : Rouge Le stock est limité. Vous pouvez commander un maximum de 3 articles du même produit.",
        es:"Material: Algodón Color: Rojo Stock limitado. Puedes pedir un máximo de 3 artículos del mismo producto.",

      },
      imageAlt: {
        
        en: "White Tshirt",
        tr: "Beyaz Tshirt",
        fr: "T-shirt Blanc",
        es: "Camiseta Blanco",
      },
   
    },
    pr11: {
      id: 11,
      fav: 4600,
       feedbacks: {
   photoComments: [
    { name: "dilan.yildiz", comment: "Ürün fotoğraflardan daha güzel.", star: 5, photo: ph26},
    { name: "baran.keskin", comment: "Yaka kısmı beklediğimden genişti.", star: 2, photo: ph27 },
    { name: "meltem.er", comment: "Çok tatlı bir dokusu var, sevdim.", star: 4, photo: ph25 },

  ],
  comments: [
    { name: "gokce.oz", comment: "Ürün anlatıldığı gibiydi, teşekkürler.", star: 5 },
    { name: "serkan.ay", comment: "İplik çıkıntıları vardı, iade ettim.", star: 2 }
  ]
},

       stock:{
        xs:17,
        s:10,
        m:5,
        l:53,
        xl:34,
        
      },
        comments:{
        comm1:{question:"çok bol mu", answer:"fotoğraftaki gibi efendim"},
        comm2:{question:"büyük beden var mı?", answer:"var, efendim"},
        comm3:{question:"çok bol mu", answer:"fotoğraftaki gibi efendim"},
        comm4:{question:"büyük bedenler var mı?", answer:"var, efendim"},
         comm5:{question:" bol mu", answer:"fotoğraftaki gibi efendim"},
        comm6:{question:"stoklar var mı", answer:"var, efendim"},
      },
      brand:"bershka",
      material:"cotton",
      wideness:"normal",
      style:"spor",
      color:"black",
      image: men2,
      kind:"men",
      rating: 8.5,
      price : 90  ,
      type:"shirt",
      title: {
        en: "Black Tshirt",
        tr: "Siyah Tshirt ",
        fr: "T-shirt Nevro",
        es: "Camiseta negro"
      },
     
      description : {
        en: "Material: Cotton Color: Black Stock is limited. You can order maximum 5 of the same product.",
        tr:"Materyal: Pamuk Renk: Siyah Stok sınırldır. Aynı üründen en fazla 5 tane sipariş veribilir.",
        fr: "Matière : Coton Couleur : Nevro Le stock est limité. Vous pouvez commander un maximum de 5 articles du même produit.",
        es:"Material: Algodón Color: negro Stock limitado. Puedes pedir un máximo de 5 artículos del mismo producto.",
      },
      imageAlt: {
      en: "Black Tshirt",
        tr: "Siyah Tshirt ",
        fr: "T-shirt Nevro",
        es: "Camiseta negro"
      },
      
    },

    pr12: {
      id: 12,
      fav: 5400,
       feedbacks: {
  photoComments: [
    { name: "buse.korkmaz", comment: "Kumaşı çok kaliteli, bayıldım!", star: 5, photo: ph28 },
 
  ],
  comments: [
    { name: "ozan.akca", comment: "Görseldeki gibi değil, biraz kandırmaca.", star: 2 },
    { name: "aysel.kutlu", comment: "Kalıbı mükemmel, çok şık duruyor.", star: 5 },
    { name: "mehmet.altan", comment: "İlk denememde çok rahatsız etti.", star: 1 },
    { name: "elif.akyol", comment: "Her şeyiyle mükemmel bir ürün.", star: 5 }
  ]
},

       stock:{
        xs:17,
        s:10,
        m:5,
        l:53,
        xl:34,
        
      },
        comments:{
        comm1:{question:"ölçüler nasıl", answer:"bedene göre,efendim"},
        comm2:{question:"çok bol mu?", answer:"bedene göre değişir efendim."},
         comm3:{question:"ölçüler nasıl", answer:"bedene göre,efendim"},
        comm4:{question:"büyük beden var mı?", answer:"evet,efendim"},
         comm5:{question:"xs nasıl olur ", answer:"bedene göre,efendim"},
        comm6:{question:"stoklar?", answer:"yakında yenilenir,efendim"},
      },
      brand:"koton",
      material:"pongee",
      style:"casual",
      wideness:"wide",
      color:"green",
      image: men3,
      kind:"men",
      rating: 3.5,
      price : 140  ,
      type:"tunic",
      
      title: {
        en: "Green Shirt",
        tr: "Yeşil T-shirt",
        fr: "t-shirt vert",
        es: "camiseta verde"
      },
      description : {
        en: "Material: Cotton Color: Green Stock is limited. You can order maximum 5 of the same product.",
        tr:"Materyal: Pamuk Renk: Yeşil Stok sınırldır. Aynı üründen en fazla 5 tane sipariş veribilir.",
        fr: "Matière : Coton Couleur : Vert Le stock est limité. Vous pouvez commander un maximum de 5 articles du même produit.",
        es:"Material: Algodón Color: Verde Stock limitado. Puedes pedir un máximo de 5 artículos del mismo producto.",
  
      },
      imageAlt: {
         en: "Green Shirt",
        tr: "Yeşil T-shirt",
        fr: "t-shirt vert",
        es: "camiseta verde"
      },
  
    },
   
    pr13: {
      id: 13, 
      fav: 6200,
        feedbacks: {
 photoComments: [
    { name: "umut.cetin", comment: "Kumaş nefes alıyor, yaz için harika.", star: 5, photo: ph31 },
     { name: "utkum", comment: "Kumaş nefes alıyor, yaz için harika.", star: 5, photo: ph32 }
  ],
  comments: [
    { name: "nur.aydin", comment: "Ürün hatalı geldi, değişim yaptım.", star: 2 },
    { name: "kerem.can", comment: "Fiyatı biraz yüksek ama değiyor.", star: 4 },
    { name: "emine.tok", comment: "Dikişleri çok düzgün, kaliteli hissettiriyor.", star: 5 },
    { name: "berrin.guler", comment: "Çok beğenmedim, kalıp bol geldi.", star: 2 },
    { name: "murat.gunay", comment: "İade süreci hızlıydı, teşekkürler.", star: 3 },
    { name: "yasemin.cicek", comment: "Renk tonu şahane, tam istediğim gibi!", star: 5 }
  ]
},

       stock:{
        xs:17,
        s:10,
        m:5,
        l:53,
        xl:34,
        
      },
        comments:{
        comm1:{question:"bol mu", answer:"evet,efendim"},
        comm2:{question:"ürün oversize mı?", answer:"evet,efendim"},
         comm3:{question:"kalıbı nasıl?", answer:"görseldeki gibidir,bedene göre değişir."},
        comm4:{question:"stoklar var mı ?", answer:"evet,efendim"},
      },
      image: men6,
      wideness:"wide",
      brand:"bershka",
      material:"cotton",
      style:"spor",
      color:"gray",
      rating: 4.5,
      kind:"men",
      price : 70  ,
      type:"pants",

      title: {
        en: "Gray Pant",
        tr: "Gri pantalon",
        fr: "Pantolon Gris",
        es: "Pantalones Grises",
      },
     
      description : {
        en: "Material: Cotton Color: Gray Stock is limited. You can order maximum 3 of the same product.",
        tr:"Materyal: Pamuk Renk: Gri Stok sınırldır. Aynı üründen en fazla 3 tane sipariş veribilir.",
        fr: "Matière : Coton Couleur : Gris Le stock est limité. Vous pouvez commander un maximum de 3 articles du même produit.",
        es:"Material: Algodón Color: Grises Stock limitado. Puedes pedir un máximo de 3 artículos del mismo producto.",

      },
      imageAlt: {
        
       en: "Gray Pant",
        tr: "Gri pantalon",
        fr: "Pantolon Gris",
        es: "Pantalones Grises",
      },
 
    },
    pr14: {
      id: 14,
      fav: 7080,
        feedbacks: {
 photoComments: [
    { name: "aydan.sen", comment: "Kargoda biraz ezilmiş ama ürün sağlamdı.", star: 3, photo: ph25 },
    { name: "ferhat.bal", comment: "Model çok hoş, rengi canlı.", star: 4, photo: ph26 },
    { name: "damla.oz", comment: "Beğenmedim, kumaş çok ince geldi.", star: 1, photo: ph27 },
   
  ],
  comments: [
    { name: "ibrahim.kaya", comment: "Kesimi dar, beden büyük alın derim.", star: 3 },
    { name: "dilara.bingol", comment: "Kalitesi çok iyi, tavsiye ediyorum.", star: 5 }
  ]
},

       stock:{
        xs:17,
        s:10,
        m:5,
        l:53,
        xl:34,
        
      },
      brand:"koton",
        comments:{
        comm1:{question:"oversize mı?", answer:"evet,efendim"},
        comm2:{question:"büyük beden olur mu? ", answer:"evet,efendim"},
        comm3:{question:"bol ürünm ü ? ", answer:"evet,efendim"},
      },
      material:"pongee",
      style:"casual",
      wideness:"wide",
      color:"white",
      image: men4,
      kind:"men",
      rating: 3.5,
      price : 140  ,
      type:"tunic",
      
      title: {
        en: "Black basic-tshirt",
        tr: "siyah-sade-tshirt",
        fr: "t-shirt noir uni",
        es: "camiseta negra lisa"
      },
      description : {
        en: "Material: Cotton Color: Black Stock is limited. You can order maximum 5 of the same product.",
        tr:"Materyal: Pamuk Renk: Siyah Stok sınırldır. Aynı üründen en fazla 5 tane sipariş veribilir.",
        fr: "Matière : Coton Couleur : Nevro Le stock est limité. Vous pouvez commander un maximum de 5 articles du même produit.",
        es:"Material: Algodón Color: negro Stock limitado. Puedes pedir un máximo de 5 artículos del mismo producto.",
  
      },
      imageAlt: {
        en: "Black basic-tshirt",
        tr: "siyah-sade-tshirt",
        fr: "t-shirt noir uni",
        es: "camiseta negra lisa"
      },
   
    },
    pr15: {
      id: 15,
      fav: 11900,
        feedbacks: {
  photoComments: [
    { name: "meltem.durmaz", comment: "Kalıbı tam oturdu, kumaşı da güzel.", star: 5, photo: ph29 },
    { name: "ozgur.deniz", comment: "Kargo yavaştı ama ürün başarılı.", star: 4, photo: ph30 }
  ],
  comments: [
    { name: "selin.yilmaz", comment: "Ürün kusurlu geldi, iade ettim.", star: 1 },
    { name: "burak.akin", comment: "İndirimdeyken almak mantıklı olabilir.", star: 3 },
    { name: "nermin.cevik", comment: "Görseldeki renkle birebir, çok iyi.", star: 5 },
    { name: "harun.kas", comment: "Ortalama, çok da iyi değil.", star: 3 },
    { name: "ayse.ozcan", comment: "Kalite olarak beklentimin üstünde.", star: 4 }
  ]
},

       stock:{
        xs:17,
        s:10,
        m:5,
        l:53,
        xl:34,
        
      },
        comments:{
        comm1:{question:"kalıbı nasıl", answer:"bedene göre değişir,efendim"},
        comm2:{question:"erkek arkadaşım için alıcam ,bedenler nasıl", answer:"beden belirtirseniz yardımcı olurum"},
          comm3:{question:"stokalr yenilenir mi", answer:"evet,efendim"},
        comm4:{question:"bedenler nasıl", answer:"fotoğraftaki gibidir."},
      },
      brand:"bershka",
      material:"pongee",
      style:"casual",
      wideness:"normal",
      color:"blue",
      image: men5,
      kind:"men",
      rating: 3.5,
      price : 140  ,
      type:"tunic",
    
      title: {
        en: "Blue Shirt",
        tr: "Mavi Tshirt",
        fr: "T-shirt Bleu",
        es: "Camiseta Azul"
      },
      description : {
        en: "Material: Cotton Color: Blue Stock is limited. You can order maximum 5 of the same product.",
        tr:"Materyal: Pamuk Renk: Mavi Stok sınırldır. Aynı üründen en fazla 5 tane sipariş veribilir.",
        fr: "Matière : Coton Couleur : Bleu Le stock est limité. Vous pouvez commander un maximum de 5 articles du même produit.",
        es:"Material: Algodón Color: Azul Stock limitado. Puedes pedir un máximo de 5 artículos del mismo producto.",
  
      },
      imageAlt: {
      en: "Blue Shirt",
        tr: "Mavi Tshirt",
        fr: "T-shirt Bleu",
        es: "Camiseta Azul"
      },
    
    },
    pr16: {
      id: 16,
      fav: 1000,
       feedbacks: {
  comments: [
    { name: "yusuf.dag", comment: "Beden büyük geldi, iade ettim.", star: 2 },
    { name: "nida.ekin", comment: "Fiyatına göre iyi performans.", star: 4 },
    { name: "feride.bilgin", comment: "Bayıldım, tekrar alırım kesin!", star: 5 }
  ]
},

       stock:{
        xs:17,
        s:10,
        m:5,
        l:53,
        xl:34,
        
      },
        comments:{
        comm1:{question:"kalıp nasıl", answer:"bedenlere göre değişir efendim"},
        comm2:{question:"stok yenilenecek mi", answer:"evet efendim"},
        comm3:{question:"stoklar?", answer:"yenilenecektir, efendim"},
      },
      brand:"koton",
      material:"pongee",
      style:"casual",
      wideness:"wide",
      color:"white",
      image: kid1,
      kind:"kid",
      rating: 2.5,
      price : 120  ,
      type:"tunic",
      cargo : {
        en:"Cargo",
        tr:"Kargo",
        fr:"cargaison",
        es:"carga",
      },
      title: {
        en: "Kid Sweater ",
        tr: "Çocuk Kazağı",
        fr: "Pull pour enfant",
        es: "Suéter para niños"
      },
      description : {
        en: "Material: Cotton Color: Black Stock is limited. You can order maximum 5 of the same product.",
        tr:"Materyal: Pamuk Renk: Siyah Stok sınırldır. Aynı üründen en fazla 5 tane sipariş veribilir.",
        fr: "Matière : Coton Couleur : Nevro Le stock est limité. Vous pouvez commander un maximum de 5 articles du même produit.",
        es:"Material: Algodón Color: Negro Stock limitado. Puedes pedir un máximo de 5 artículos del mismo producto.",
  
      },
      imageAlt: {
       en: "Kid Sweater ",
        tr: "Çocuk Kazağı",
        fr: "Pull pour enfant",
        es: "Suéter para niños"
      },
   
    },
      pr17: {
      id: 17,
      fav: 1000,
       feedbacks: {
   
  comments: [
    { name: "nurcan.alp", comment: "Kargo geç geldiği için 1 puan kırdım.", star: 4 },
    { name: "okan.ergin", comment: "Tam beklediğim gibi, kaliteli.", star: 5 },
    { name: "zeynep.cetinkaya", comment: "Renk solmuş geldi, hayal kırıklığı.", star: 1 },
    { name: "salih.temur", comment: "Kalıbı biraz tuhaf geldi bana.", star: 2 },
    { name: "gulsah.kose", comment: "Rahat, şık ve tam bedenime uygun.", star: 5 },
    { name: "tugba.aydin", comment: "Yumuşak kumaş, günlük kullanım için ideal.", star: 4 }
  ]
},

       stock:{
        xs:17,
        s:10,
        m:5,
        l:53,
        xl:34,
        
      },
        comments:{
        comm1:{question:"stoklar yenilenir mi", answer:"evet,efendim"},
        comm2:{question:"görseldeki gibi mi rengi", answer:"evet,efendim"},
        comm3:{question:"rengi nasıl", answer:"görseldeki gibidir,efendim"},
        comm4:{question:"görseldeki gibi mi", answer:"evet,efendim"},
      },
      brand:"mavi",
      material:"pongee",
      style:"casual",
      wideness:"wide",
      color:"black",
      image: kid2,
      kind:"kid",
      rating: 2.5,
      price : 120  ,
      type:"pants",
      
      title: {
        en: "Kid Pants ",
        tr: "Çocuk Takım",
        fr: "Pantalons pour enfants",
        es: "Pantalones para niños"
      },
      description : {
        en: "Material: Cotton Color: Black Stock is limited. You can order maximum 5 of the same product.",
        tr:"Materyal: Pamuk Renk: Siyah Stok sınırldır. Aynı üründen en fazla 5 tane sipariş veribilir.",
        fr: "Matière : Coton Couleur : Nevro Le stock est limité. Vous pouvez commander un maximum de 5 articles du même produit.",
        es:"Material: Algodón Color: Negro Stock limitado. Puedes pedir un máximo de 5 artículos del mismo producto.",
  
      },
      imageAlt: {
         en: "Kid Pants ",
        tr: "Çocuk Takım",
        fr: "Pantalons pour enfants",
        es: "Pantalones para niños"
      },
  
    },
    pr18: {
      id: 18,
      fav: 800,
       feedbacks: {
 
  comments: [
    { name: "mehmet.caglar", comment: "Beklediğimden iyi geldi, öneririm.", star: 4 },
    { name: "aylin.dogan", comment: "Fotoğraftakiyle birebir değil.", star: 2 },
    { name: "kaan.yurdakul", comment: "Kargo süresi uzundu, ürün iyi.", star: 3 },
    { name: "sema.bulut", comment: "Kalıbı çok güzel oturdu.", star: 5 },
    { name: "taha.gunes", comment: "Hediye aldım, çok beğenildi.", star: 5 }
  ]
},

       stock:{
        xs:17,
        s:10,
        m:5,
        l:53,
        xl:34,
        
      },
        comments:{
        comm1:{question:"rengi fotoğraftaki gibi mi acaba?", answer:"evet,efendim"},
        comm2:{question:"kullancıılar renk soluk diyor", answer:"hayır,efendim."},
      },
      brand:"koton",
      material:"pongee",
      style:"casual",
      wideness:"wide",
      color:"gray",
      image: kid3,
      kind:"kid",
      rating: 2.5,
      price : 120  ,
      type:"pants",
    
        title: {
        en: "Kid Pants ",
        tr: "Çocuk Takım",
        fr: "Pantalons pour enfants",
        es: "Pantalones para niños"
      },
      description : {
        en: "Material: Cotton Color: Gray Stock is limited. You can order maximum 5 of the same product.",
        tr:"Materyal: Pamuk Renk: Gri Stok sınırldır. Aynı üründen en fazla 5 tane sipariş veribilir.",
        fr: "Matière : Coton Couleur : Gray Le stock est limité. Vous pouvez commander un maximum de 5 articles du même produit.",
        es:"Material: Algodón Color: Grises Stock limitado. Puedes pedir un máximo de 5 artículos del mismo producto.",
  
      },
      imageAlt: {
          en: "Kid Pants ",
        tr: "Çocuk Takım",
        fr: "Pantalons pour enfants",
        es: "Pantalones para niños"
      },
 
    },
    pr19: {
      id: 19,
      fav: 16000,
     feedbacks: {
  comments: [
    { name: "gizem.kaya", comment: "Günlük kullanım için uygun.", star: 4 },
    { name: "fatih.ayaz", comment: "Biraz daha kalın olsaydı harika olurdu.", star: 3 },
    { name: "yasemin.ergul", comment: "Ne çok iyi ne çok kötü.", star: 3 },
    { name: "tuncay.sel", comment: "Yumuşacık kumaşı var, tavsiye ederim.", star: 5 }
  ]
},

       stock:{
        xs:17,
        s:10,
        m:5,
        l:53,
        xl:34,
        
      },
      brand:"koton",
      material:"pongee",
        comments:{
        comm1:{question:"cok dar mı", answer:"bedene göre değişir efendim."},
        comm2:{question:"çocugum icin alıcam, bedenler yenilenirr mi", answer:"tabii ki,efendim."},
      },
      style:"casual",
      wideness:"wide",
      color:"black",
      image: kid4,
      kind:"kid",
      rating: 2.5,
      price : 520  ,
      type:"sweater",
      

      title: {
        en: "Kid Sweater ",
        tr: "Çocuk Kazağı",
        fr: "Pull pour enfant",
        es: "Suéter para niños"
      },
      description : {
        en: "Material: Cotton Color: Red Stock is limited. You can order maximum 5 of the same product.",
        tr:"Materyal: Pamuk Renk: Kırmızı Stok sınırldır. Aynı üründen en fazla 5 tane sipariş veribilir.",
        fr: "Matière : Coton Couleur : Rouge Le stock est limité. Vous pouvez commander un maximum de 5 articles du même produit.",
        es:"Material: Algodón Color: Rojo Stock limitado. Puedes pedir un máximo de 5 artículos del mismo producto.",
  
      },
      imageAlt: {
         en: "Kid Sweater ",
        tr: "Çocuk Kazağı",
        fr: "Pull pour enfant",
        es: "Suéter para niños"
      },
  
    },
    pr20: {
      id: 20,
      fav: 100,
     feedbacks: {

  comments: [
    { name: "mehmet.caglar", comment: "Beklediğimden iyi geldi, öneririm.", star: 4 },
    { name: "aylin.dogan", comment: "Fotoğraftakiyle birebir değil.", star: 2 },
    { name: "kaan.yurdakul", comment: "Kargo süresi uzundu, ürün iyi.", star: 3 },
    { name: "sema.bulut", comment: "Kalıbı çok güzel oturdu.", star: 5 },
    { name: "taha.gunes", comment: "Hediye aldım, çok beğenildi.", star: 5 }
  ]
},

       stock:{
        xs:17,
        s:10,
        m:5,
        l:53,
        xl:34,
        
      },
      brand:"koton",
        comments:{
        comm1:{question:"cocugum ıcın almak ıstıyorum,bedenler bol mu", answer:"biraz oversizedır efendim."},
        comm2:{question:"diğer renkleri var mı?", answer:"bu üründen sadece bu renk bulunur efendim"},
        comm3:{question:"bedenler bol mu", answer:"biraz oversizedır efendim."},
        comm4:{question:"baska renkler?", answer:"bu üründen sadece bu renk bulunur efendim"},
      },
      material:"pongee",
      style:"casual",
      wideness:"wide",
      color:"purple",
      image: kid6,
      kind:"kid",
      rating: 2.5,
      price : 120  ,
      type:"tunic",
      cargo : {
        en:"Cargo",
        tr:"Kargo",
        fr:"cargaison",
        es:"carga",
      },
      title: {
        en: "Kid Sweater ",
        tr: "Çocuk Kazağı",
        fr: "Pull pour enfant",
        es: "Suéter para niños"
      },
      description : {
        en: "Material: Cotton Color: Red Stock is limited. You can order maximum 5 of the same product.",
        tr:"Materyal: Pamuk Renk: Kırmızı Stok sınırldır. Aynı üründen en fazla 5 tane sipariş veribilir.",
        fr: "Matière : Coton Couleur : Rouge Le stock est limité. Vous pouvez commander un maximum de 5 articles du même produit.",
        es:"Material: Algodón Color: Rojo Stock limitado. Puedes pedir un máximo de 5 artículos del mismo producto.",
  
      },
      imageAlt: {
       en: "Kid Sweater ",
        tr: "Çocuk Kazağı",
        fr: "Pull pour enfant",
        es: "Suéter para niños"
      },
   
    },
   pr21: {
      id: 21,
      fav: 507,
      feedbacks: {

  comments: [
    { name: "orhan.bingol", comment: "Ürün açıklamadaki gibi değil.", star: 1 },
    { name: "ayse.kurt", comment: "Rengi canlı, kumaşı rahat.", star: 5 },
    { name: "cenk.kayra", comment: "Fiyatına göre idare eder.", star: 3 },
    { name: "serap.san", comment: "Kumaş kalitesini beğenmedim.", star: 2 },
    { name: "mert.arslan", comment: "Tam beden, tam konfor.", star: 5 },
    { name: "elif.guler", comment: "Görseldeki kadar kaliteli değil.", star: 2 }
  ]
},

       stock:{
        xs:17,
        s:10,
        m:5,
        l:53,
        xl:34,
        
      },
      brand:"mavi",
      material:"pongee",
      style:"spor",
        comments:{
        comm1:{question:"ürünün baska renklerı var mı ?", answer:"maalesef efendim"},
        comm2:{question:"ürün bollaşma yapıyoor mu", answer:"hayır,efendim"},
        comm3:{question:"bol beden var mı?", answer:"hayır,efendim"},
      },
      wideness:"wide",
      color:"white",
      image: kid5,
      kind:"kid",
      rating: 2.2,
      price : 134  ,
      type:"sweater",
      title: {
        en: "Kid Sweater ",
        tr: "Çocuk Kazağı",
        fr: "Pull pour enfant",
        es: "Suéter para niños"
      },
      description : {
        en: "Material: Cotton Color: White Stock is limited. You can order maximum 5 of the same product.",
        tr:"Materyal: Pamuk Renk: Beyaz Stok sınırldır. Aynı üründen en fazla 5 tane sipariş veribilir.",
        fr: "Matière : Coton Couleur : Blanc Le stock est limité. Vous pouvez commander un maximum de 5 articles du même produit.",
        es:"Material: Algodón Color: Blanco Stock limitado. Puedes pedir un máximo de 5 artículos del mismo producto.",
  
      },
      imageAlt: {
        en: "Kid Sweater ",
        tr: "Çocuk Kazağı",
        fr: "Pull pour enfant",
        es: "Suéter para niños"
      },

     
    },
       pr22: {
      id: 22,
      fav: 4000,
     feedbacks: {

  comments: [
    { name: "kerem.altay", comment: "Hafif ve rahat bir ürün.", star: 4 },
    { name: "melis.oz", comment: "Dikiş yerleri biraz özensizdi.", star: 2 },
    { name: "serkan.tan", comment: "Fiyatını hak ediyor.", star: 5 }
  ]
},

       stock:{
        xs:17,
        s:10,
        m:5,
        l:53,
        xl:34,
        
      },
      brand:"mavi",
        comments:{
        comm1:{question:"rengi fotodaki gibi mi", answer:"evet,efendim"},
        comm2:{question:"iz bırakıyor mu", answer:"hayır,efendim"},
         comm3:{question:"iz kalıyor mu?", answer:"hayır,efendim"},
      },
      material:"pongee",
      style:"casual",
      wideness:"wide",
      color:"white",
      image: jew1,
      kind:"jewerly",
      rating: 3.2,
      price : 70  ,
      type:"necklace",
      
      title: {
        en: "White Necklace ",
        tr: "Beyaz Kolye",
        fr: "Collier blanc",
        es: "collar blanco"
      },
      description : {
        en: "Material: Cotton Color: White Stock is limited. You can order maximum 5 of the same product.",
        tr:"Materyal: Pamuk Renk: beyeaz Stok sınırldır. Aynı üründen en fazla 5 tane sipariş veribilir.",
        fr: "Matière : Coton Couleur : Blanc Le stock est limité. Vous pouvez commander un maximum de 5 articles du même produit.",
        es:"Material: Algodón Color: Blanco Stock limitado. Puedes pedir un máximo de 5 artículos del mismo producto.",
  
      },
      imageAlt: {
        en: "White Necklace ",
        tr: "Beyaz Kolye",
        fr: "Collier blanc",
        es: "collar blanco"
      },
  
    },
     pr23: {
      id: 23,
      fav: 7000,
       feedbacks: {
  
  comments: [
    { name: "asuman.gok", comment: "Deseni çok hoşuma gitti.", star: 4 },
    { name: "hakan.ozdemir", comment: "Tavsiye etmem, kalitesiz duruyor.", star: 1 }
  ]
},

       stock:{
        xs:17,
        s:10,
        m:5,
        l:53,
        xl:34,
        
      },
        comments:{
        comm1:{question:"kopma oluyor mu", answer:"hayır,efendim"},
       
      },
      brand:"mavi",
      material:"pongee",
      style:"casual",
      wideness:"normal",
      color:"white",
      image: jew2,
      kind:"jewerly",
      rating: 4.2,
      price : 110  ,
      type:"necklace",
    
      title: {
        en: "ehite necklace ",
        tr: "beyaz kolye",
        fr: "Collier blanc",
        es: "collar blanco"
      },
      description : {
        en: "Material: Cotton Color: White Stock is limited. You can order maximum 5 of the same product.",
        tr:"Materyal: Pamuk Renk: Beyaz Stok sınırldır. Aynı üründen en fazla 5 tane sipariş veribilir.",
        fr: "Matière : Coton Couleur : Blanc Le stock est limité. Vous pouvez commander un maximum de 5 articles du même produit.",
        es:"Material: Algodón Color: Blanc Stock limitado. Puedes pedir un máximo de 5 artículos del mismo producto.",
  
      },
      imageAlt: {
       en: "ehite necklace ",
        tr: "beyaz kolye",
        fr: "Collier blanc",
        es: "collar blanco"
      },
 
    },
     pr24: {
      id: 24,
      fav: 6000,
    feedbacks: {
 
  comments: [
    { name: "asuman.gok", comment: "Deseni çok hoşuma gitti.", star: 4 },
    { name: "hakan.ozdemir", comment: "Tavsiye etmem, kalitesiz duruyor.", star: 1 }
  ]
},

       stock:{
        xs:17,
        s:10,
        m:5,
        l:53,
        xl:34,
        
      },
      brand:"bershka",
      material:"pongee",
      style:"party",
      wideness:"normal",
      color:"white",
        comments:{
        comm1:{question:"kız arkadasıma alıcam ,iz cıkarıyor mu", answer:"hayır,efendim"},
        comm2:{question:"tek bu rengi mi var", answer:"evet,efendım"},
      },
      image: jew3,
      kind:"jewerly",
      rating: 3.6,
      price : 70  ,
      type:"necklace",
     
      title: {
        en: "white necklace ",
        tr: "beyaz kolye",
        fr: "Collier blanc",
        es: "collar blanco"
      },
      description : {
        en: "Material: Cotton Color: White Stock is limited. You can order maximum 5 of the same product.",
        tr:"Materyal: Pamuk Renk: Beyaz Stok sınırldır. Aynı üründen en fazla 5 tane sipariş veribilir.",
        fr: "Matière : Coton Couleur : Blanc Le stock est limité. Vous pouvez commander un maximum de 5 articles du même produit.",
        es:"Material: Algodón Color: Blanco Stock limitado. Puedes pedir un máximo de 5 artículos del mismo producto.",
  
      },
      imageAlt: {
        en: "white necklace ",
        tr: "beyaz kolye",
        fr: "Collier blanc",
        es: "collar blanco"
      },
     
    },
      pr25: {
      id: 25,
      fav: 3000,
    feedbacks: {

  comments: [
    { name: "omer.selim", comment: "Tüylenme yaptı 2. giyişte.", star: 2 },
    { name: "zeynep.karaboga", comment: "Renkleri çok tatlı.", star: 5 },
    { name: "fatma.yuce", comment: "Fiyat/performans ürünü.", star: 4 },
    { name: "cem.ilgaz", comment: "Daha kaliteli bekliyordum.", star: 3 }
  ]
},

       stock:{
        xs:17,
        s:10,
        m:5,
        l:53,
        xl:34,
        
      },
        comments:{
        comm1:{question:"parmak ölçüsü nedir", answer:"ince parmaklara uygundur"},
        comm2:{question:"cok dar bir  yapısı var mı", answer:"hayır efendim."},
      },
      brand:"mavi",
      material:"pongee",
      style:"casual",
      wideness:"normal",
      color:"white",
      image: jew4,
      kind:"jewerly",
      rating: 4.2,
      price : 610  ,
      type:"ring",
     
      title: {
        en: "Stylish ring",
        tr: "şık yüzük",
        fr: "Bague élégante",
        es: "Anillo elegante"
      },
      description : {
        en: "Material: Cotton Color: Red Stock is limited. You can order maximum 5 of the same product.",
        tr:"Materyal: Pamuk Renk: Kırmızı Stok sınırldır. Aynı üründen en fazla 5 tane sipariş veribilir.",
        fr: "Matière : Coton Couleur : Rouge Le stock est limité. Vous pouvez commander un maximum de 5 articles du même produit.",
        es:"Material: Algodón Color: Rojo Stock limitado. Puedes pedir un máximo de 5 artículos del mismo producto.",
  
      },
      imageAlt: {
        en: "Stylish ring",
        tr: "şık yüzük",
        fr: "Bague élégante",
        es: "Anillo elegante"
      },
    
    },
    pr26: {
      id: 26,
      fav: 2000,
      stock: { xs: 0, s: 0, m: 0, l: 0, xl: 0 },
       feedbacks: {

  comments: [
    { name: "canan.yildiz", comment: "Kumaşı nefes alıyor, çok rahat.", star: 5 },
    { name: "nuri.aksoy", comment: "Kalıbı dar, bir beden büyük alın.", star: 4 }
  ]
},

        comments:{
        comm1:{question:"ince parmağa olur mu bol mu oluır", answer:"ayarı vardır efendim."},
        comm2:{question:"bol olur mu", answer:"ayarı vardır efendim."},
      },
      brand:"mavi",
      material:"pongee",
      style:"party",
      wideness:"normal",
      color:"red",
      image: jew5,
      kind:"jewerly",
      rating: 2.2,
      price : 420  ,
      type:"ring",
   
      title: {
        en: "ring ",
        tr: "yüzük",
        fr: "anneau",
        es: "anillo"
      },
      description : {
        en: "Material: Cotton Color: White Stock is limited. You can order maximum 5 of the same product.",
        tr:"Materyal: Pamuk Renk: Beyaz Stok sınırldır. Aynı üründen en fazla 5 tane sipariş veribilir.",
        fr: "Matière : Coton Couleur : Blanc stock est limité. Vous pouvez commander un maximum de 5 articles du même produit.",
        es:"Material: Algodón Color: Blanco Stock limitado. Puedes pedir un máximo de 5 artículos del mismo producto.",
  
      },
      imageAlt: {
       en: "ring ",
        tr: "yüzük",
        fr: "anneau",
        es: "anillo"
      },
     
    },
    pr27: {
      id: 27,
      fav: 10000,
      stock: { xs: 12, s: 4, m: 5, l: 0, xl: 0 },
        feedbacks: {

  comments: [
    { name: "taylan.omer", comment: "İş yerinde herkes sordu nereden aldın diye.", star: 5 },
    { name: "nazan.kinik", comment: "Ürün kaliteli ama çok pahalı.", star: 3 },
    { name: "baran.cetin", comment: "Tam hayal ettiğim gibi geldi.", star: 5 }
  ]
},

        comments:{
        comm1:{question:"rengı fotograftakı gıbı mı?", answer:"evet,efendım"},
        comm2:{question:"bol oluyor mu?", answer:"hayır,efendım"},
      },
      brand:"mavi",
      material:"pongee",
      style:"party",
      wideness:"normal",
      color:"white",
      image: jew6,
      kind:"jewerly",
      rating: 2.2,
      price : 420  ,
      type:"ring",
    
      title: {
        en: "ring ",
        tr: "yüzük",
        fr: "anneau",
        es: "anillo"
      },
      description : {
        en: "Material: Cotton Color: White Stock is limited. You can order maximum 5 of the same product.",
        tr:"Materyal: Pamuk Renk: Beyaz Stok sınırldır. Aynı üründen en fazla 5 tane sipariş veribilir.",
        fr: "Matière : Coton Couleur : Blanc Le stock est limité. Vous pouvez commander un maximum de 5 articles du même produit.",
        es:"Material: Algodón Color: Blanco Stock limitado. Puedes pedir un máximo de 5 artículos del mismo producto.",
  
      },
      imageAlt: {
       en: "ring ",
        tr: "yüzük",
        fr: "anneau",
        es: "anillo"
      },
   
    },
     pr28: {
      id: 28, 
      fav:4230,
      stock:{
        xs:13,
        s:5,
        m:7,
        l:53,
        xl:11,
        
      },
     
      image: home1,
        comments:{
        comm1:{question:"ölçüsü ne kadar", answer:"açıklmada belirtilmiştir efendim."},
        comm2:{question:"salona uyar mı?", answer:"salon ölçnüze göre değişir." , },
      },
    feedbacks: {
 
  comments: [
  { name: "selda.yilmaz", comment: "Ürün beklediğim gibi geldi, çok memnunum.", star: 5 },
  { name: "okan.durmus", comment: "Kalitesi orta düzeyde ama kullanılabilir.", star: 3 },
  { name: "nazli.karaca", comment: "Beden tam uydu, rengi de çok güzel.", star: 4 },
  ]
},

      wideness:"wide",
      brand:"ikea",
      material:"cotton",
      style:"casual",
      color:"white",
      rating: 34.5,
      kind:"home",
      price : 550  ,
      type:"carpet",

      title: {
        en: "White Carpet",
        tr: "Beyaz halı ",
        fr: "tapis blanc",
        es: "alfombra blanca",
      },
 
      description : {
        en: "Material: Cotton Color: White Stock is limited. You can order maximum 3 of the same product.",
        tr:"Materyal: Pamuk Renk: Kırmızı Stok sınırldır. Aynı üründen en fazla 3 tane sipariş veribilir.",
        fr: "Matière : Coton Couleur : Rouge Le stock est limité. Vous pouvez commander un maximum de 3 articles du même produit.",
        es:"Material: Algodón Color: Rojo Stock limitado. Puedes pedir un máximo de 3 artículos del mismo producto.",

      },
      imageAlt: {
        
        en: "carpet white",
        tr: "beyaz halı",
        fr: "tapis blanc",
        es: "alfombra blanca"
      },
      
  
     
    },
       pr29: {
      id: 29, 
      fav:4230,
      stock:{
        xs:13,
        s:14,
        m:7,
        l:12,
        xl:13,
        
      },
     
      image: home2,
        comments:{
        comm1:{question:"görseldeki gibi mi?", answer:"evet efendim."},
        comm2:{question:"büyüklüğü nasıldır", answer:"açıklamada yer alıyor efendim." , },
      },
    feedbacks: {

  comments: [
  { name: "selda.c", comment: "Ürün beklediğim gibiydi", star: 5 },
  { name: "okann", comment: "Kalitesi orta düzeyde.", star: 3 },
  { name: "nazz", comment: "rengini cokk sevdim", star: 4 },
  ]
},

      wideness:"wide",
      brand:"ikea",
      material:"cotton",
      style:"casual",
      color:"nude",
      rating: 2.5,
      kind:"home",
      price : 450  ,
      type:"carpet",

      title: {
        en: "Beige Carpet",
        tr: "Krem halı ",
        fr: "tapis crème",
        es: "alfombra color crema",
      },
      description : {
        en: "Material: Cotton Color: Beige. Stock is limited. You can order maximum 3 of the same product.",
        tr:"Materyal: Pamuk Renk: Krem. Stok sınırldır. Aynı üründen en fazla 3 tane sipariş veribilir.",
        fr: "Matière : Coton Couleur : Creme Le stock est limité. Vous pouvez commander un maximum de 3 articles du même produit.",
        es:"Material: Algodón Color: Crema Stock limitado. Puedes pedir un máximo de 3 artículos del mismo producto.",

      },
      imageAlt: {
        
        en: "carpet white",
        tr: "beyaz halı",
        fr: "tapis blanc",
        es: "alfombra blanca"
      },
    },
     pr30: {
      id: 30, 
      fav:2320,
      stock:{
        xs:4,
        s:4,
        m:24,
        l:34,
        xl:32,
        
      },
     
      image: home3,
        comments:{
        comm1:{question:"çok büyük mü?", answer:"ölçüsü açıklamada yer alıyor."},
        comm2:{question:"rengi fotoğraftaki gibi mi?", answer:"evet,efendim" , },
      },
    feedbacks: {

  comments: [
  { name: "selda.c", comment: "Ürün beklediğim gibiydi", star: 5 },
  { name: "okann", comment: "Kalitesi orta düzeyde.", star: 3 },
  { name: "nazz", comment: "rengini cokk sevdim", star: 4 },
  ]
},

      wideness:"wide",
      brand:"ikea",
      material:"plastic",
      style:"casual",
      color:"white",
      rating: 2.5,
      kind:"home",
      price : 550  ,
      type:"cabinet",

      title: {
        en: "white cabinet",
        tr: "beyaz dolap ",
        fr: "placard blanc",
        es: "armario blanco",
      },

      description : {
        en: "Material: plastic Color: White. Stock is limited. You can order maximum 3 of the same product.",
        tr:"Materyal: plastik Renk: Beyaz. Stok sınırldır. Aynı üründen en fazla 3 tane sipariş veribilir.",
        fr: "Matière : plastico Couleur : blacn. Le stock est limité. Vous pouvez commander un maximum de 3 articles du même produit.",
        es:"Material: plastico Color: blanco Stock limitado. Puedes pedir un máximo de 3 artículos del mismo producto.",

      },
      imageAlt: {
        
        en: "white cabinet",
        tr: "beyaz dolap",
        fr: "placard blanc",
        es: "armario blanca"
      },
    },
        pr31: {
      id: 31, 
      fav:6730,
      stock:{
        xs:32,
        s:8,
        m:54,
        l:32,
        xl:32,
        
      },
     
      image: home4,
        comments:{
        comm1:{question:"rengi soluyor mu?", answer:"hayır,efendim"},
        comm2:{question:"kolay temizlenir mi?", answer:"evet,efendim" , },
          comm3:{question:"rengi fotoğraftakı gibi mi?", answer:"evet,efendim"},
        comm4:{question:"temizlenir mi?", answer:"evet,efendim" , },
      },
    feedbacks: {
 
  comments: [
  { name: "deren", comment: "Ürün iyi", star: 5 },
  { name: "cansu", comment: "Kalitesi  baya iyi ", star: 4 },
  { name: "kerem", comment: "rengi mükemmel ", star: 5 },
  ]
},

      wideness:"wide",
      brand:"ikea",
      material:"plastic",
      style:"casual",
      color:"black",
      rating: 4.5,
      kind:"home",
      price : 550  ,
      type:"cabinet",

      title: {
        en: "black cabinet",
        tr: "Siyah dolap ",
        fr: "placard noir",
        es: "armario negro",
      },
     
      description : {
        en: "Material: plastic Color: Black. Stock is limited. You can order maximum 3 of the same product.",
        tr:"Materyal: plastik Renk: Siyah. Stok sınırldır. Aynı üründen en fazla 3 tane sipariş veribilir.",
        fr: "Matière : plastico Couleur : Noir. Le stock est limité. Vous pouvez commander un maximum de 3 articles du même produit.",
        es:"Material: plastico Color: Negro.Stock limitado. Puedes pedir un máximo de 3 artículos del mismo producto.",

      },
      imageAlt: {
        
        en: "black cabinet",
        tr: "siyah dolap",
        fr: "placard noir",
        es: "armario negro"
      },
    },
     pr32: {
      id: 32, 
      fav:4520,
      stock:{
        xs:54,
        s:44,
        m:54,
        l:62,
        xl:23,
        
      },
     
      image: home5,
        comments:{
        comm1:{question:"kolay temizlenir mi?", answer:"evet efendim."},
  
      },
    feedbacks: {

  comments: [
  { name: "kuzuvkm", comment: "sevdimm yakıştı ", star: 5 },
  { name: "arzu", comment: "Kalitesi  baya iyi ", star: 4 },
  { name: "myynm", comment: "rengi mükemmel ", star: 5 },
  ]
},

      wideness:"normal",
      brand:"ikea",
      material:"cotton",
      style:"casual",
      color:"nude",
      rating: 3.5,
      kind:"home",
      price : 550  ,
      type:"seat",

      title: {
        en: "nude seat",
        tr: "krem koltuk ",
        fr: "canapé crème",
        es: "sofá color crema",
      },

      description : {
        en: "Material: cotton Color: Beige. Stock is limited. You can order maximum 3 of the same product.",
        tr:"Materyal: cotton Renk: Krem. Stok sınırldır. Aynı üründen en fazla 3 tane sipariş veribilir.",
        fr: "Matière : cotton Couleur : Crema. Le stock est limité. Vous pouvez commander un maximum de 3 articles du même produit.",
        es:"Material: cotton Color: Creme.Stock limitado. Puedes pedir un máximo de 3 artículos del mismo producto.",

      },
      imageAlt: {
        
        en: "beige seat",
        tr: "krem kanepe",
        fr: "canapé crème",
        es: "sofá color crema"
      },
    },
     pr33: {
      id: 33, 
      fav:1220,
      stock:{
        xs:34,
        s:42,
        m:12,
        l:4,
        xl:23,
        
      },
     
      image: home6,
        comments:{
        comm1:{question:" takım mı?", answer:"hayır, efendim"},
        comm2:{question:"rengi beyaz  mı", answer:"evet efendım" , },
         comm1:{question:"koltuk genişliği nasıl", answer:"koltuk görseldeki gibidir."},
      
      },
    feedbacks: {

  comments: [
  { name: "kuzuvkm", comment: "sevdimm yakıştı ", star: 5 },
  { name: "arzu", comment: "Kalitesi  baya iyi ", star: 4 },
  { name: "myynm", comment: "rengi mükemmel ", star: 5 },
  ]
},

      wideness:"wide",
      brand:"ikea",
      material:"cotton",
      style:"casual",
      color:"white",
      rating: 2.5,
      kind:"home",
      price : 1150  ,
      type:"seat",

      title: {
        en: "nude seat",
        tr: "krem koltuk ",
        fr: "canapé crème",
        es: "sofá color crema",
      },
      cargo : {
        en:"Cargo",
        tr:"Kargo",
        fr:"cargaison",
        es:"carga",
      },
      description : {
        en: "Material: cotton Color: Beige. Stock is limited. You can order maximum 3 of the same product.",
        tr:"Materyal: cotton Renk: Krem. Stok sınırldır. Aynı üründen en fazla 3 tane sipariş veribilir.",
        fr: "Matière : cotton Couleur : Crema. Le stock est limité. Vous pouvez commander un maximum de 3 articles du même produit.",
        es:"Material: cotton Color: Creme.Stock limitado. Puedes pedir un máximo de 3 artículos del mismo producto.",

      },
      imageAlt: {
        
        en: "beige seat",
        tr: "krem kanepe",
        fr: "canapé crème",
        es: "sofá color crema"
      },
    },





    
   
  };

  return (
    <ProductsContext.Provider value={{ products, locale }}>
      {children}
    </ProductsContext.Provider>
  );
};

 export const useProductsContext = () => useContext(ProductsContext);
