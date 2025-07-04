import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState(null);

  useEffect(() => {
    if (i18n.resolvedLanguage) {
      setSelectedLang(i18n.resolvedLanguage);
    }
  }, [i18n.resolvedLanguage]);

  const handleChange = (lng) => {
    i18n.changeLanguage(lng);
    setSelectedLang(lng);
  };

  if (!selectedLang) return null; 

  return (
    <div className="select">
      <div
        className="selected"
        data-default="Español"
        data-one="Español"
        data-two="English"
        data-three="Português"
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
        <div title="Español">
          <input
            id="option-1"
            name="option"
            type="radio"
            checked={selectedLang === "es"}
            onChange={() => handleChange("es")}
          />
          <label className="option" htmlFor="option-1" data-txt="Español" />
        </div>
        <div title="English">
          <input
            id="option-2"
            name="option"
            type="radio"
            checked={selectedLang === "en"}
            onChange={() => handleChange("en")}
          />
          <label className="option" htmlFor="option-2" data-txt="English" />
        </div>
        <div title="Português">
          <input
            id="option-3"
            name="option"
            type="radio"
            checked={selectedLang === "pt"}
            onChange={() => handleChange("pt")}
          />
          <label className="option" htmlFor="option-3" data-txt="Português" />
        </div>
      </div>
    </div>
  );
};
