import { FormEvent, ReactNode, useEffect, useState } from 'react';
import { ArrowRight, Lock } from 'lucide-react';
import PageMeta from '@/components/PageMeta';
import '@/styles/gaoz-gate.css';

const PASSWORD = 'GAOZ26';
const STORAGE_KEY = 'tool-gaoz-unlocked';

type CoverCopy = {
  kicker: string;
  title: ReactNode;
  lead: string;
  meta: string;
  pageTitle: string;
  pageDescription: string;
};

const defaultCover: CoverCopy = {
  kicker: 'PROPUESTA · GAOZ · 21 SEMANAS',
  title: (
    <>
      Vender más.
      <br />
      <em>Recuperar capital.</em>
    </>
  ),
  lead: 'Documento de trabajo para Dirección. Ingresa la clave para abrir la propuesta.',
  meta: 'Versión cliente 01 · Solo para uso interno de GAOZ',
  pageTitle: 'TOOL · Propuesta GAOZ',
  pageDescription: 'Acceso a la propuesta confidencial de 21 semanas para transformar la operación comercial de GAOZ.',
};

function isUnlocked(storageKey: string) {
  try {
    return sessionStorage.getItem(storageKey) === '1';
  } catch {
    return false;
  }
}

function markUnlocked(storageKey: string) {
  try {
    sessionStorage.setItem(storageKey, '1');
  } catch {
    /* ignore private-mode write failures */
  }
}

function GaozCover({
  onUnlock,
  storageKey,
  cover,
}: {
  onUnlock: () => void;
  storageKey: string;
  cover: CoverCopy;
}) {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (value.trim() === PASSWORD) {
      markUnlocked(storageKey);
      onUnlock();
      return;
    }
    setError(true);
    setShake(true);
    window.setTimeout(() => setShake(false), 420);
  }

  return (
    <div className="gg">
      <PageMeta title={cover.pageTitle} description={cover.pageDescription} />
      <div className="gg-atmosphere" aria-hidden="true">
        <span className="gg-plane gg-plane-a" />
        <span className="gg-plane gg-plane-b" />
        <span className="gg-grid" />
        <span className="gg-glow" />
      </div>

      <header className="gg-top">
        <a href="/" className="gg-brand" aria-label="TOOL">
          TOOL
        </a>
        <span className="gg-badge">
          <Lock size={13} />
          Propuesta confidencial
        </span>
      </header>

      <main className="gg-main">
        <p className="gg-kicker">{cover.kicker}</p>
        <h1>{cover.title}</h1>
        <p className="gg-lead">{cover.lead}</p>

        <form
          className={`gg-form${shake ? ' is-shake' : ''}`}
          onSubmit={handleSubmit}
          noValidate
        >
          <label htmlFor={`gaoz-access-${storageKey}`}>
            Clave de acceso
            <input
              id={`gaoz-access-${storageKey}`}
              type="password"
              name="password"
              autoComplete="current-password"
              placeholder="••••••••"
              value={value}
              onChange={(event) => {
                setValue(event.target.value);
                if (error) setError(false);
              }}
              aria-invalid={error}
              aria-describedby={error ? `gaoz-access-error-${storageKey}` : undefined}
            />
          </label>
          <button type="submit">
            Abrir propuesta
            <ArrowRight size={18} />
          </button>
          {error && (
            <p id={`gaoz-access-error-${storageKey}`} className="gg-error" role="alert">
              Clave incorrecta. Verifica e intenta de nuevo.
            </p>
          )}
        </form>

        <p className="gg-meta">{cover.meta}</p>
      </main>
    </div>
  );
}

export default function GaozGate({
  children,
  storageKey = STORAGE_KEY,
  cover = defaultCover,
}: {
  children: ReactNode;
  storageKey?: string;
  cover?: CoverCopy;
}) {
  const [unlocked, setUnlocked] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setUnlocked(isUnlocked(storageKey));
    setReady(true);
  }, [storageKey]);

  if (!ready) {
    return (
      <div className="gg gg-loading" aria-busy="true">
        <span className="gg-loading-mark">TOOL</span>
      </div>
    );
  }

  if (!unlocked) {
    return <GaozCover storageKey={storageKey} cover={cover} onUnlock={() => setUnlocked(true)} />;
  }

  return <>{children}</>;
}
