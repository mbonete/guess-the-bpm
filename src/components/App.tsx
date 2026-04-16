import { gameStatuses, useGame } from "../hooks/useGame";
import YoutubeEmbed from "./YoutubeEmbed";
import TouchableButton from "./TouchableButton";
import ResultSection from "./ResultSection";
import LanguageButton from "./LanguageButton";
import { useTranslation } from "react-i18next";
import { Activity } from "lucide-react";

export default function App() {
  const {
    songCode,
    finish,
    restart,
    nextSong,
    recordBeat,
    recordedBeats,
    status,
  } = useGame();
  const { t } = useTranslation();

  return (
    <div className="relative flex flex-col min-h-screen w-full max-w-120 min-w-70 px-4 py-6 gap-5">
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(rgba(232,35,58,0.15)_1px,transparent_1px)] bg-size-[32px_32px]" />

      <header className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent" />
          <h1 className="text-lg font-bold uppercase tracking-widest text-text-primary">
            {t("title")}
          </h1>
        </div>
        <LanguageButton />
      </header>

      <YoutubeEmbed embedId={songCode} />

      <ResultSection />

      <p className="text-sm text-text-secondary text-center">
        {t("instructions")}
      </p>

      <div className="relative flex flex-col items-center justify-center flex-1 gap-6">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center gap-[3px] opacity-20 pointer-events-none">
          {Array.from({ length: 40 }).map((_, i) => {
            const center = 20;
            const dist = Math.abs(i - center);
            const height = Math.max(4, 32 - dist * 1.4 + Math.sin(i * 1.7) * 8);
            return (
              <div
                key={i}
                className="w-0.75 rounded-full bg-accent-secondary"
                style={{ height: `${height}px` }}
              />
            );
          })}
        </div>

        <TouchableButton
          onActivate={recordBeat}
          type="primary"
          beatCount={recordedBeats.length}
        >
          <Activity size={72} strokeWidth={1.5} />
        </TouchableButton>

        <div className="flex w-full gap-3">
          <TouchableButton
            onActivate={finish}
            type="secondary"
            disabled={
              recordedBeats.length < 2 || status === gameStatuses.FINISHED
            }
          >
            {t("submit")}
          </TouchableButton>
          <TouchableButton
            onActivate={restart}
            type="secondary"
            disabled={
              recordedBeats.length < 1 || status === gameStatuses.FINISHED
            }
          >
            {t("restart")}
          </TouchableButton>
          <TouchableButton onActivate={nextSong} type="secondary">
            {t("nextSong")}
          </TouchableButton>
        </div>
      </div>

      <footer className="text-xs text-text-secondary text-center pt-2">
        Made from Spain with &hearts; Maria Bonete
      </footer>
    </div>
  );
}
