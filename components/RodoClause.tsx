'use client'
import React, { useState } from 'react';

interface RodoClauseProps {
  onAccept: (accepted: boolean) => void;
}

function RodoClause({ onAccept }: RodoClauseProps) {
  const [accepted, setAccepted] = useState(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccepted(e.target.checked);
    onAccept(e.target.checked);
  };

  return (
    <div>
      <img src="/assets/images/shieldRodo.png" width={300} alt="" />
      <h2 className="text-2xl font-semibold mb-4 mt-4">Klauzula RODO</h2>
      <p>Wyrażam zgodę na przetwarzanie moich danych osobowych w celu zapisania się na kurs prowadzony przez 4Tomorrow w Rybniku, 44-207 Rybnik, ul. Magnolii 25, REGON:523745413, NIP: 6423241406, jako administratora moich danych osobowych. Administrator powiadomił mnie, że niniejsza zgoda nie wpływa na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej wycofaniem. Zgodę mogę wycofać poprzez zgłoszenie oświadczenia na adres: 4tomorrowrybnik@gmail.com</p>
      <input className='mt-5' type="checkbox" id="rodoCheckbox" checked={accepted} onChange={handleCheckboxChange} />
      <label className='text-green-300' htmlFor="rodoCheckbox">Akceptuję warunki klauzuli RODO</label>
    </div>
  );
}

export default RodoClause;
