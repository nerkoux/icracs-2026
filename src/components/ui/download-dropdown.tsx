"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, FileText, FileIcon } from "lucide-react";

interface DownloadOption {
  label: string;
  href: string;
  icon: "word" | "pdf";
}

export function DownloadDropdown({
  label,
  options,
}: {
  label: string;
  options: DownloadOption[];
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <Button
        variant="outline"
        className="flex items-center space-x-2"
        onClick={() => setOpen(!open)}
      >
        <Download className="h-4 w-4" />
        <span>{label}</span>
      </Button>
      {open && (
        <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          {options.map((option, index) => (
            <a
              key={index}
              href={option.href}
              download={option.icon === "word" ? true : undefined}
              target={option.icon === "pdf" ? "_blank" : undefined}
              rel={option.icon === "pdf" ? "noopener noreferrer" : undefined}
              className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg"
              onClick={() => setOpen(false)}
            >
              {option.icon === "word" ? (
                <FileText className="h-5 w-5 text-blue-600" />
              ) : (
                <FileIcon className="h-5 w-5 text-red-600" />
              )}
              <span className="text-sm text-gray-700">{option.label}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
