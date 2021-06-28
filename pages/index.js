import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Jurathlon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          <img src="/jurathlon-logo-2021-full.jpg" />
        </h1>

        <section>
          <h2>25.07.2021<br />Kroczyce-Piaseczno</h2>
          <p>szczegóły wkrótce</p>
        </section>

        <section>
          <p><img src="/jurathlon-57.jpg" /></p>
        </section>

        <section>
          <h2>Wyniki 2020</h2>
          <p>
            <a href="/wyniki2020/JurathlonRun2020-6km.pdf" target="_blank">6km</a>,&nbsp;
            <a href="/wyniki2020/JurathlonRun2020-12km.pdf" target="_blank">12km</a>,&nbsp;
            <a href="/wyniki2020/JurathlonRun2020-18km.pdf" target="_blank">18km</a>,&nbsp;
            <a href="/wyniki2020/JurathlonRun2020-24km.pdf" target="_blank">24km</a>
          </p>
        </section>

        <section>
          <h2>Active Jura</h2>
          <p className="links">
              <a href="https://www.facebook.com/ActiveJura/" target="_blank">facebook.com/ActiveJura</a><br />
              tel 603 353 850
          </p>
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

        .videoWrapper {
          position: relative;
          padding-bottom: 56.25%; /* 16:9 */
          height: 0;
        }
        .videoWrapper iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
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
