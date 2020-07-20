import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Jurathlon Run 2020</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          <img src="/jurathlon-logo-full.jpg" />
        </h1>

        <section>
          <h2>19.07.2020<br />Kroczyce-Piaseczno</h2>
          <p className="links">
              Organizator: <a href="https://www.facebook.com/ActiveJura/" target="_blank">Active Jura</a><br />
              tel 603 353 850
          </p>
        </section>

        <section>
          <h2>Zwycięzcy</h2>
          <p><b>6km (K)</b></p>
          <p>
            1. Agnieszka Kapalska 32:13<br/>
            2. Agata Łuszczyna 34:36<br />
            3. Marysia Drozd 37:01<br/>
          </p>
          <p><b>6km (M)</b></p>
          <p>
            1. Łukasz Karpiński 25:18<br />
            2. Tomasz Latos 26:21<br/>
            3. Michał Gajewicz 26:59
          </p>
          <p><b>12km (K)</b></p>
          <p>
            1. Agnieszka Wilk 1:11:12<br />
            2. Ewelina Niedbała 1:13:33<br/>
            3. Justyna Kękuś 1:16:17<br />
          </p>
          <p><b>12km (M)</b></p>
          <p>
            1. Damian Brzeziński 52:44<br />
            2. Stanisław Magiera 54:53<br />
            3. Robert Wręczycki 55:14<br />
          </p>
          <p><b>18km (K)</b></p>
          <p>
            1. Justyna Adamus Kowalska 1:37:06<br />
            2. Daria Piguła 2:03:13<br />
            3. Wiola Wilk 2:06:43<br />
          </p>
          <p><b>18km (M)</b></p>
          <p>
            1. Andrzej Majewski 1:28:11<br />
            2. Adam Banaśkiewicz 1:33:39<br />
            3. Przemysław Cabaj 1:35:01<br />
          </p>
          <p><b>24km (K)</b></p>
          <p>
            1. Beata Lange 02:04:03<br />
            2. Agnieszka Czyżewska 2:11:13<br />
            3. Sylwia Skrzypek 2:11:51<br />
          </p>
          <p><b>24km (M)</b></p>
          <p>
            1. Grzegorz Pituch 1:44:42<br />
            2. Dominik Sas 1:57:13<br />
            3. Tamas Vojak 2:00:54<br />
          </p>
        </section>

        <section>
          <h2>Wyniki</h2>
          <p>
            <a href="/wyniki2020/JurathlonRun2020-6km.pdf" target="_blank">Wyniki 6km</a><br />
            <a href="/wyniki2020/JurathlonRun2020-12km.pdf" target="_blank">Wyniki  12km</a><br />
            <a href="/wyniki2020/JurathlonRun2020-18km.pdf" target="_blank">Wyniki  18km</a><br />
            <a href="/wyniki2020/JurathlonRun2020-24km.pdf" target="_blank">Wyniki  24km</a><br/>
          </p>
        </section>



        <section>
          <h2>Sponsorzy i patronat</h2>
          <img src="/sponsors.jpg" />
        </section>
      </main>

      <style jsx>{`
        .container {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          max-width: 760px;
          padding: 2rem 0.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        section {
          width: 100%;
        }

        h1 {
          margin: 0; padding: 0;
        }
        h2 {
          text-transform: uppercase;
          text-align: center;
          border-top: 2px dashed #655747;
          border-bottom: 2px dashed #655747;
          padding: 0.5rem 0;
          margin: 2rem 0;
        }
        p {
          text-align: center;
        }
        p.nocenter {
          text-align: left;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        img {
          max-width: 100%;
        }

        a {
          color: #877969;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: monospace;
          color: #544737;
          font-size: 1.1rem;
          line-height: 1.5;
        }

        * {
          box-sizing: border-box;
        }

        body {
          background-color: #DCCFBF;
        }
      `}</style>
    </div>
  )
}
