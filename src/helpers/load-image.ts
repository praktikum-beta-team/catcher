export const loadImage = (url: string) =>
  new Promise<HTMLImageElement>((resolve) => {
    const img = new Image();

    img.addEventListener(
      "load",
      () => {
        resolve(img);
      },
      false
    );

    img.addEventListener("error", () => {
      throw new Error();
    });

    img.src = url;
  });
