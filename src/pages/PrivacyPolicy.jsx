import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { siteData } from '../constants/siteData'

export default function PrivacyPolicy() {
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h1 className="text-fluid-3xl font-display">Privacy Policy</h1>
              <p className="text-fluid-sm text-[#F5F0E8]/60">Informativa sul trattamento dei dati personali</p>
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

            {/* 1. Titolare del Trattamento */}
            <section className="mb-10">
              <h2 className="text-fluid-xl font-display text-[#1a1714] mb-4">
                1. Titolare del Trattamento
              </h2>
              <p className="text-fluid-sm text-[#6B5D4D] mb-4">
                Il Titolare del trattamento dei dati personali è:
              </p>
              <div className="bg-[#F5F0E8] p-6 rounded-sm">
                <p className="font-medium text-[#1a1714] mb-2">{siteData.nomeCompleto}</p>
                <p className="text-fluid-sm text-[#6B5D4D]">
                  <span className="inline-flex items-center gap-2 mb-1">
                    <svg className="w-4 h-4 text-[#C4A35A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {siteData.indirizzo.completo}
                  </span>
                </p>
                <p className="text-fluid-sm text-[#6B5D4D]">
                  <span className="inline-flex items-center gap-2 mb-1">
                    <svg className="w-4 h-4 text-[#C4A35A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {siteData.telefono}
                  </span>
                </p>
                <p className="text-fluid-sm text-[#6B5D4D]">
                  <span className="inline-flex items-center gap-2 mb-1">
                    <svg className="w-4 h-4 text-[#C4A35A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {siteData.email}
                  </span>
                </p>
                <p className="text-fluid-sm text-[#6B5D4D]">
                  <span className="inline-flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#C4A35A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    P.IVA: {siteData.partitaIva}
                  </span>
                </p>
              </div>
            </section>

            {/* 2. Dati Raccolti */}
            <section className="mb-10">
              <h2 className="text-fluid-xl font-display text-[#1a1714] mb-4">
                2. Dati Raccolti e Finalità del Trattamento
              </h2>

              <h3 className="text-fluid-base font-medium text-[#1a1714] mb-3">
                2.1 Dati forniti volontariamente dall'utente
              </h3>
              <p className="text-fluid-sm text-[#6B5D4D] mb-4">
                Tramite il modulo di contatto presente sul sito, raccogliamo i seguenti dati personali:
              </p>
              <ul className="list-disc list-inside text-fluid-sm text-[#6B5D4D] mb-6 space-y-2 ml-4">
                <li><strong>Nome e Cognome</strong> - per identificare l'interessato</li>
                <li><strong>Indirizzo Email</strong> - per rispondere alle richieste</li>
                <li><strong>Numero di Telefono</strong> (facoltativo) - per contatti telefonici</li>
                <li><strong>Messaggio/Descrizione del Progetto</strong> - per comprendere le esigenze</li>
              </ul>

              <div className="bg-[#C4A35A]/10 border-l-4 border-[#C4A35A] p-4 mb-6">
                <p className="text-fluid-sm font-medium text-[#1a1714] mb-2">Finalità:</p>
                <p className="text-fluid-sm text-[#6B5D4D]">
                  I dati vengono raccolti esclusivamente per rispondere alle richieste di prenotazione, fornire informazioni sui nostri servizi e gestire la relazione commerciale.
                </p>
              </div>

              <h3 className="text-fluid-base font-medium text-[#1a1714] mb-3">
                2.2 Base giuridica del trattamento
              </h3>
              <p className="text-fluid-sm text-[#6B5D4D] mb-4">
                Il trattamento è basato sul <strong>consenso esplicito</strong> dell'interessato (Art. 6, par. 1, lett. a del GDPR), fornito attraverso l'invio del modulo di contatto, e sulla <strong>esecuzione di misure precontrattuali</strong> (Art. 6, par. 1, lett. b del GDPR).
              </p>
            </section>

            {/* 3. Modalità di Trattamento */}
            <section className="mb-10">
              <h2 className="text-fluid-xl font-display text-[#1a1714] mb-4">
                3. Modalità di Trattamento
              </h2>
              <p className="text-fluid-sm text-[#6B5D4D] mb-4">
                I dati personali sono trattati con strumenti informatici e/o telematici, con logiche strettamente correlate alle finalità indicate e, comunque, in modo da garantire la sicurezza e la riservatezza dei dati stessi.
              </p>
              <p className="text-fluid-sm text-[#6B5D4D]">
                Adottiamo misure di sicurezza tecniche e organizzative adeguate per proteggere i dati personali da accessi non autorizzati, perdita, distruzione o divulgazione.
              </p>
            </section>

            {/* 4. Conservazione dei Dati */}
            <section className="mb-10">
              <h2 className="text-fluid-xl font-display text-[#1a1714] mb-4">
                4. Conservazione dei Dati
              </h2>
              <p className="text-fluid-sm text-[#6B5D4D] mb-4">
                I dati personali vengono conservati per il tempo strettamente necessario a gestire le richieste ricevute e le relazioni commerciali conseguenti:
              </p>
              <ul className="list-disc list-inside text-fluid-sm text-[#6B5D4D] space-y-2 ml-4">
                <li><strong>Richieste di preventivo:</strong> i dati vengono conservati per 24 mesi dalla richiesta, salvo instaurazione di rapporto contrattuale</li>
                <li><strong>Rapporti contrattuali:</strong> i dati vengono conservati per 10 anni in conformità agli obblighi fiscali e contabili</li>
                <li><strong>Richieste di informazioni:</strong> i dati vengono conservati per 12 mesi dalla risposta</li>
              </ul>
            </section>

            {/* 5. Comunicazione e Diffusione dei Dati */}
            <section className="mb-10">
              <h2 className="text-fluid-xl font-display text-[#1a1714] mb-4">
                5. Comunicazione e Diffusione dei Dati
              </h2>
              <p className="text-fluid-sm text-[#6B5D4D] mb-4">
                I dati personali non vengono diffusi e possono essere comunicati esclusivamente a:
              </p>
              <ul className="list-disc list-inside text-fluid-sm text-[#6B5D4D] space-y-2 ml-4">
                <li>Personale interno autorizzato al trattamento (titolare e collaboratori)</li>
                <li>Professionisti esterni (commercialisti, consulenti legali) vincolati da obblighi di riservatezza</li>
                <li>Autorità competenti in caso di richieste legittime previste per legge</li>
              </ul>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 mt-6">
                <p className="text-fluid-sm font-medium text-red-800 mb-2">I tuoi dati NON verranno MAI:</p>
                <ul className="list-disc list-inside text-fluid-sm text-red-700 space-y-1 ml-2">
                  <li>Venduti a terze parti</li>
                  <li>Condivisi con scopi di marketing</li>
                  <li>Utilizzati per invio di newsletter non richieste</li>
                  <li>Trasferiti fuori dall'Unione Europea</li>
                </ul>
              </div>
            </section>

            {/* 6. Diritti dell'Interessato */}
            <section className="mb-10">
              <h2 className="text-fluid-xl font-display text-[#1a1714] mb-4">
                6. Diritti dell'Interessato
              </h2>
              <p className="text-fluid-sm text-[#6B5D4D] mb-4">
                In qualità di interessato, hai il diritto di:
              </p>
              <ul className="list-disc list-inside text-fluid-sm text-[#6B5D4D] space-y-2 ml-4 mb-6">
                <li><strong>Accesso (Art. 15 GDPR):</strong> Ottenere conferma dell'esistenza dei tuoi dati e riceverne copia</li>
                <li><strong>Rettifica (Art. 16 GDPR):</strong> Richiedere la correzione di dati inesatti o incompleti</li>
                <li><strong>Cancellazione (Art. 17 GDPR):</strong> Richiedere la cancellazione dei dati ("diritto all'oblio")</li>
                <li><strong>Limitazione (Art. 18 GDPR):</strong> Richiedere la limitazione del trattamento</li>
                <li><strong>Portabilità (Art. 20 GDPR):</strong> Ricevere i dati in formato strutturato e trasferirli ad altro titolare</li>
                <li><strong>Opposizione (Art. 21 GDPR):</strong> Opporsi al trattamento dei dati personali</li>
                <li><strong>Revoca del consenso:</strong> Revocare il consenso in qualsiasi momento</li>
              </ul>

              <div className="bg-[#C4A35A]/10 border-l-4 border-[#C4A35A] p-4">
                <p className="text-fluid-sm font-medium text-[#1a1714] mb-2">Come esercitare i tuoi diritti:</p>
                <p className="text-fluid-sm text-[#6B5D4D] mb-2">
                  Puoi esercitare i tuoi diritti inviando una richiesta via email a{' '}
                  <a href={`mailto:${siteData.email}`} className="text-[#C4A35A] hover:underline">
                    {siteData.email}
                  </a>{' '}
                  o tramite raccomandata A/R all'indirizzo: {siteData.indirizzo.completo}.
                </p>
                <p className="text-fluid-sm text-[#6B5D4D]">
                  Risponderemo entro <strong>30 giorni</strong> dalla ricezione della richiesta.
                </p>
              </div>
            </section>

            {/* 7. Diritto di Reclamo */}
            <section className="mb-10">
              <h2 className="text-fluid-xl font-display text-[#1a1714] mb-4">
                7. Diritto di Reclamo
              </h2>
              <p className="text-fluid-sm text-[#6B5D4D] mb-4">
                Hai il diritto di proporre reclamo all'Autorità Garante per la protezione dei dati personali se ritieni che il trattamento dei tuoi dati violi il GDPR.
              </p>
              <div className="bg-[#F5F0E8] p-4 rounded-sm">
                <p className="text-fluid-sm font-medium text-[#1a1714] mb-2">Garante per la protezione dei dati personali:</p>
                <p className="text-fluid-sm text-[#6B5D4D]">
                  Sito web:{' '}
                  <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-[#C4A35A] hover:underline">
                    www.garanteprivacy.it
                  </a>
                  <br />
                  Email: garante@gpdp.it
                  <br />
                  PEC: protocollo@pec.gpdp.it
                </p>
              </div>
            </section>

            {/* 8. Cookie */}
            <section className="mb-10">
              <h2 className="text-fluid-xl font-display text-[#1a1714] mb-4">
                8. Cookie e Tecnologie di Tracciamento
              </h2>
              <p className="text-fluid-sm text-[#6B5D4D]">
                Il nostro sito utilizza esclusivamente cookie tecnici necessari al funzionamento. Per maggiori informazioni, consulta la nostra{' '}
                <Link to="/cookie-policy" className="text-[#C4A35A] hover:underline">
                  Cookie Policy
                </Link>
                .
              </p>
            </section>

            {/* 9. Modifiche */}
            <section className="mb-10">
              <h2 className="text-fluid-xl font-display text-[#1a1714] mb-4">
                9. Modifiche alla Privacy Policy
              </h2>
              <p className="text-fluid-sm text-[#6B5D4D]">
                Ci riserviamo il diritto di modificare o aggiornare questa Privacy Policy in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con indicazione della data di ultimo aggiornamento. Ti invitiamo a consultare periodicamente questa pagina per essere sempre informato sulle nostre politiche di privacy.
              </p>
            </section>

            {/* 10. Contatti */}
            <section>
              <h2 className="text-fluid-xl font-display text-[#1a1714] mb-4">
                10. Contatti
              </h2>
              <p className="text-fluid-sm text-[#6B5D4D] mb-4">
                Per qualsiasi domanda o richiesta relativa al trattamento dei tuoi dati personali, puoi contattarci:
              </p>
              <div className="bg-[#F5F0E8] p-4 rounded-sm space-y-2">
                <p className="text-fluid-sm text-[#6B5D4D] flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#C4A35A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href={`mailto:${siteData.email}`} className="text-[#C4A35A] hover:underline">
                    {siteData.email}
                  </a>
                </p>
                <p className="text-fluid-sm text-[#6B5D4D] flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#C4A35A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {siteData.telefono}
                </p>
              </div>
            </section>

            {/* Conformità */}
            <div className="mt-12 pt-8 border-t border-[#1a1714]/10 text-center">
              <p className="text-fluid-xs text-[#6B5D4D]/60">
                Questa Privacy Policy è conforme al Regolamento (UE) 2016/679 (GDPR) e al D.Lgs. 196/2003 come modificato dal D.Lgs. 101/2018
              </p>
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
              to="/cookie-policy"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1a1714] text-[#F5F0E8] font-body tracking-wide hover:bg-[#C4A35A] transition-colors"
            >
              Leggi la Cookie Policy
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
