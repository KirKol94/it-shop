// функция обрезает лишние строки до переданного значения
export const cutLongStringStyles = (lineCount: number) => {
  return {
    "word-break": "break-word",
    display: "-webkit-box",
    "-webkit-line-clamp": `${lineCount}`,
    "line-clamp": `${lineCount}`,
    "text-overflow": "ellipsis",
    overflow: "hidden",
    "-webkit-box-orient": "vertical",
  };
};
