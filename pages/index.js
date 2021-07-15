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
          <p className="nocenter">
             Jurajskie skały i jaskinie. Zamek Bąkowiec. Szlak Orlich Gniazd. Leśne ścieżki. Piękne widoki. Dużo miejsca na piknik dla rodzin i kibiców na malowniczo położonym Motylkowym Wzgórzu. Kameralna atmosfera. Organizowane przez miłośników Jury, biegania i aktywnego trybu życia. Zapraszamy!
          </p>
          <div className="banner">
            <ul>
              <li>Wokół Cydzownika - <strong>BIEG 6km</strong>{registrationOpened && <span>, 49zł (<a href="https://sportmaniacs.com/pl/services/inscription/auth/jurathlon-run-2021/60dd87b4-8a24-4ecd-b60a-0709ac1f13ab" target="_blank">zapisz mnie</a>)</span>}</li>
              <li>Przez Dziadową Skałę - <strong>BIEG 12km</strong>{registrationOpened && <span>, 49zł (<a href="https://sportmaniacs.com/pl/services/inscription/auth/jurathlon-run-2021/60dd87e5-4110-4bfd-b398-075eac1f0c87" target="_blank">zapisz mnie</a>)</span>}</li>
              <li>Pod Lechworem - <strong>BIEG 21km</strong>{registrationOpened && <span>, 59zł (<a href="https://sportmaniacs.com/pl/services/inscription/auth/jurathlon-run-2021/60dd87fe-71b0-449e-b6fb-0709ac1f13ab" target="_blank">zapisz mnie</a>)</span>}</li>
              <li>Nietoperzowy Marsz - <strong>NORDIC WALKING 6km</strong>{registrationOpened && <span>, 49zł (<a href="https://sportmaniacs.com/pl/services/inscription/auth/jurathlon-run-2021/60dd88ae-84c4-4e8a-8c26-070aac1f13ab" target="_blank">zapisz mnie</a>)</span>}</li>
            </ul>
            <div style={{paddingLeft: 2.75 + 'rem'}}>
              {registrationOpened ?
                  <p className="nocenter">
                    <a href="https://sportmaniacs.com/pl/services/inscription/jurathlon-run-2021" className="register" target="_blank">ZAPISZ MNIE</a>
                  </p>
                  :
                  <p className="nocenter">
                    Oficjalne zapisy otwieramy w <strong>niedzielę, 4-go lipca 2021r</strong>.
                  </p>
              }
            </div>
          </div>
          <p className="nocenter">
            <em>Jeśli zostaną dostępne miejsca, to będzie można też się zapisać w dniu zawodów za 60zł (6km/12km) i 70zł (21km).</em>
          </p>
          <p className="nocenter">
            {registrationOpened && <><a href="https://sportmaniacs.com/pl/services/inscription/jurathlon-run-2021" target="_blank">Zapisy na Jurathlon 2021</a><br /></>}
            <a href="https://www.facebook.com/events/892557964631173/" target="_blank">Wydarzenie Jurathlon 2021 na Facebooku</a><br/>
          </p>
        </section>

        <section>
          <h2>Atrakcje</h2>
          <p className="nocenter">
            🏅 Medale i statuetki<br/>
            🎁 Nagrody niespodzianki<br/>
            🎙 Komentator live (Stanisław Wrzesiński)<br/>
            ⏱ Profesjonalny pomiar czasu<br/>
            📸 Zdjęcia, 🎥 filmy z drona<br/>
            ⛺️ Depozyt, przebieralnia<br/>
            🌴 Strefa relaksu (leżaki i hamaki), zabierzcie kocyki i hamaki jeśli ktoś posiada, bo drzew jest sporo do wykorzystania<br/>
            🥔 Pieczonki - lokalny specjał na bazie ziemniaków przyrządzany w specjalnym kociołku (przygotowaniem zajmie się Szlachta Skarżycka!)<br/>
            🔥 Ognisko po biegu (prowiant we własnym zakresie)<br/>
            🍦 Lody włoskie, 🧇 gofry, 🥤 lemoniada, ☕️ kawa<br/>
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
            <b>07:30-09:30</b> Odbiór numerów, zapisy na biegi dla dzieci<br />
            <b>09:30-10:00</b> Biegi dla dzieci<br />
            <b>10:15</b> Rozgrzewka i odprawa techniczna<br />
            <b>10:30</b> Start (w odstępach co ok. 1 min)<br />
            <b>od ok. 11:30</b> Ognisko (prowiant we własnym zakresie)<br />
            <b>14:00</b> Dekoracja zwycięzców K i M (dla wszystkich dystansów)<br />
            <b>14:30</b> Losowanie nagród wśród obecnych uczestników zawodów<br />
            <b>16:00</b> Zakończenie imprezy
          </p>
        </section>


        <section>
          <h2>6km/12km</h2>
          <table>
            <tr>
              <th>Trasa</th>
              <td>
                <a href="https://www.traseo.pl/trasa/jurathlon-6km-1" target="_blank">traseo.pl/trasa/jurathlon-6km-1</a><br />
                (bieg 12km to dwie pętle 6km)
              </td>
            </tr>
            <tr>
              <th>Przewyższenia</th>
              <td>↑↓ 150m (6km), ↑↓ 300m (12km)</td>
            </tr>
            <tr>
              <th>Punkty odżywcze</th>
              <td>
                2km/8km (Zamek Bąkowiec) - woda<br />
                meta/6km (Motylkowe Wzgórze) - woda, banany
              </td>
            </tr>
            <tr>
              <th>Limit czasu</th>
              <td>1h (bieg 6km), 1.5h (marsz NW), 2h (bieg 12km)</td>
            </tr>
            <tr>
              <th>Wpisowe</th>
              <td>49zł (<a href="https://sportmaniacs.com/pl/services/inscription/jurathlon-run-2021" target="_blank">zapisz mnie</a>) / 60zł (w dniu zawodów)</td>
            </tr>
          </table>
          <div>
            <iframe width="100%" height="666" src="https://www.traseo.pl/mapa/176788/m/0/h/0/i/0/g/0/hd/1/cd/1/km/1/" frameBorder="0"></iframe>
          </div>
        </section>

        <section>
          <h2>21km</h2>
          <table>
            <tr>
              <th>Trasa</th>
              <td><a href="https://www.traseo.pl/trasa/pod-lechworem-oficjal" target="_blank">traseo.pl/trasa/pod-lechworem-oficjal</a></td>
            </tr>
            <tr>
              <th>Przewyższenia</th>
              <td>↑↓ 450m</td>
            </tr>
            <tr>
              <th>Punkty odżywcze</th>
              <td>
                9km (Skały Rzędkowickie) - woda, banany<br />
                15km (Zamek Bąkowiec) - woda<br />
                meta (Motylkowe Wzgórze) - woda, banany
              </td>
            </tr>
            <tr>
              <th>Limit czasu</th><td>3.5h</td>
            </tr>
            <tr>
              <th>Wpisowe</th>
              <td>59zł (<a href="https://sportmaniacs.com/pl/services/inscription/jurathlon-run-2021" target="_blank">zapisz mnie</a>) / 70zł (w dniu zawodów)</td>
            </tr>
          </table>
          <div>
            <iframe width="100%" height="666" src="https://www.traseo.pl/mapa/218037/m/0/h/0/i/0/g/0/hd/1/cd/1/km/1/" frameBorder="0"></iframe>
          </div>
        </section>

        <section>
          <h2>Biegi dla dzieci</h2>
          <p className="nocenter">
            Pierwsza grupa - 5-7 lat (roczniki 2016-2014) - dystans 100m<br />
            Druga grupa - 8-11 lat (roczniki 2013-2010) - dystans 200m<br />
            Trzecia grupa - 12-15 lat (roczniki 2009-2006) - dystans 450 m<br />
          </p>
          <p className="nocenter">
            Limit 20 dzieci w każdej grupie - decyduje kolejność zgłoszeń.
          </p>
          <p className="nocenter">
            Wpisowe: 10zł.
          </p>
          <p className="nocenter">
            Warunkiem uczestnictwa w biegach dla dzieci jest wypełnienie formularza zgłoszeniowego przez rodzica lub opiekuna prawnego, wyrażającego zgodę na udział w biegu osoby niepełnoletniej i biorącego za nią pełną odpowiedzialność.
            Podczas zapisów opiekun uczestnika musi okazać dokument umożliwiający potwierdzenie tożsamości.
          </p>
        </section>


        <section>
          <h2>Dojazd/Parking</h2>
          <p className="nocenter">
            Najlepszy dojazd jest drogą 78. Następnie należy skręcić w Lgocie Murowanej koło Pizzeri Jurajskiej (od strony drogi, w którą skręcamy) i sklepu Odido (po drugiej stronie ulicy), zielony drogowskaz na “Morsko”.
            Potem jedziemy prosto ok 3km, podziwiamy jurajskie widoki, aż dojedziemy do skrzyżowania we wsi Piaseczno (jest tylko jedno).
            Skręcamy w prawo za przystankiem i za ok 300m jesteśmy na parkingu głównym (po lewej stronie). Jesteśmy na miejscu!
          </p>
          <p className="nocenter">
            Lokalizacja parkingu głównego: <a href="https://goo.gl/maps/bezCNuvd1gVYqmpD7" target="_blank">goo.gl/maps/bezCNuvd1gVYqmpD7</a><br />
          </p>
          <div>
            <a href="/jurathlon-dojazd2-big.jpg" target="_blank">
              <img src="/jurathlon-dojazd2.jpg" />
            </a>
          </div>
        </section>

        <section>
          <h2>Biuro zawodów</h2>
          <p className="nocenter">
            Z parkingu idziemy wzdłuż betonowego płotu z oznaczeniami czerwonego szlaku.
            Po około 500m po lewej stronie zobaczymy skałę Cydzownik za którą skręcamy w lewo i wąską ścieżką po kolejnych 300m dochodzimy do znajdującej się po lewej stronie polany <em>Motylkowe Wzgórze</em>,
            gdzie w namiocie oznaczonym napisem BIURO ZAWODÓW będzie można odebrać pakiet startowy. Start/meta będzie zaraz obok biura.
          </p>
          <p className="nocenter">
            Lokalizacja biura i startu/mety: <a href="https://goo.gl/maps/Zhf794ybZJJwkPEt9" target="_blank">goo.gl/maps/Zhf794ybZJJwkPEt9</a>
          </p>
          <div>
            <a href="/jurathlon-dojazd1-big.jpg" target="_blank">
              <img src="/jurathlon-dojazd1.jpg" />
            </a>
          </div>
        </section>

        <section>
          <h2>Partnerzy</h2>
          <div>
            <a href="/partnerzy2021.jpg" target="_blank">
              <img src="/partnerzy2021.jpg" />
            </a>
          </div>
        </section>

        <section>
          <h2>Tak było... (Jurathlon 2020)</h2>
          <div className="videoWrapper">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/qnqjF9choYc" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
          <h2>Organizator</h2>
          <p className="links">
              Stowarzyszenie Active Jura, Kroczyce<br />
              <a href="https://www.facebook.com/ActiveJura/" target="_blank">facebook.com/ActiveJura</a><br />
              info&#64;activejura&#46;pl<br />
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
        section, table {
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
        table {
          border-collapse: collapse;
          margin: 2rem 0;
        }
        td, th {
          text-align: left;
          vertical-align: top;
          border: 1px solid #999;
          padding: 0.5rem 1rem;
        }
        th {
          width: 25%;
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
          word-break: break-all;
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

        .banner {
          background: #cbbeae;
          padding: 0.5rem 0;
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
