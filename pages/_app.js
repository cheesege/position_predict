//app是所有頁面共用的最上層文件
//任何在 _app.js 中匯入的樣式都會套用到整個應用程式的所有頁面。
import '../styles/global.css'

export default function App({ Component, pageProps}) {
    return <Component {...pageProps} />;
}