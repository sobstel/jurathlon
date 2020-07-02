import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          <img src="/jurathlon-logo-full.jpg" />
        </h1>

        <p className="description">
          <iframe width="100%" height="600" src="https://www.traseo.pl/mapa/176788/m/0/h/0/i/0/g/0/hd/1/cd/1/km/1/" frameBorder="0" style={{border:"1px solid #000"}}></iframe>
        </p>
      </main>



      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          width: 100%;
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }


        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
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
