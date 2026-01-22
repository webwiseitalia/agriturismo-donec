import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { siteData } from '../constants/siteData'

export default function CookiePolicy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-[#F5F0E8]">
      {/* Header */}
      <header className="bg-[#1a1714] text-[#F5F0E8] py-6 px-6 md:px-12">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-fluid-sm font-body hover:text-[#C4A35A] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Torna alla Home
          </Link>
        </div>
        <div className="mt-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-[#C4A35A]/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-[#C4A35A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h1 className="text-fluid-3xl font-display">Cookie Policy</h1>
              <p className="text-fluid-sm text-[#F5F0E8]/60">Informativa sull'utilizzo dei cookie</p>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="px-6 md:px-12 py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 md:p-12 shadow-sm">
            <p className="text-fluid-xs text-[#6B5D4D] mb-8">
              Ultimo aggiornamento: {siteData.policyLastUpdate}
            </p>

            {/* Privacy-Friendly Notice */}
            <div className="bg-green-50 border border-green-200 p-6 rounded-sm mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-fluid-base font-medium text-green-800 mb-2">Sito Privacy-Friendly</h3>
                  <p className="text-fluid-sm text-green-700">
                    Questo sito web utilizza <strong>solo cookie tecnici</strong> necessari al funzionamento. <strong>Non utilizziamo cookie di profilazione, tracciamento o analisi</strong>. La tua privacy è protetta e non serve il tuo consenso per la navigazione.
                  </p>
                </div>
              </div>
            </div>

            {/* 1. Cosa sono i Cookie */}
            <section className="mb-10">
              <h2 className="text-fluid-xl font-display text-[#1a1714] mb-4">
                1. Cosa sono i Cookie
              </h2>
              <p className="text-fluid-sm text-[#6B5D4D]">
                I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo (computer, tablet o smartphone) quando visiti un sito web. I cookie permettono al sito di riconoscere il tuo dispositivo e memorizzare alcune informazioni sulle tue preferenze o azioni passate.
              </p>
            </section>

            {/* 2. Tipologie di Cookie */}
            <section className="mb-10">
              <h2 className="text-fluid-xl font-display text-[#1a1714] mb-4">
                2. Tipologie di Cookie
              </h2>

              <h3 className="text-fluid-base font-medium text-[#1a1714] mb-3">
                2.1 Cookie Tecnici
              </h3>
              <p className="text-fluid-sm text-[#6B5D4D] mb-4">
                Sono cookie necessari al funzionamento del sito e permettono di navigare e utilizzare le funzionalità base. Senza questi cookie, il sito potrebbe non funzionare correttamente.
              </p>
              <div className="bg-[#C4A35A]/10 border-l-4 border-[#C4A35A] p-4 mb-6">
                <p className="text-fluid-sm font-medium text-[#1a1714] mb-2">Cookie tecnici utilizzati su questo sito:</p>
                <ul className="list-disc list-inside text-fluid-sm text-[#6B5D4D] space-y-1 ml-2">
                  <li>Cookie di navigazione e di sessione</li>
                  <li>Cookie per memorizzare le preferenze dell'interfaccia</li>
                </ul>
                <p className="text-fluid-xs text-[#6B5D4D] mt-3 italic">
                  Secondo la normativa vigente, i cookie tecnici non richiedono il consenso dell'utente.
                </p>
              </div>

              <h3 className="text-fluid-base font-medium text-[#1a1714] mb-3">
                2.2 Cookie Analitici
              </h3>
              <div className="bg-red-50 border-l-4 border-red-300 p-4 mb-6">
                <p className="text-fluid-sm text-red-700 flex items-center gap-2">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                  <strong>NON UTILIZZATI</strong>
                </p>
                <p className="text-fluid-sm text-red-600 mt-2">
                  Questo sito NON utilizza cookie analitici come Google Analytics o simili per tracciare il comportamento degli utenti.
                </p>
              </div>

              <h3 className="text-fluid-base font-medium text-[#1a1714] mb-3">
                2.3 Cookie di Profilazione
              </h3>
              <div className="bg-red-50 border-l-4 border-red-300 p-4 mb-6">
                <p className="text-fluid-sm text-red-700 flex items-center gap-2">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                  <strong>NON UTILIZZATI</strong>
                </p>
                <p className="text-fluid-sm text-red-600 mt-2">
                  Questo sito NON utilizza cookie di profilazione per creare profili utente o inviare pubblicità mirata.
                </p>
              </div>

              <h3 className="text-fluid-base font-medium text-[#1a1714] mb-3">
                2.4 Cookie di Terze Parti
              </h3>
              <div className="bg-red-50 border-l-4 border-red-300 p-4">
                <p className="text-fluid-sm text-red-700 flex items-center gap-2">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                  <strong>NON UTILIZZATI</strong>
                </p>
                <p className="text-fluid-sm text-red-600 mt-2">
                  Questo sito NON utilizza servizi di terze parti che installano cookie (Facebook Pixel, Google Ads, ecc.).
                </p>
              </div>
            </section>

            {/* 3. Cookie Utilizzati */}
            <section className="mb-10">
              <h2 className="text-fluid-xl font-display text-[#1a1714] mb-4">
                3. Cookie Utilizzati su Questo Sito
              </h2>
              <p className="text-fluid-sm text-[#6B5D4D] mb-4">
                Il nostro sito utilizza esclusivamente i seguenti cookie tecnici:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-fluid-sm border-collapse">
                  <thead>
                    <tr className="bg-[#F5F0E8]">
                      <th className="text-left p-3 font-medium text-[#1a1714] border border-[#1a1714]/10">Nome Cookie</th>
                      <th className="text-left p-3 font-medium text-[#1a1714] border border-[#1a1714]/10">Tipologia</th>
                      <th className="text-left p-3 font-medium text-[#1a1714] border border-[#1a1714]/10">Finalità</th>
                      <th className="text-left p-3 font-medium text-[#1a1714] border border-[#1a1714]/10">Durata</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border border-[#1a1714]/10 text-[#6B5D4D]">{siteData.cookieKey}</td>
                      <td className="p-3 border border-[#1a1714]/10">
                        <span className="inline-block px-2 py-1 bg-[#C4A35A]/20 text-[#C4A35A] text-xs rounded">Tecnico</span>
                      </td>
                      <td className="p-3 border border-[#1a1714]/10 text-[#6B5D4D]">Memorizza lo stato di espansione/chiusura della barra laterale per migliorare l'esperienza di navigazione</td>
                      <td className="p-3 border border-[#1a1714]/10 text-[#6B5D4D]">7 giorni</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-[#C4A35A]/10 border-l-4 border-[#C4A35A] p-4 mt-6">
                <p className="text-fluid-sm text-[#6B5D4D]">
                  <strong>Nota importante:</strong> I cookie tecnici come "{siteData.cookieKey}" sono essenziali per il funzionamento del sito e non richiedono il consenso dell'utente ai sensi del Provvedimento del Garante Privacy n. 229/2014 e del GDPR.
                </p>
              </div>
            </section>

            {/* 4. Come Gestire i Cookie */}
            <section className="mb-10">
              <h2 className="text-fluid-xl font-display text-[#1a1714] mb-4">
                4. Come Gestire i Cookie
              </h2>
              <p className="text-fluid-sm text-[#6B5D4D] mb-4">
                Anche se i cookie tecnici non richiedono consenso, puoi comunque gestirli o eliminarli attraverso le impostazioni del tuo browser.
              </p>
              <p className="text-fluid-sm font-medium text-[#1a1714] mb-3">
                Disabilitare i cookie tramite il browser:
              </p>
              <ul className="list-disc list-inside text-fluid-sm text-[#6B5D4D] space-y-2 ml-4 mb-6">
                <li><strong>Google Chrome:</strong> Impostazioni → Privacy e sicurezza → Cookie e altri dati dei siti</li>
                <li><strong>Mozilla Firefox:</strong> Preferenze → Privacy e sicurezza → Cookie e dati dei siti web</li>
                <li><strong>Safari:</strong> Preferenze → Privacy → Cookie e dati dei siti web</li>
                <li><strong>Microsoft Edge:</strong> Impostazioni → Cookie e autorizzazioni del sito → Gestisci e elimina cookie</li>
              </ul>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
                <p className="text-fluid-sm text-amber-800">
                  <strong>Attenzione:</strong> La disabilitazione completa dei cookie tecnici potrebbe compromettere alcune funzionalità del sito e ridurre la qualità dell'esperienza di navigazione.
                </p>
              </div>
            </section>

            {/* 5. Link a Siti Esterni */}
            <section className="mb-10">
              <h2 className="text-fluid-xl font-display text-[#1a1714] mb-4">
                5. Link a Siti Esterni
              </h2>
              <p className="text-fluid-sm text-[#6B5D4D]">
                Il nostro sito potrebbe contenere link a siti web di terze parti. Non siamo responsabili per le pratiche di privacy o il contenuto di tali siti esterni. Ti invitiamo a leggere le informative sulla privacy dei siti che visiti.
              </p>
            </section>

            {/* 6. Aggiornamenti */}
            <section className="mb-10">
              <h2 className="text-fluid-xl font-display text-[#1a1714] mb-4">
                6. Aggiornamenti della Cookie Policy
              </h2>
              <p className="text-fluid-sm text-[#6B5D4D] mb-4">
                Questa Cookie Policy può essere modificata nel tempo. Eventuali modifiche sostanziali saranno comunicate attraverso un avviso pubblicato su questa pagina.
              </p>
              <p className="text-fluid-sm text-[#6B5D4D]">
                Ti invitiamo a consultare periodicamente questa pagina per rimanere aggiornato sull'utilizzo dei cookie sul nostro sito.
              </p>
            </section>

            {/* 7. Base Normativa */}
            <section className="mb-10">
              <h2 className="text-fluid-xl font-display text-[#1a1714] mb-4">
                7. Base Normativa
              </h2>
              <p className="text-fluid-sm text-[#6B5D4D] mb-4">
                Questa Cookie Policy è redatta in conformità a:
              </p>
              <ul className="list-disc list-inside text-fluid-sm text-[#6B5D4D] space-y-2 ml-4">
                <li>Regolamento (UE) 2016/679 del Parlamento Europeo (GDPR)</li>
                <li>Direttiva 2002/58/CE (Direttiva ePrivacy) aggiornata dalla Direttiva 2009/136/CE</li>
                <li>Provvedimento del Garante per la protezione dei dati personali dell'8 maggio 2014, n. 229</li>
                <li>Linee guida cookie e altri strumenti di tracciamento del 10 giugno 2021</li>
              </ul>
            </section>

            {/* 8. Contatti */}
            <section>
              <h2 className="text-fluid-xl font-display text-[#1a1714] mb-4">
                8. Contatti
              </h2>
              <p className="text-fluid-sm text-[#6B5D4D] mb-4">
                Per domande o chiarimenti su questa Cookie Policy, puoi contattarci:
              </p>
              <div className="bg-[#F5F0E8] p-4 rounded-sm">
                <p className="font-medium text-[#1a1714] mb-2">{siteData.nomeCompleto}</p>
                <p className="text-fluid-sm text-[#6B5D4D]">{siteData.indirizzo.completo}</p>
                <p className="text-fluid-sm text-[#6B5D4D]">
                  Email:{' '}
                  <a href={`mailto:${siteData.email}`} className="text-[#C4A35A] hover:underline">
                    {siteData.email}
                  </a>
                </p>
                <p className="text-fluid-sm text-[#6B5D4D]">Tel: {siteData.telefono}</p>
              </div>
            </section>

            {/* Zero Tracking Badge */}
            <div className="mt-12 pt-8 border-t border-[#1a1714]/10">
              <div className="bg-green-50 p-6 rounded-sm text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-fluid-base font-medium text-green-800 mb-2">Zero Tracciamento</h3>
                <p className="text-fluid-sm text-green-700">
                  Naviga tranquillo: questo sito rispetta la tua privacy e non traccia le tue attività online.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#1a1714]/20 text-[#1a1714] font-body tracking-wide hover:border-[#C4A35A] hover:text-[#C4A35A] transition-colors"
            >
              Torna alla Home
            </Link>
            <Link
              to="/privacy-policy"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1a1714] text-[#F5F0E8] font-body tracking-wide hover:bg-[#C4A35A] transition-colors"
            >
              Leggi la Privacy Policy
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#1a1714] text-[#F5F0E8] py-8 px-6 md:px-12 mt-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-fluid-sm text-[#F5F0E8]/60 mb-2">{siteData.nomeCompleto}</p>
          <p className="text-fluid-xs text-[#F5F0E8]/40">{siteData.indirizzo.completo}</p>
          <p className="text-fluid-xs text-[#F5F0E8]/40 mt-1">P.IVA: {siteData.partitaIva}</p>
        </div>
      </footer>
    </div>
  )
}
