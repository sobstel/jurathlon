import Head from 'next/head'

export default function Home() {
  const registrationOpened = new Date('Jul 04 2021') - new Date() < 0;

  return (
    <div className="container">
      <Head>
        <title>Jurathlon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          <img src="/jurathlon-logo.png" />
        </h1>

        <section>
          <h2>25.07.2021<br />Kroczyce-Piaseczno</h2>
          <ul>
            <li>Wokół Cydzownika - BIEG <strong>6km</strong>{registrationOpened && <span>, 49zł (<a href="https://sportmaniacs.com/pl/services/inscription/auth/jurathlon-run-2021/60dd87b4-8a24-4ecd-b60a-0709ac1f13ab" target="_blank">zapisz mnie</a>)</span>}</li>
            <li>Przez Dziadową Skałę - BIEG <strong>12km</strong>{registrationOpened && <span>, 49zł (<a href="https://sportmaniacs.com/pl/services/inscription/auth/jurathlon-run-2021/60dd87e5-4110-4bfd-b398-075eac1f0c87" target="_blank">zapisz mnie</a>)</span>}</li>
            <li>Pod Lechworem - BIEG <strong>21km</strong>{registrationOpened && <span>, 59zł (<a href="https://sportmaniacs.com/pl/services/inscription/auth/jurathlon-run-2021/60dd87fe-71b0-449e-b6fb-0709ac1f13ab" target="_blank">zapisz mnie</a>)</span>}</li>
            <li>Nietoperzowy Marsz - NORDIC WALKING <strong>6km</strong>{registrationOpened && <span>, 49zł (<a href="https://sportmaniacs.com/pl/services/inscription/auth/jurathlon-run-2021/60dd88ae-84c4-4e8a-8c26-070aac1f13ab" target="_blank">zapisz mnie</a>)</span>}</li>
          </ul>
          <div style={{paddingLeft: 2.75 + 'rem'}}>
            {registrationOpened ?
                <div>
                  <p className="nocenter">
                    <em>Pierwsze 20 osób dla każdego biegu i pierwsze 10 osób dla NW, zapisuje się ze zniżką 10zł.</em>
                  </p>
                  <p className="nocenter">
                    <a href="https://sportmaniacs.com/pl/services/inscription/jurathlon-run-2021" className="register">ZAPISZ MNIE</a>
                  </p>
                </div>
                :
                <p className="nocenter">
                  Oficjalne zapisy otwieramy w <strong>niedzielę, 4-go lipca 2021r</strong>.
                </p>
            }
          </div>
          <ul>
            {registrationOpened && <li><a href="https://sportmaniacs.com/pl/services/inscription/jurathlon-run-2021" target="_blank">Zapisy na Jurathlon 2021</a></li>}
            <li><a href="https://www.facebook.com/events/892557964631173/" target="_blank">Wydarzenie Jurathlon 2021 na Facebooku</a></li>
          </ul>
        </section>

        <section>
          <h2>Trasa 6km/12km</h2>
          <div>
            <iframe width="100%" height="666" src="https://www.traseo.pl/mapa/176788/m/0/h/0/i/0/g/0/hd/1/cd/1/km/1/" frameBorder="0"></iframe>
          </div>
          <p className="nocenter">Bieg 12km to dwie pętle 6km.</p>
        </section>

        <section>
          <h2>Trasa 21km (wstępny projekt)</h2>
          <p className="nocenter">Przebieg trasy może ulec zmianie. Wciąż jeszcze biegamy, pedałujemy i&nbsp;testujemy ;-)  Jednak jedno jest pewne, za wszelką cenę na dystansie 21km chcemy uniknąć kilku pętli.</p>
          <div>
            <iframe width="100%" height="666" src="https://www.traseo.pl/mapa/216965/m/0/h/0/i/0/g/0/hd/1/cd/1/km/1/" frameBorder="0"></iframe>
          </div>
        </section>

        <section>
          <h2>Atrakcje</h2>
          <p className="nocenter">
            🏅 Medale i statuetki<br/>
            🎁 Nagrody niespodzianki<br/>
            🎙 Komentator live (Stanisław Wrzesiński)<br/>
            ⏱ Profesjonalny pomiar czasu<br/>
            {/*📸 Zdjęcia, 🎥 filmy z drona<br/> */}
            ⛺️ Depozyt, przebieralnia<br/>
            🌴 Strefa relaksu (leżaki i hamaki){/*, zabierzcie kocyki i hamaki jeśli ktoś posiada, bo drzew jest sporo do wykorzystania)*/}<br/>
            🔥 Ognisko po biegu (prowiant we własnym zakresie)<br/>
            ☕️ Kawa z Bike Café (kupon rabatowy w każdym pakiecie startowym)<br/>
          </p>
          <p className="nocenter">
            ... i kilka innych rzeczy, których jesteśmy w trakcie potwierdzania
          </p>
        </section>

        <section>
          <h2>Program</h2>
          <p className="nocenter"><strong>SOBOTA 24.07</strong></p>
          <p className="nocenter">
            <b>18:00-20:00</b> Odbiór numerów<br />
          </p>
          <p className="nocenter"><strong>NIEDZIELA 25.07</strong></p>
          <p className="nocenter">
            <b>07:30-09:30</b> Odbiór numerów<br />
            <b>09:45</b> Rozgrzewka i odprawa techniczna<br />
            <b>10:00</b> Start (w odstępach co ok. 1 min)<br />
            <b>od ok. 11:00</b> Ognisko (prowiant we własnym zakresie)<br />
            <b>13:30</b> Dekoracja zwycięzców K i M (dla wszystkich dystansów)<br />
            <b>16:00</b> Zakończenie imprezy
          </p>
        </section>

        <section>
          <h2>Lokalizacja</h2>
          <p className="nocenter">
            Lokalizacja biura zawodów i startu/mety: <a href="https://goo.gl/maps/Zhf794ybZJJwkPEt9" target="_blank">goo.gl/maps/Zhf794ybZJJwkPEt9</a>
          </p>
          <div>
            <a href="/jurathlon-dojazd2-big.jpg" target="_blank">
              <img src="/jurathlon-dojazd2.jpg" />
            </a>
          </div>
        </section>

        <section>
          <h2>Jurathlon Run 2020</h2>
          <div className="videoWrapper">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/qnqjF9choYc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <p><img src="/jurathlon-57.jpg" /></p>
          <p>
            Wyniki:&nbsp;
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
          /* font-size: 4rem; */
        }

        img {
          max-width: 100%;
        }

        a {
          color: #8a6d69;
        }
        a.register {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: #8a6d69;
          color: #ccc;
          border-radius: 0.25rem;
          text-decoration: none;
        }
        a.register:hover {
          background: #ac8f8b;
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
          color: #240803;
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
