import { useAmp } from "next/amp";

export const AmpGAStarter = () => {
  const isAmp = useAmp();
  if (!isAmp || process.env.NODE_ENV !== "production") {
    return null;
  }

  return (
    <amp-analytics type="gtag" data-credentials="include">
      <script
        type="application/json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            vars: {
              gtag_id: process.env.NEXT_PUBLIC_GA_ID,
              config: {
                [`${process.env.NEXT_PUBLIC_GA_ID}`]: {
                  groups: "default",
                },
              },
            },
          }),
        }}
      />
    </amp-analytics>
  );
};
