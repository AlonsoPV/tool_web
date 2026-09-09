import { FormEvent, ReactNode, useEffect, useState } from 'react';
import { ArrowRight, Lock } from 'lucide-react';
import PageMeta from '@/components/PageMeta';
import '@/styles/gaoz-gate.css';

const PASSWORD = 'GAOZ26';
const STORAGE_KEY = 'tool-gaoz-unlocked';

function isUnlocked() {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === '1';
  } catch {
    return false;
  }
}

function markUnlocked() {
  try {
    sessionStorage.setItem(STORAGE_KEY, '1');
  } catch {
    /* ignore private-mode write failures */
  }
}

function GaozCover({ onUnlock }: { onUnlock: () => void }) {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (value.trim() === PASSWORD) {
      markUnlocked();
      onUnlock();
      return;
    }
    setError(true);
    setShake(true);
    window.setTimeout(() => setShake(false), 420);
  }

  return (
    <div className="gg">
      <PageMeta
        title="TOOL · Propuesta GAOZ"
        description="Acceso a la propuesta confidencial TOOL Sales Lab para GAOZ."
      />
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
        <p className="gg-kicker">TOOL SALES LAB · GAOZ 2026</p>
        <h1>
          De la experiencia
          <br />
          <em>al sistema comercial.</em>
        </h1>
        <p className="gg-lead">
          Documento de trabajo para Dirección. Ingresa la clave para abrir la propuesta.
        </p>

        <form
          className={`gg-form${shake ? ' is-shake' : ''}`}
          onSubmit={handleSubmit}
          noValidate
        >
          <label htmlFor="gaoz-access">
            Clave de acceso
            <input
              id="gaoz-access"
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
              aria-describedby={error ? 'gaoz-access-error' : undefined}
            />
          </label>
          <button type="submit">
            Abrir propuesta
            <ArrowRight size={18} />
          </button>
          {error && (
            <p id="gaoz-access-error" className="gg-error" role="alert">
              Clave incorrecta. Verifica e intenta de nuevo.
            </p>
          )}
        </form>

        <p className="gg-meta">Versión cliente 01 · Solo para uso interno de GAOZ</p>
      </main>
    </div>
  );
}

export default function GaozGate({ children }: { children: ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setUnlocked(isUnlocked());
    setReady(true);
  }, []);

  if (!ready) {
    return (
      <div className="gg gg-loading" aria-busy="true">
        <span className="gg-loading-mark">TOOL</span>
      </div>
    );
  }

  if (!unlocked) {
    return <GaozCover onUnlock={() => setUnlocked(true)} />;
  }

  return <>{children}</>;
}
