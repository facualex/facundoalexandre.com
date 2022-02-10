import React from "react";

function highlightTranslation(text: string, highlights: string[], highlightComponent: React.ReactNode) {
    const pattern = /$(\d+)/g;
    const textCopy = text;

    console.log(text.match(pattern))

    // Get positional numbers
}

export {}