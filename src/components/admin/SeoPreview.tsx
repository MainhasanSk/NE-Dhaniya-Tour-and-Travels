"use client";

import React from "react";

interface SeoPreviewProps {
  title: string;
  slug: string;
  description: string;
  basePath?: string;
}

export const SeoPreview: React.FC<SeoPreviewProps> = ({
  title,
  slug,
  description,
  basePath = "blog"
}) => {
  const displayUrl = `https://nedhaniyatours.com/${basePath}/${slug || "sample-slug"}`;

  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
        Google Search Snippet Preview
      </span>

      <div className="space-y-1">
        <div className="text-xs text-slate-500 font-mono truncate">
          {displayUrl}
        </div>
        <h4 className="text-base sm:text-lg text-[#1a0dab] font-medium hover:underline cursor-pointer line-clamp-1">
          {title || "Enter an SEO Title..."}
        </h4>
        <p className="text-xs sm:text-sm text-[#4d5156] line-clamp-2 leading-relaxed">
          {description || "Enter a compelling meta description summarizing the destination, package, or guide to attract clicks on Google search results."}
        </p>
      </div>

      <div className="pt-2 text-[10px] text-slate-400 flex items-center gap-4">
        <span>Title Length: <strong>{title.length}</strong> / 60 chars</span>
        <span>Desc Length: <strong>{description.length}</strong> / 160 chars</span>
      </div>
    </div>
  );
};
