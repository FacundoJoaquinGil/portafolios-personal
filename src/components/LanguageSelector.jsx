import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState(null);

  useEffect(() => {
    setSelectedLang(i18n.language);
  }, [i18n.language]);

  const handleChange = (lng) => {
    i18n.changeLanguage(lng);
  };

  if (!selectedLang) return null;

  return (
    <div className="select">
      <div
        className="selected"
        data-default="ᴇs Español"
        data-one="ᴇs Español"
        data-two="ɢʙ English"
        data-three="ʙʀ Português"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
          className="arrow"
        >
          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
        </svg>
      </div>

      <div className="options">
        {[
          { code: "es", label: "ᴇs Español" },
          { code: "en", label: "ɢʙ English" },
          { code: "pt", label: "ʙʀ Português" },
        ].map(({ code, label }, idx) => (
          <div title={label} key={code}>
            <input
              id={`option-${idx + 1}`}
              name="option"
              type="radio"
              checked={selectedLang === code}
              onChange={() => handleChange(code)}
            />
            <label
              className="option"
              htmlFor={`option-${idx + 1}`}
              data-txt={label}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
