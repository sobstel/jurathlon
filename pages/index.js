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
          <h2>19.07.2020, godz: 10:00<br />Kroczyce-Piaseczno</h2>
          <p>Zapraszamy na zawody biegowe na Jurze Krakowsko-Częstochowskiej. Zaplanowaliśmy atrakcyjną trasę leśną wśród jurajskich skał, jaskiń i Zamku Bąkowiec (Zawiercie-Skarżyce) w przepięknych okolicznościach przyrody.</p>
          <p>Dystanse: 6km, 12km, 18km, 24km.</p>
          <p>
              Zapisy: <a href="https://sportmaniacs.com/pl/services/inscription/jurathlon-run-2020#registrations" target="_blank">sportmaniacs.com</a><br />
              Info: <a href="https://www.facebook.com/events/2622123298003333/" target="_blank">facebook.com/events/2622123298003333/</a><br />
              Organizator: <a href="https://www.facebook.com/ActiveJura/" target="_blank">Active Jura</a> (tel 603 353 850)
          </p>
        </section>


        <section>
          <h2>Trasa</h2>
          <div className="map-wrapper">
            <iframe width="100%" height="500" src="https://www.traseo.pl/mapa/176788/m/0/h/0/i/0/g/0/hd/1/cd/1/km/1/" frameBorder="0"></iframe>
          </div>
          <p>
            Mapki:{" "}
            <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.google.com%2Fmaps%2Fd%2Fviewer%3Fmid%3D1301ERW5nOq3HLD1by-zOwgJs3vB0Qpn7%26fbclid%3DIwAR20SxcAvRpz8_VkwRwvZ2NN6xiPUL9T9vFVeoFqxlwo2_9RZXD34-B7sG8&h=AT1KBVl26oahcl17SQNMnAFYbPfeXc0RrYZnpPZmyqnfoh7WSuwj7s_WXioiqV9oGNkjfGv8jicCrrsgt09ut0oxYMf6cl9E8poipsPkfvSDbo2_OHRehzLTk8X3zDpKyK6dP9w5qcZj3d4CW3zxRz8LerCqfH6yU4EMi-wu5ElNfV3pySfNyx6wz3tnr_DeiSFp_arYi1dpzpQWH-ClKvIVi39pvBNvpcZEw-5T0rRC0i7Alq5_nZucTZCUye8uVM-GLicXJLJ09BwzLITmf7vCryfAJcpmHP5qGN8X9ZWrOqGje_neCUSCmSZG5PNjVWg1gvft595kVDme_6zM1l34ZIk7LZYndR6T2ACEmhyNQlU-fcxGGCrnN152GyEX-Gv56ndbdz7NRblU0YN_3d0Tda1Hl9ydsbeSO1-N64Jh8KDFsztHsoekuFoodsW1lSkO0XByPn5ELxFichlffp0pl9cUeyRWS54aUjmyT2wvwahnE2QkabGttLuEN9o-cal4NHzl70URW6g-jt-ADmAlYl2qH7tMbzHq9mzC2UuN5c2RzuSrsGvTBNT5is2ob4o40JlEVBacWQSTo-T6rE5K7hdHEAXiMZckM_Sc7Ok1zw" target="_blank">Google Maps</a>,{" "}
            <a href="https://www.traseo.pl/trasa/jurathlon-run-19-07-2020">Traseo</a>.
          </p>
        </section>
      </main>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          max-width: 800px;
          padding: 1rem;
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
        }
        p {
          text-align: center;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title img {
          max-width: 100%;
        }

        a {
          color: #988a7a;
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
          font-family: monospace;
          color: #655848;
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
