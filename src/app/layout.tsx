import './globals.css'
import styles from "./Home.module.css"
// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       {/*
//         <head /> will contain the components returned by the nearest parent
//         head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
//       */}
//       <head />
//       <body>
        
//         {children}</body>
//     </html>
//   )
// }

export default function RootLayout({ children }) {
  return (
    <>
    
      <head></head>
      <body>
        <br />
        <center>
         <h1 >Rana Muhammad Reebaal Hussain</h1>
          <br /><br /><br /><br />
          <h1 style={{color: "green" }}>Daily Progress Diary</h1>
          <br /><br />
          <h1 className={styles.mainheading}> Work To do </h1></center>
          <br /><br /><br /><br />
        <br />
        {children}
      </body>
      
   </>
    
  );
}

