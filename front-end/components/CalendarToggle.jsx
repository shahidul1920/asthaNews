'use client';

import { CalendarHeartIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function CalendarToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const dateInputRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleOutsideClick);

    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  useEffect(() => {
    if (isOpen) {
      dateInputRef.current?.showPicker?.();
      dateInputRef.current?.focus?.();
    }
  }, [isOpen]);

  return (
    <div ref={wrapperRef} className="relative flex justify-end">
      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        className="rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-black"
        aria-label="Open calendar"
        aria-expanded={isOpen}
      >
        <CalendarHeartIcon />
      </button>

      {isOpen ? (
        <div className="absolute right-0 top-12 z-50 w-72 rounded-2xl border border-gray-200 bg-white p-4 shadow-lg">
          <p className="mb-3 text-sm font-semibold text-gray-700">Select a date</p>
          <input
            ref={dateInputRef}
            type="date"
            className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm text-gray-700 outline-none focus:border-red"
          />
        </div>
      ) : null}
    </div>
  );
}