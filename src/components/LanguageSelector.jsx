import { useTranslation } from "react-i18next";
import { useState } from "react";


export const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState(i18n.language);

  const handleChange = (lng) => {
    i18n.changeLanguage(lng);
    setSelectedLang(lng);
  };

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
        <div title="ᴇs Español">
          <input
            id="option-1"
            name="option"
            type="radio"
            checked={selectedLang === "es"}
            onChange={() => handleChange("es")}
          />
          <label
            className="option"
            htmlFor="option-1"
            data-txt="ᴇs Español"
            onClick={() => handleChange("es")}
          />
        </div>
        <div title="ɢʙ English">
          <input
            id="option-2"
            name="option"
            type="radio"
            checked={selectedLang === "en"}
            onChange={() => handleChange("en")}
          />
          <label
            className="option"
            htmlFor="option-2"
            data-txt="ᴇɴ English"
            onClick={() => handleChange("en")}
          />
        </div>
        <div title="ʙʀ Português">
          <input
            id="option-3"
            name="option"
            type="radio"
            checked={selectedLang === "pt"}
            onChange={() => handleChange("pt")}
          />
          <label
            className="option"
            htmlFor="option-3"
            data-txt="ʙʀ Português"
            onClick={() => handleChange("pt")}
          />
        </div>
      </div>
    </div>
  );
};
