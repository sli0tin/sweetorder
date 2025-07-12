import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBoUv5YTd2ZalQ_mdkOVZF13ps_XYvmtBk",
  authDomain: "shortage-tracker-f0054.firebaseapp.com",
  projectId: "shortage-tracker-f0054",
  storageBucket: "shortage-tracker-f0054.appspot.com",
  messagingSenderId: "61596664058",
  appId: "1:61596664058:web:77ee76208afe58a0b20943",
  measurementId: "G-6FLDKD3PLH"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const products = [
  {ar: "كعك فلسطيني", en: "Palestinian Kaak (½ kg)"},
  {ar: "معمول تمر الحبوب الاربعة حبوب كاملة", en: "Date Maamoul with Four Whole Grains"},
  // أضف باقي المنتجات هنا بنفس الشكل
];

async function addProducts() {
  for (const product of products) {
    try {
      await addDoc(collection(db, "products"), product);
      console.log(`تمت إضافة المنتج: ${product.ar}`);
    } catch (error) {
      console.error("خطأ في إضافة المنتج:", error);
    }
  }
  console.log("انتهى تحميل جميع المنتجات.");
}

addProducts();
