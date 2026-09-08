import { useEffect } from "react";

type PageMetaProps = {
  title: string;
  description: string;
};

export default function PageMeta({ title, description }: PageMetaProps) {
  useEffect(() => {
    document.title = title;
    const selectors = [
      ['meta[name="description"]', "content", description],
      ['meta[property="og:title"]', "content", title],
      ['meta[property="og:description"]', "content", description],
      ['meta[name="twitter:title"]', "content", title],
      ['meta[name="twitter:description"]', "content", description],
    ] as const;

    selectors.forEach(([selector, attribute, value]) => {
      document.querySelector(selector)?.setAttribute(attribute, value);
    });
  }, [description, title]);

  return null;
}
