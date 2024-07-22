// control the initial response from the server
//HTML檔案結構
import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html>
      <link rel="preload" href='../public/fonts/Cubic_11_1.300_R.woff2' as='font' type='font/woff2' crossOrigin=''></link>
      <title>
        酷酷的落點分析
      </title>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}